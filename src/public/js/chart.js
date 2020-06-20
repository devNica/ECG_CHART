let ecgChart = null;

function renderChart(data, labels) {
    if (ecgChart != null) {
        ecgChart.destroy();
    }
    const ctx = document.getElementById('ecg').getContext('2d');
    ecgChart = new Chart(ctx, {

        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Electrocardiograma',
                data: data,
                backgroundColor: 'transparent',
                fill: false,
                lineTension: 0,
                pointRadius: 1,
                pointHoverRadius: 10,
                pointHitRadius: 30,
                pointBorderWidth: 1,
                borderColor: 'rgba(230, 45, 87, 0.7)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    })
}

function getChartDat() {
    $.ajax({
        url: 'http://localhost:4200/fetchData',
        success: function (result) {
            var labels = result.data.ecg_elapsedtime;
            var data = result.data.ecg_mv;

            renderChart(data, labels);

        },

        error: function (err) {
            console.log(err);
        }
    });
}

$('#renderBtn').click(
    function () {
        getChartDat();
    }
);