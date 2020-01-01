var ctx = document.getElementById("myChart");
Chart.defaults.global.defaultFontFamily = "Montserrat";
Chart.defaults.global.defaultFontSize = 12;
var data = {
    datasets: [{
            data: [12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5],
            labels: ["Любовь", "Вера", "Мечта", "Действия", "Достижения", "Процветание", "Влияние"],
            backgroundColor: ['#ff6777', '#FF8624', '#FFE400', '#2BE400', '#00D2FF', '#6384FF', '#8463FF']
        },
        {
            data: [100],
            labels: ["Будущее"],
            backgroundColor: ['#ffffff']
        }
    ],
};

var options = {
    tooltips: {
        callbacks: {
            label: function(item, data) {
                console.log(item)
                var label = data.datasets[item.datasetIndex].labels[item.index];
                var value = data.datasets[item.datasetIndex].data[item.index];
                return label;
            }
        }
    },
    responsibility: {
        responsible: true
    }
};    

var pieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
})