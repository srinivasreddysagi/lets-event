import express from "express";
import Register from "../../../../models/Register";
import * as messages from "../../../../assets/content/AlertMessages.json";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const registeredUsers = await Register.find();
        res.json(registeredUsers);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const registrationData = new Register({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
    });

    try {
        const registeredUser = await Register.find({
            email: req.body.email,
        });
        if (registeredUser.length > 0) {
            res.json({
                type: messages.alertVariants.info,
                message: messages.registration.exist,
            });
        } else {
            const dbResponse = registrationData.save();
            res.json({
                dbOut: dbResponse,
                type: messages.alertVariants.success,
                message: messages.registration.done,
            });
        }
    } catch(error) {
        res.json({ message: error });
    }
})

export default router;