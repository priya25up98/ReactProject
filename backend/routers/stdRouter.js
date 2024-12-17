import express from 'express';

import { addstd } from '../controllers/stdController';

const router = express.Router()

router.post("/add-std", addstd)

export default router;