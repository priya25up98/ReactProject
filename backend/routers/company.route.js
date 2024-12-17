import express from "express";

import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller copy.js";



const router = express.Router();

router.post('/register-company', registerCompany)
router.get('/get-companies', getCompany)
router.get('/get-company/:id', getCompanyById)
router.put('/update-company/:id', updateCompany)

export default router;

