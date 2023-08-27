import express from "express";
import AddService from "../../../../models/AddService";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        let allServices: any = [];
        if (req.body.email) {
            allServices = AddService.find({ email: req.body?.email });
        } else {
            allServices = AddService.find();
        }
        res.json(allServices);
    } catch (error) {
        res.json({ message: error });
    }
});

export default router;