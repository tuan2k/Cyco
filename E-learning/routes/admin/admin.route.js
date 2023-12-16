const express = require('express');
const router = express.Router();
const controller = require('../../controller/admin/admin.controller');
router.get('/', controller.getadminHome);
router.get('/course/all', controller.getAllCourse);
router.delete('/course/:id', controller.deleteCourse);
router.put('/course/:id', controller.enableCourse);
router.get('/course/detail/:id', controller.getCourseDetail);
router.get('/course/edit/:id', controller.getEditCoursePage);
router.post('/course/edit/:id', controller.editCourse);
router.get('/category/all', controller.getCategoryPage);
router.get('/category/edit/:id', controller.getEditCategoryPage);
router.post('/category/edit/:id', controller.editCategoryById);
router.delete('/category/:id', controller.deleteCategory);
router.get('/category/add', controller.getAddCategoryPage);
router.post('/category/add', controller.addNewCategory);
router.get('/headercategory/all', controller.getHeaderCategoryPage);
router.get('/headercategory/edit/:id', controller.getEditHeaderCategoryPage);
router.post('/headercategory/edit/:id', controller.editHeaderCategoryById);
router.delete('/headercategory/:id', controller.deleteHeaderCategory);
router.get('/headercategory/add', controller.getAddHeaderCategoryPage);
router.post('/headercategory/add', controller.addNewHeaderCategory);
router.get('/teacher/all', controller.getAllTeacher);
router.get('/teacher/:id', controller.getTeacherById);
router.delete('/teacher/:id', controller.blockTeacher);
router.delete('/teacher/unblock/:id', controller.unblockTeacher);
router.get('/teacher/all/pending', controller.getPendingTeacherPage);
router.post('/teacher/all/pending/:id', controller.approvePendingTeacher);
router.delete('/teacher/decline/:id', controller.declineTeacher);
router.get('/student/all', controller.getAllUserPage);
router.get('/student/:id', controller.getUserById);
router.put('/student/:id', controller.blockStudent);
router.put('/student/unblock/:id', controller.unblockStudent);
router.get('/profile', controller.getAdminProfilePage);
router.post('/profile/edit', controller.editAdminProfile);
router.post('/student/:id', controller.editUserByAdmin);

module.exports = router;