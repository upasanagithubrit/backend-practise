const express = require("express"); // Import the express module
const router = express.Router(); // Create a new router object to handle routes

// Import the signup and login handlers from the auth controller
const { signup, login } = require("../controllers/auth");

// Import the middleware for authentication and role-based access control
const { auth, isStudent, isAdmin } = require("../middleware/auth");

// Route for user login
// This route handles POST requests to /login and uses the login function from the auth controller
router.post("/login", login);

// Route for user signup
// This route handles POST requests to /signup and uses the signup function from the auth controller
router.post("/signup", signup);





//----------------------------------------------------------------------------------------------------

////testing route for single middleware
router.get("/test", auth, (req, res) => {
    // If the user passes the authentication and role checks, they receive this response
    res.json({
      success: true,
      message: "Welcome to the protected route for tests",
    });
  });

// Protected route for students
// This route handles GET requests to /student, requires the user to be authenticated and have a "student" role
router.get("/student", auth, isStudent, (req, res) => {
  // If the user passes the authentication and role checks, they receive this response
  res.json({
    success: true,
    message: "Welcome to the protected route for students",
  });
});

// Protected route for admins
// This route handles GET requests to /admin, requires the user to be authenticated and have an "admin" role
router.get("/admin", auth, isAdmin, (req, res) => {
  // If the user passes the authentication and role checks, they receive this response
  res.json({
    success: true,
    message: "Welcome to the protected route for admin",
  });
});

// Export the router to be used in other parts of the application
module.exports = router;
