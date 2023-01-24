const router = require("express").Router()

const fileUploader = require('../config/cloudinary.config.js')

router.post('/upload', fileUploader.single('imageUrl'), (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error cargando el archivo' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})

module.exports = router