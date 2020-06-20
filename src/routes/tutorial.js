let router = require('express').Router();

router.get('/', (req, res) => {
    res.render('tutorial/index.hbs')
})

router.get('/guide1', (req, res) => {
    res.render('tutorial/guide1.hbs')
})

router.get('/guide2', (req, res) => {
    res.render('tutorial/guide2.hbs')
})

router.get('/guide3', (req, res) => {
    res.render('tutorial/guide3.hbs')
})

router.get('/guide4', (req, res) => {
    res.render('tutorial/guide4.hbs')
})

router.get('/guide5', (req, res) => {
    res.render('tutorial/guide5.hbs')
})

router.get('/guide6', (req, res) => {
    res.render('tutorial/guide6.hbs')
})

router.get('/guide7', (req, res) => {
    res.render('tutorial/guide7.hbs')
})

router.get('/guide8', (req, res) => {
    res.render('tutorial/guide8.hbs')
})

router.get('/guide9', (req, res) => {
    res.render('tutorial/guide9.hbs')
})

module.exports = router;