import express from 'express'
import { CreateFaucet, UpdateFaucet, GetFaucet, DeleteFaucet } from '../controllers/dashboardController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/faucet', CreateFaucet)
router.put('/faucet/:id', UpdateFaucet)
router.get('/faucet/:userID', protect, GetFaucet)
router.delete('/faucet/:id', DeleteFaucet)

export default router
