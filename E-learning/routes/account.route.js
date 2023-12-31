const express = require('express');
const router = express.Router();
const controller = require('../controller/account.controller');
router.get('/register', controller.getRegister);
router.post('/register', controller.postRegister);
router.get('/verify', controller.getVerifyPage);
router.post('/verify', controller.postVerifyAccount);
router.get('/is-available', controller.isAvailableAccount);
router.get('/login', controller.getLogin);
router.post('/login', controller.postLogin);
router.post('/logout', controller.postLogout);
module.exports = router;