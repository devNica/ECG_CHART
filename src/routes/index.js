let router = require('express').Router();
let data = require('../public/js/index');

router.get('/index', (req, res) => {
    res.render('templates/index')
})

router.get('/graficarEcg', (req, res) => {
    res.render('templates/grafica')
})

router.get('/fetchData', (req, res) => {

    let ecg_mv = []
    let ecg_elapsedtime = []
    var min = Math.round(Math.random() * (data.length - 800));
    var max = min + 800;

    data.map((medicion, i) => {
        if (i % 3 === 0 && (i > min && i < max)) {
            ecg_mv.push(medicion.ECG);
            ecg_elapsedtime.push(medicion.elapsedtime)
        }
    })

    res.send({ data: { ecg_elapsedtime, ecg_mv } })

})

module.exports = router;