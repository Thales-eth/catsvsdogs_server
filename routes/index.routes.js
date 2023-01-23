const router = require("express").Router();

router.use("/", require('./catfacts.routes'))
router.use("/", require('./dogfacts.routes'))
router.use("/auth", require('./auth.routes'))
router.use("/users", require('./user.routes'))

module.exports = router;
