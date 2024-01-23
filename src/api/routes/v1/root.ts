import express from "express";
import rootController from "../../controller/root.controller";
const { health } = rootController;
const router = express.Router();

router.get("/health", health);

export default router;
