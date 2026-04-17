import {createLead, getAllLeads, updateLeadStatus, test} from "../controllers/lead.controller.js";
import express from "express";


const router = express.Router();


router.post("/lead", createLead);
router.get("/test", test);
router.get("/lead", getAllLeads);
router.put("/lead/:id", updateLeadStatus);



export default router;



