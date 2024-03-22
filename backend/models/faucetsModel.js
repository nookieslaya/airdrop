import mongoose from 'mongoose'

const faucetsSchema = mongoose.Schema({
	userId: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
})

const Faucet = mongoose.model('Faucet', faucetsSchema)

export default Faucet
