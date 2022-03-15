import multer from "multer";

export const upload = multer({
    storage: multer.diskStorage({
        destination(_, __, cb) {
            cb(null, 'static/avatars');
        },
        filename(_, file, cb) {
            cb(null, file.fieldname + '-' + Math.random().toString(32) + '.' + file.mimetype.split('/').pop());
        }
    })
})
