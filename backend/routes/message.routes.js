import express from 'express';
import { sendMesage,getMesages } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';
const router = express.Router()

router.get('/:id',protectRoute, getMesages)
router.post('/send/:id',protectRoute, sendMesage)


export default router;