var express = require('express');
var session = require('express-session');
const { response } = require('../app');
var router = express.Router();

router.get('/', function(req, res, next) {
  //if (req.session.loggedin) {
    res.render('admin/index', {layout: 'admin-layout', pageId: 'homeNav'});

  // }else{
  //   res.redirect('login');
  // }
});
router.get('/projects', function(req, res, next) {
  res.render('admin/projects', {layout: 'admin-layout', pageId: 'projectNav'});
});

router.get('/clients', function(req, res, next) {
  res.render('admin/clients', {layout: 'admin-layout', pageId: 'clientNav'});
});
router.get('/galleries', function(req, res, next) {
  res.render('admin/galleries', {layout: 'admin-layout', pageId: 'galleryNav'});
});
router.get('/feedbacks', function(req, res, next) {
  res.render('admin/feedbacks', {layout: 'admin-layout', pageId: 'feedbackNav'});
});
router.get('/partners', function(req, res, next) {
  res.render('admin/partners', {layout: 'admin-layout', pageId: 'partnerNav'});
});
module.exports = router;
