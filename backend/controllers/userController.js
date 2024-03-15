import asyncHandler from 'express-async-handler'

//desc        Auth user/set token
//route       POST api/users/auth
//access      Public
const authUser = asyncHandler((req, res) => {
	res.status(200).json({ message: 'Auth User' })
})

//desc        Register new user
//route       POST api/users/
//access      Public
const registerUser = asyncHandler((req, res) => {
	res.status(200).json({ message: 'Register User' })
})

//desc        Logout user
//route       POST api/users/logout
//access      Public
const logoutUser = asyncHandler((req, res) => {
	res.status(200).json({ message: 'Logout User' })
})

//desc        Get user Profile
//route       Get api/users/profile
//access      Private
const getUserProfile = asyncHandler((req, res) => {
	res.status(200).json({ message: 'User Profile' })
})

//desc        Update user Profile
//route       PUT api/users/profile
//access      Private
const updateUserProfile = asyncHandler((req, res) => {
	res.status(200).json({ message: 'Update User Profile' })
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }
