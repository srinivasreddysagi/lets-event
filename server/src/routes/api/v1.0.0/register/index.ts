import express from "express";
import Register from "../../../../models/Register";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const registeredUsers = await Register.find();
        res.json(registeredUsers);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', (req, res) => {
    const registrationData = new Register({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
    });

    try {
        const dbResponse = registrationData.save();
        res.json(dbResponse);
    } catch(error) {
        res.json({ message: error });
    }
})

export default router;