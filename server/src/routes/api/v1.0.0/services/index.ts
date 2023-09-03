import express from "express";
import AddService from "../../../../models/AddService";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        if (req?.body?.email) {
            const allServices = await AddService.find({ email: req.body.email });
            res.json(allServices);
        } else {
            const allServices = await AddService.find();
            res.json(allServices);
        }
    } catch (error) {
        res.json({ message: error });
    }
});

export default router;