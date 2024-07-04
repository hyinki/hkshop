import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/UserModel.js';
import generateToken from '../utils/generateToken.js';


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {

        // const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET, {
        //     expiresIn: '30d'
        // })

        // res.cookie('jwt', token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV !== 'development',
        //     sameSite: 'Strict',
        //     maxAge: 30*24*60*60*1000
        // })
        generateToken(res, user._id);
    
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        });
      } else {
        res.status(401);
        throw new Error('Invalid email or password');
      }


   //res.send("djwnd")
});

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
    
});

const logoutUser = asyncHandler(async (req, res) => {
    res.clearCookie('jwt', '', {
        httpOnly: true, 
        expires: new Date(0), 
    });
  res.status(200).json({ message: 'Logged out successfully' });
   
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