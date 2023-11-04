const multer=require('multer')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null,"./uploads");
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`);
    }
});

// const fileFilter = (req, file, callback) => {
//     if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
//         callback(null, true);
//     } else {
//         callback(null,false)
//         callback(new Error("Only allowed image types"));
//     }
// };
const filefilter = (req, file, callback) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        callback(null, true); // Indicates that the file is allowed
    } else {
        // Indicates that the file does not meet the filter criteria with an error
        callback(new Error("Only allowed image types"), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter:filefilter,
});

module.exports=upload;