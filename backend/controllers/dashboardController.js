import Faucet from '../models/faucetsModel.js'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


const CreateFaucet = async (req, res) => {
	try {
		const { faucetName, url } = req.body

		const userId = req.user._id

		const newFaucet = new Faucet({ userOwner: userId, faucetName, url })
		const response = await newFaucet.save()

		const user = await User.findById(userId)
		user.faucet.push(newFaucet._id)
		await user.save()

		res.status(201).json(response)
	} catch (error) {
		console.error('Błąd podczas dodawania kranu:', error.message)
		res.status(500).json({ message: 'Wystąpił błąd serwera podczas dodawania kranu.' })
	}
}

// Pobieranie faucet
const GetFaucet =  async (req, res) => {
	try {
		const user = await User.findById(req.params.userID).populate('faucet');
		if (!user) {
		  return res.status(404).json({ message: 'User not found' });
		}
	
		console.log(user.faucet);
		res.status(200).json({ faucet: user.faucet });
	  } catch (err) {
		console.error(err.message);
		res.status(500).json({ message: 'Server Error' });
	  }
}

// Edytowanie faucet
const UpdateFaucet = asyncHandler(async (req, res) => {})

// Usuwanie faucet
const DeleteFaucet = asyncHandler(async (req, res) => {})

export { CreateFaucet, DeleteFaucet, UpdateFaucet, GetFaucet }
