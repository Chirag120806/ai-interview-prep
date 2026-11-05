const express = require('express');

const authRouter = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const { rateLimit } = require('../middlewares/rate-limit.middleware');

const authRateLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: "Too many authentication attempts. Please try again later.",
});

authRouter.post("/register", authRateLimit, authController.registerUserController);

authRouter.post("/login", authRateLimit, authController.loginUserController);

authRouter.get('/logout', authController.logoutUserController);

authRouter.get("/get-me", authMiddleware.authUser, authController.getMeController);


module.exports = authRouter;
