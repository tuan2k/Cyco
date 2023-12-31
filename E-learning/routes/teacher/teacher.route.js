const express = require('express');
const router = express.Router();

const controller = require('../../controller/teacher/teacher.controller');
const auth = require('../../middlewares/auth.mdw');
router.get('/', controller.getHomePage);
router.get('/profile', controller.getProfile);
router.get('/course', controller.getHomePage);
router.get('/course/add', controller.getAddCourse);
router.get('/edit-password', controller.getEditPassword);
router.get('/course/upload/:id', controller.getUpload);
router.get('/course/edit/:id', controller.getEditCourse);
router.get('/course/:id', controller.getDetailCourse);
router.get('/course/:idCourse/chapter/:idChapter/lesson/:idLesson', controller.getVideoLesson);
router.post('/course/upload/:id', controller.postUpload);
router.post('/course/add', controller.postAddCourse);
router.post('/profile/edit', controller.postEditProfile);
router.post('/edit-password', controller.postEditPassword);
router.post('/course/edit/:id', controller.postEditCourse);
module.exports = router;