import express from "express";
import Register from "../../../../models/Register";
import messages from "../../../../assets/content/AlertMessages.json";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const loginUser = await Register.where({ email: req.body.email });
        if (loginUser.length > 0) {
            if (loginUser[0].password === req.body.password) {
                res.json({
                    message: messages.login.done,
                    type: messages.alertVariants.success,
                    userData: {
                        signed: true,
                        email: loginUser[0].email,
                    },
                });
            } else {
                res.json({
                    message: messages.login.wrongPcode,
                    type: messages.alertVariants.error
                });
            }
        } else {
            res.json({
                message: messages.login.notRegistered,
                type: messages.alertVariants.warning,
            });
        }
    } catch (err) {
        res.json({ message: err });
    }
});

export default router;