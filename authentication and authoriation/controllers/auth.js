const bcrypt = require('bcrypt');
const usermodel = require('../models/usermodel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//-------------------------signup handler-------------------------
exports.signup = async (req, res) => {
    try {
        // Get data
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const existuser = await usermodel.findOne({ email });
        if (existuser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // Secure password
        let hashedpassword;
        try {
            hashedpassword = await bcrypt.hash(password, 12);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error in hashing password",
                status: error.message
            });
        }

        // Create user entry
        const user = await usermodel.create({
            name, email, password: hashedpassword, role
        });

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in creating user",
            status: error.message
        });
    }
};

//-------------------------login handler-------------------------
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all details"
            });
        }

        // Check for registered user
        let user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User does not exist, please register first"
            });
        }

        // Verify password
        if (await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,
                role: user.role,
            };

            // Create JWT token
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });

            // Set the token in the cookie and respond
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
                httpOnly: true, // Makes the cookie inaccessible to JavaScript on the client side
                secure: process.env.NODE_ENV === 'production', // Set secure to true in production
            };
               

            user=user.toObject();
           user.password=undefined;// Remove password from the response
           user.token=token; 
           res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "User logged in successfully",
            });

        } else {
            return res.status(401).json({
                success: false,
                message: "Incorrect password"
            });
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Login failed",
            status: error.message
        });
    }
};
