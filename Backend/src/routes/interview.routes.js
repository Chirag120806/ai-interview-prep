const express = require('express');
const interviewRouter = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const interviewController = require('../controllers/interview.controller');
const upload = require('../middlewares/file.middleware');
const { rateLimit } = require('../middlewares/rate-limit.middleware');

const reportRateLimit = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 10,
    message: "Interview report limit reached. Please try again later.",
});

interviewRouter.post('/', authMiddleware.authUser, reportRateLimit, upload.single("resume"), interviewController.generateInterviewReportController);

interviewRouter.get('/:interviewId', authMiddleware.authUser, interviewController.getInterviewReportByIdController);

interviewRouter.get("/", authMiddleware.authUser, interviewController.getAllInterviewReportsController);

interviewRouter.post('/resume/pdf/:interviewReportId', authMiddleware.authUser, interviewController.generateResumePdfController)

module.exports = interviewRouter;
