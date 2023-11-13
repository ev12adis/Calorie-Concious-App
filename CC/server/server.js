require("dotenv").config();
const express = require("express");
const db = require("./db");
const cors = require("cors");
var morgan = require("morgan");
const app = express();
app.use(cors());
app.use(express.json());

/*app.get("/api/v1/data/:id", async (req, res) => {
  res.status(200).json({
    status: "success",
    food: "burger",
  });
});
*/

//Register a new user
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await db.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password]);

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Authenticate a user
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await db.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);

    if (result.rows.length > 0) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Get total calories for a user on a specific day
app.get("/api/calories/:username/:date", async (req, res) => {
  const { username, date } = req.params;

  try {
    const result = await db.query('SELECT users.username, SUM(foods.calories) AS total_calories FROM users JOIN user_foods ON users.user_id = user_foods.user_id JOIN foods ON user_foods.food_id = foods.food_id WHERE users.username = $1 AND DATE(user_foods.timestamp) = $2 GROUP BY users.username', [username, date]);

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching total calories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Add a food selection for a user
app.post("/api/userfood", async (req, res) => {
  const { user_id, food_id } = req.body;

  try {
    await db.query('INSERT INTO user_foods (user_id, food_id) VALUES ($1, $2)', [user_id, food_id]);

    res.json({ message: 'Food selection added successfully' });
  } catch (error) {
    console.error("Error adding food selection:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a user-selected food item
app.delete('/api/userfood/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await db.query('DELETE FROM user_foods WHERE user_food_id = $1', [id]);

    res.json({ message: 'User-selected food item deleted successfully' });
  } catch (error) {
    console.error('Error deleting user-selected food item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Get a list of food items
app.get('/api/food', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM foods');

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching food items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Get specific food --potentially useless
app.get('/api/food/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM foods WHERE food_id = $1', [id]);

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching specific food:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
/*TEST app.get("/api/foods", (req, res) => {
  res.json({
    status: "success",
    food: "donut",
  });
});*/

// Update a specific food item
app.put('/api/food/:id', async (req, res) => {
  const { id } = req.params;
  const { food_name, calories } = req.body;

  try {
    await db.query('UPDATE foods SET food_name = $1, calories = $2 WHERE food_id = $3', [food_name, calories, id]);

    res.json({ message: 'Food item updated successfully' });
  } catch (error) {
    console.error('Error updating food item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Add a food item
app.post('/api/food', async (req, res) => {
  const { food_name, calories } = req.body;

  try {
    await db.query('INSERT INTO foods (food_name, calories) VALUES ($1, $2)', [food_name, calories]);

    res.json({ message: 'Food item added successfully' });
  } catch (error) {
    console.error('Error adding food item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Delete a food item
app.delete('/api/food/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await db.query('DELETE FROM foods WHERE food_id = $1', [id]);

    res.json({ message: 'Food item deleted successfully' });
  } catch (error) {
    console.error('Error deleting food item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




//Add a restaurant for a user
app.post("/api/restaurants", async (req, res) => {
  const { user_id, place_id, restaurant_name, address, rating } = req.body;

  try {
    await db.query('INSERT INTO restaurants (user_id, place_id, restaurant_name, address, rating) VALUES ($1, $2, $3, $4, $5)', [user_id, place_id, restaurant_name, address, rating]);

    res.json({ message: 'Restaurant added successfully' });
  } catch (error) {
    console.error("Error adding restaurant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get a list of restaurants for a user
app.get("/api/restaurants/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const result = await db.query('SELECT * FROM restaurants WHERE user_id = (SELECT user_id FROM users WHERE username = $1)', [username]);

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Default route for handling invalid endpoints
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`gserver is up and listening on port ${port}`);
});
