import express from "express";
import { messagePush, messagePull } from "../controller/message.controller.js";

const router = express.Router();

router.post("/", messagePush);
router.get("/", messagePull);

export default router;
