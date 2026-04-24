import {createLead, getAllLeads, updateLeadStatus, adminLogin, test} from "../controllers/lead.controller.js";
import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";


const router = express.Router();

router.post("/login", adminLogin);
router.post("/lead", createLead);
router.get("/test", test);
router.get("/lead", verifyToken, getAllLeads);
router.put("/lead/:id", verifyToken,  updateLeadStatus);



export default router;



