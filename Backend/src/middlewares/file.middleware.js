const multer = require('multer');


const upload = multer({
    storage : multer.memoryStorage(),
    limits : {
        fileSize : 3 * 1024 * 1024
    },
    fileFilter: (_req, file, callback) => {
        if (file.mimetype !== "application/pdf") {
            const error = new Error("Only PDF resume uploads are supported.");
            error.status = 400;
            return callback(error);
        }
        callback(null, true);
    }
})

module.exports = upload;
