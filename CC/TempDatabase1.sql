CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL
);

CREATE TABLE CalorieTracking (
    TrackingID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    FoodName VARCHAR(255) NOT NULL,
    Calories INT NOT NULL,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE LastSelectedFoods (
    SelectionID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    FoodName VARCHAR(255) NOT NULL,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Restaurants (
    RestaurantID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    Phone VARCHAR(20),
    Website VARCHAR(255),
    Rating FLOAT,
    UserID INT, -- to associate restaurants with users if needed
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
