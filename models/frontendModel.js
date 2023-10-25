// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

//get all from db 
export async function getFrontend() {
  // Define the SQL query to fetch all data from the frontend table
  const queryText = "SELECT * FROM frontend";
  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);
  // The rows property of the result object contains the retrieved records
  console.log(result)
  return result.rows;
}

// console.log(getFrontend())

//POST function to add new value in the frontend table
export async function createFrontend(frontend) {
  // Query the database to create an frontend and return the newly created frontend
  const queryText = "INSERT INTO frontend (title, description, link) VALUES ($1, $2, $3) RETURNING *";
  const result = await pool.query(queryText, [
    frontend.title,
    frontend.description,
    frontend.link
  ]);
      //return result
  return result.rows[0] || null
}