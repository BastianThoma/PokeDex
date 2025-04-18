function loadChart() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
            datasets: [{
                barPercentage: 0.5,
                categoryPercentage: 1,
                data: statvalues,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 25)',
                    'rgb(201, 203, 20)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                }
            },
            indexAxis: 'y',
            scales: {
                y: {
                    ticks: {
                        font: {
                            size: 16,
                            family: "'Madimi One', sans-serif"
                        },
                    },
                    grid: {
                        display: false
                    },
                    beginAtZero: true,
                },
                x: {
                    ticks: {
                        font: {
                            size: 16
                        },
                    },
                    grid: {
                        display: false
                    },
                    beginAtZero: true,
                    stepValue: 20,
                    max: 100
                }
            }
        }
    });
}