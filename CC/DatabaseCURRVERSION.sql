--Table to store user information
CREATE TABLE users (
    user_id serial PRIMARY KEY ,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    UNIQUE (username)
);

--Table to store food items for the calorie counter
CREATE TABLE foods (
    food_id serial PRIMARY KEY ,
    food_name VARCHAR(255) NOT NULL,
    calories INT NOT NULL
);

--Table to store user-selected foods
CREATE TABLE user_foods (
    user_food_id serial PRIMARY KEY,
    user_id INT,
    food_id INT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (food_id) REFERENCES foods(food_id)
);

--Table to store information about restaurants from Google Maps API
CREATE TABLE restaurants (
    restaurant_id serial PRIMARY KEY,
    user_id INT,
    place_id VARCHAR(255) NOT NULL,
    restaurant_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    rating DECIMAL(3, 2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);




QUERIES
--GET SUM CALORIES FOR THE DAY
SELECT users.username, 
       SUM(foods.calories) AS total_calories
FROM users
JOIN user_foods ON users.user_id = user_foods.user_id
JOIN foods ON user_foods.food_id = foods.food_id
WHERE users.username = 'testuser' 
  AND DATE(user_foods.timestamp) = '2023-11-13';