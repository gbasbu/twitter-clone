const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require("passport");
const UserService = require('../services/user-service')
const key = require('../config/keys').tokenKey;

// Create User





module.exports = router