import Faucet from '../models/faucetsModel.js'
import asyncHandler from 'express-async-handler'

// Dodawanie nowego faucet
const CreateFaucet = asyncHandler(async (req, res) => {
	const { name, url } = req.body

	const userId = req.user._id
	console.log(req.user._id)
	const faucet = new Faucet({ name, url, userId })
	const savedFaucet = await faucet.save()

	res.status(201).json(savedFaucet)
})

// Edytowanie faucet
const UpdateFaucet = asyncHandler(async (req, res) => {
	const faucetId = req.params.id
	const userId = req.user._id
	const { name, url } = req.body

	const faucetToUpdate = await Faucet.findOne({ _id: faucetId, userId })
	if (!faucetToUpdate) {
		res.status(404)
		throw new Error('Faucet not found or unauthorized to edit')
	}

	faucetToUpdate.name = name || faucetToUpdate.name
	faucetToUpdate.url = url || faucetToUpdate.url

	const updatedFaucet = await faucetToUpdate.save()
	res.status(200).json(updatedFaucet)
})

// Pobieranie faucet
const GetFaucet = asyncHandler(async (req, res) => {
	const faucetId = req.params.id
	const userId = req.user._id

	const faucet = await Faucet.findOne({ _id: faucetId, userId })
	if (!faucet) {
		res.status(404)
		throw new Error('Faucet not found or unauthorized to access')
	}

	res.status(200).json(faucet)
})

// Usuwanie faucet
const DeleteFaucet = asyncHandler(async (req, res) => {
	const faucetId = req.params.id
	const userId = req.user._id

	const faucetToDelete = await Faucet.findOne({ _id: faucetId, userId })
	if (!faucetToDelete) {
		res.status(404)
		throw new Error('Faucet not found or unauthorized to delete')
	}

	await faucetToDelete.remove()
	res.status(200).json({ message: 'Faucet deleted successfully' })
})

export { CreateFaucet, DeleteFaucet, UpdateFaucet, GetFaucet }
