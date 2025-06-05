document.addEventListener("DOMContentLoaded", function () {
    const profitCtx = document.getElementById("profitChart").getContext("2d");
    const profitChart = new Chart(profitCtx, {
        type: "bar",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [{
                label: "Profit ($)",
                data: [4200, 3500, 2200, 4260, 3600, 4100, 3800],
                backgroundColor: function (context) {
                    // să evidențiem coloana de joi (index 3) în altă culoare
                    const index = context.dataIndex;
                    return index === 3 ? "#20BFA9" : "#4285F4";
                },
                borderRadius: 6,
                maxBarThickness: 40
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return "$" + context.parsed.y.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: "#444", font: { size: 12 } }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: "#eee" },
                    ticks: { color: "#444", font: { size: 12 } }
                }
            }
        }
    });

    //AREA CHART – AUDIENCE OVERVIEW
    const audienceCtx = document.getElementById("audienceChart").getContext("2d");
    const audienceChart = new Chart(audienceCtx, {
        type: "line",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    label: "New Revenue",
                    data: [800, 700, 900, 1200, 1100, 1000, 1150],
                    borderColor: "#20BFA9",
                    backgroundColor: "rgba(32,191,169,0.2)",
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                },
                {
                    label: "Orders",
                    data: [600, 500, 650, 800, 750, 700, 780],
                    borderColor: "#4285F4",
                    backgroundColor: "rgba(66,133,244,0.2)",
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                },
                {
                    label: "Refunds",
                    data: [200, 150, 180, 220, 200, 190, 205],
                    borderColor: "#F4B400",
                    backgroundColor: "rgba(244,180,0,0.2)",
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    mode: "index",
                    intersect: false,
                    callbacks: {
                        label: function (context) {
                            const val = context.parsed.y;
                            return `${context.dataset.label}: $${val.toLocaleString()}`;
                        }
                    }
                },
                legend: {
                    display: true,
                    labels: { color: "#666", boxWidth: 12, padding: 10 }
                }
            },
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: "#444", font: { size: 12 } }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: "#eee" },
                    ticks: { color: "#444", font: { size: 12 } }
                }
            }
        }
    });

    //DONUT CHART – FEEDBACK
    const feedbackCtx = document.getElementById("feedbackChart").getContext("2d");
    const feedbackChart = new Chart(feedbackCtx, {
        type: "doughnut",
        data: {
            labels: ["Positive", "Neutral", "Negative"],
            datasets: [{
                data: [60, 35, 5],
                backgroundColor: ["#20BFA9", "#F4B400", "#EA4335"],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "70%",
            plugins: {
                legend: {
                    position: "bottom",
                    labels: { color: "#444", padding: 20, boxWidth: 12 }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const label = context.label || "";
                            const val = context.parsed;
                            return `${label}: ${val}%`;
                        }
                    }
                }
            }
        }
    });

    //HORIZONTAL BAR CHART – VISITS BY SOURCE
    const visitsCtx = document.getElementById("visitsChart").getContext("2d");
    const visitsChart = new Chart(visitsCtx, {
        type: "bar",
        data: {
            labels: ["Direct", "Social", "Email", "Other", "Referrals"],
            datasets: [{
                label: "Visits",
                data: [900, 1200, 700, 350, 950],
                backgroundColor: ["#4285F4", "#EA4335", "#20BFA9", "#F4B400", "#0F9D58"],
                borderWidth: 0
            }]
        },
        options: {
            indexAxis: 'y', //orizontala
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.parsed.x.toLocaleString() + " vizite";
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: { color: "#eee" },
                    ticks: { color: "#444", font: { size: 12 } }
                },
                y: {
                    grid: { display: false },
                    ticks: { color: "#444", font: { size: 12 } }
                }
            }
        }
    });

    //STACKED BAR CHART – TOTAL TRANSACTIONS
    const transactionsCtx = document.getElementById("transactionsChart").getContext("2d");
    const transactionsChart = new Chart(transactionsCtx, {
        type: "bar",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    label: "This Week",
                    data: [300, 280, 320, 360, 340, 380, 400],
                    backgroundColor: "#20BFA9"
                },
                {
                    label: "Last Week",
                    data: [200, 180, 210, 250, 230, 260, 280],
                    backgroundColor: "#4285F4"
                },
                {
                    label: "Cost",
                    data: [80, 70, 90, 100, 95, 110, 120],
                    backgroundColor: "#F4B400"
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.dataset.label + ": " + context.parsed.y;
                        }
                    }
                },
                legend: {
                    position: "bottom",
                    labels: { color: "#444", boxWidth: 12, padding: 10 }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    grid: { display: false },
                    ticks: { color: "#444", font: { size: 12 } }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    grid: { color: "#eee" },
                    ticks: { color: "#444", font: { size: 12 } }
                }
            }
        }
    });
});
