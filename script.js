document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('regularSellChart').getContext('2d');
    var regularSellChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [{
                label: 'Sales',
                data: [20000, 30000, 40000, 35000, 45000, 30000, 25000],
                backgroundColor: '#cdf463',
                borderColor: '#b3dc58',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});