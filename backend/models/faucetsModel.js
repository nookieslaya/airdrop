import mongoose from 'mongoose'

const faucetsSchema = mongoose.Schema(
	{
		userOwner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'users',
			required: true,
		},
		faucetName: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const Faucet = mongoose.model('Faucet', faucetsSchema)

export default Faucet
