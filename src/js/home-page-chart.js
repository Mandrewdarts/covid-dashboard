fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(res => res.json())
    .then(bootstrapChart)

function bootstrapChart(d) {
    d = d.slice(0, 30)

    const labels = [...d]
        .reverse()
        .map(state => state.date)
        .map((value) => {
            const d = value.toString().split('')
            const year = d.splice(0, 4).join('')
            const month = d.splice(0, 2).join('')
            const date = d.splice(0, 2).join('')
            return `${month}/${date}/${year}`
        })

    const positive = [...d]
        .reverse()
        .map(state => state.positive)

    const negative = [...d]
        .reverse()
        .map(state => state.negative)


    const death = [...d]
        .reverse()
        .map(state => state.death)

    createChart({ labels, positive, negative, death })
}

function createChart({ labels, positive, negative, death }) {
    var ctx = document
        .getElementById('chart')
        .getContext('2d');

    const total = [...positive, ...negative, ...death].sort((a, b) => a - b);
    console.log(total)

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [
                {
                    label: 'Postive Cases',
                    data: positive,
                    borderColor: [
                        // 'rgba(255, 99, 132, 1)',
                        // 'rgba(54, 162, 235, 1)',
                        // 'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        // 'rgba(153, 102, 255, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    backgroundColor: 'rgba(75, 192, 192, .2)'
                },
                {
                    label: 'Negative Cases',
                    data: negative,
                    borderColor: [
                        // 'rgba(255, 99, 132, 1)',
                        // 'rgba(54, 162, 235, 1)',
                        // 'rgba(255, 206, 86, 1)',
                        // 'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    backgroundColor: 'rgba(153, 102, 255, .2)'
                },
                {
                    label: 'Deaths',
                    data: death,
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        // 'rgba(54, 162, 235, 1)',
                        // 'rgba(255, 206, 86, 1)',
                        // 'rgba(75, 192, 192, 1)',
                        // 'rgba(153, 102, 255, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ],
                    backgroundColor: 'rgba(255, 99, 132, .2)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {

                yAxes: [
                    {
                        // stacked: true,
                        ticks: {
                            beginAtZero: true,
                            max: total[total.length - 1] + 10000
                            // stepSize: .5
                        }
                    }
                ]
            }
        }
    });
}