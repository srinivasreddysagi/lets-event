import express from "express";
import AddService from "../../../../models/AddService";
import * as messages from "../../../../assets/content/AlertMessages.json";

const router = express.Router();

router.post("/", async (req, res) => {
    const addServiceData = new AddService({
        service: req.body.service,
        name: req.body.name,
        city: req.body.city,
        price: req.body.price,
        contact: req.body.contact,
    });

    try {
        const dbResponse = addServiceData.save();
        res.json({
            dbResponse: dbResponse,
            type: messages.alertVariants.success,
            message: messages.services.done,
        });
    } catch (error) {
        res.json({ message: error });
    }
});

export default router;