import express from "express";
import Register from "../../../../models/Register";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const loginUser = await Register.where({ email: req.body.email });
        if (loginUser.length > 0)  {
            if (loginUser[0].password === req.body.password) {
                res.json({
                    status: 200,
                    message: "Authorized",
                });
            } else {
                res.json({
                    status: 401,
                    message: "Unauthorized - Invalid password",
                });
            }
        } else {
            res.json({ status: 401, message: "User is not registered" });
        }
    } catch (err) {
        res.json({ message: err });
    }
});

export default router;