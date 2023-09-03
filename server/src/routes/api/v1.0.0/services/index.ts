import express from "express";
import AddService from "../../../../models/AddService";

const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const allServices = await AddService.find({
            email: req.params.id,
        });
        res.json(allServices);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get("/", async (req, res) => {
    try {
        const allServices = await AddService.find();
        res.json(allServices);
    } catch (error) {
        res.json({ message: error });
    }
});

export default router;