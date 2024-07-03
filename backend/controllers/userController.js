import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/UserModel.js';



const authUser = asyncHandler(async (req, res) => {
    res.send("auth user")
});

const registerUser = asyncHandler(async (req, res) => {
    res.send("register user")
});

const logoutUser = asyncHandler(async (req, res) => {
    res.send("log out user")
});


const getUserProfile = asyncHandler(async (req, res) => {
    res.send("get user profile")
});

const updateUserProfile = asyncHandler(async (req, res) => {
    res.send("update user profile")
});

const getUsers = asyncHandler(async (req, res) => {
    res.send("get users")
});

const getUserById = asyncHandler(async (req, res) => {
    res.send("get users by id")
});


const deleteUser = asyncHandler(async (req, res) => {
    res.send("delete users")
});

const updateUser = asyncHandler(async (req, res) => {
    res.send("update users")
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
  };