import express from "express";
import { messagePush } from "../controller/message.controller.js";

const router = express.Router();

router.post("/", messagePush);

export default router;
