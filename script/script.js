// fetching data from API
let promise = fetch("db/data.php")
promise.then(response => {
    return response.json()
}).then(result => {
    result.forEach(value =>{
        console.log(value)
    })    
}).catch(error => {
    console.log('Error:', error);
})
// setup charts and graph
const line = document.getElementById('line');
const bar = document.getElementById('bar');
const pie = document.getElementById('pie');
const doughnut = document.getElementById('doughnut');
const bubble = document.getElementById('bubble');
// const area = document.getElementById('area');
// const polararea = document.getElementById('polararea');
// const radar = document.getElementById('radar');
// const scatter = document.getElementById('scatter');
// const mixed = document.getElementById('mixed');
new Chart(line, {
    type: 'line',
    data: {

        labels: ['v1', 'v2', 'v3', 'v4', 'v5'],
        datasets: [{
            label: 'region',
            data: ['100', '200', '300', '400', '500'],
            borderWidth: 5
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
new Chart(bar, {
    type: 'bar',
    data: {

        labels: ['v1', 'v2', 'v3', 'v4', 'v5'],
        datasets: [{
            label: 'region',
            data: ['100', '200', '300', '400', '500'],
            borderWidth: 5
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
new Chart(pie, {
    type: 'pie',
    data: {

        labels: ['v1', 'v2', 'v3', 'v4', 'v5'],
        datasets: [{
            label: 'region',
            data: ['100', '200', '300', '400', '500'],
            borderWidth: 5
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
new Chart(doughnut, {
    type: 'doughnut',
    data: {

        labels: ['v1', 'v2', 'v3', 'v4', 'v5'],
        datasets: [{
            label: 'region',
            data: ['100', '200', '300', '400', '500'],
            borderWidth: 5
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
new Chart(bubble, {
    type: 'bubble',
    data: {

        labels: ['v1', 'v2', 'v3', 'v4', 'v5'],
        datasets: [{
            label: 'region',
            data: ['100', '200', '300', '400', '500'],
            borderWidth: 5
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
// new Chart(polararea, {
//     type: 'polarArea',
//     data: {

//         labels: ['v1', 'v2', 'v3', 'v4', 'v5'],
//         datasets: [{
//             label: 'region',
//             data: ['100', '200', '300', '400', '500'],
//             borderWidth: 5
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// new Chart(scatter, {
//     type: 'scatter',
//     data: {

//         labels: ['v1', 'v2', 'v3', 'v4', 'v5'],
//         datasets: [{
//             label: 'region',
//             data: ['100', '200', '300', '400', '500'],
//             borderWidth: 5
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
// new Chart(area, {
//     type: 'area',
//     data: {

//         labels: ['v1', 'v2', 'v3', 'v4', 'v5'],
//         datasets: [{
//             label: 'region',
//             data: ['100', '200', '300', '400', '500'],
//             borderWidth: 5
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });new Chart(radar, {
//     type: 'radar',
//     data: {

//         labels: ['v1', 'v2', 'v3', 'v4', 'v5'],
//         datasets: [{
//             label: 'region',
//             data: ['100', '200', '300', '400', '500'],
//             borderWidth: 5
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });