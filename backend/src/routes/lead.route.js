import {createLead, test} from "../controllers/lead.controller.js";
import express from "express";


const router = express.Router();


router.post("/lead", createLead);
router.get("/test", test);



export default router;



