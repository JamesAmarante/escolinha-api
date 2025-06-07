const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "upload/");
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().toISOString().replaceAll(":", "").replaceAll('.',"")}${file.originalname}`)
    }
});

module.exports = multer({ storage: storage })
