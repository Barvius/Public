var barometr_options = {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        margin: [0, 0, 0, 0]
    },
    title: {
        text: ''
    },
    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {}, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },
    yAxis: {
        min: 720,
        max: 760,
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Давление'
        },
        plotBands: [{
            from: 720,
            to: 730,
            color: '#55BF3B'
        }, {
            from: 730,
            to: 750,
            color: '#DDDF0D'
        }, {
            from: 750,
            to: 760,
            color: '#DF5353'
        }]
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Давление',
        data: [720],
        tooltip: {
            valueSuffix: ' mmHg',
            valueDecimals: 1
        }
    }]
}
var gigrometr_options = {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        margin: [0, 0, 0, 0]
    },
    title: {
        text: ''
    },
    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {}, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },
    yAxis: {
        min: 0,
        max: 100,
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Влажнось'
        },
        plotBands: [{
            from: 0,
            to: 40,
            color: '#55BF3B'
        }, {
            from: 40,
            to: 70,
            color: '#DDDF0D'
        }, {
            from: 70,
            to: 100,
            color: '#DF5353'
        }]
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Влажность',
        data: [0],
        tooltip: {
            valueSuffix: ' %',
            valueDecimals: 1
        }
    }]
}
var thermometr_options = {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        margin: [0, 0, 0, 0]
    },
    title: {
        text: ''
    },
    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {}, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },
    yAxis: {
        min: -35,
        max: 45,
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Температура'
        },
        plotBands: [{
            from: -15,
            to: -35,
            color: '#3F51B5'
        }, {
            from: -15,
            to: 0,
            color: '#03A9F4'
        }, {
            from: 0,
            to: 15,
            color: '#55BF3B'
        }, {
            from: 15,
            to: 30,
            color: '#DDDF0D'
        }, {
            from: 30,
            to: 45,
            color: '#DF5353'
        }]
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Температура',
        data: [-35],
        tooltip: {
            valueSuffix: ' °C',
            valueDecimals: 1
        }
    }]
}
var wind_options = {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        margin: [0, 0, 0, 0]
    },
    title: {
        text: ''
    },
    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {}, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },
    yAxis: {
        min: 0,
        max: 7,
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Скорость ветра'
        },
        plotBands: [{
            from: 0,
            to: 0.2,
            color: '#B2EBF2'
        }, {
            from: 0.2,
            to: 1.5,
            color: '#00BCD4'
        }, {
            from: 1.5,
            to: 3.3,
            color: '#00838F'
        }, {
            from: 3.3,
            to: 5.4,
            color: '#29B6F6'
        }, {
            from: 5.4,
            to: 7,
            color: '#0288D1'
        }]
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Скорость ветра',
        data: [0],
        tooltip: {
            valueSuffix: ' м/с',
            valueDecimals: 1
        }
    }]
}
function loader(){
    $('#chart').html('<img src="preloader.gif" style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; margin: auto;"></img>');
}
function chart_type(value) {
  loader();
    $(".span_1_of_4").removeClass("active current");
    switch (value) {
        case 'temperature':
            $("#thermometr_btn_m").addClass("active current");
            $("#thermometr_btn_p").addClass("active current");
            $("#mobile_container").highcharts(thermometr_options);
            $.ajax({
                dataType: 'json',
                url: 'http://public.barvius.pp.ua/srv.php',
                data: {
                    'dev': '28_00000448abc3'
                },
                success: function(data) {
                    var g0 = $("#mobile_container").highcharts();
                    var temperature = data.value;
                    var g0_p = g0.series[0].points[0],
                        temperature;
                    g0_p.update(temperature);
                    var g0 = $("#thermometr").highcharts();
                    var temperature = data.value;
                    var g0_p = g0.series[0].points[0],
                        temperature;
                    g0_p.update(temperature);
                    render(data.data, ' °C', 'Температура');
                }
            });
            break;
        case 'humidity':
            $("#humidity_btn_m").addClass("active current");
            $("#humidity_btn_p").addClass("active current");
            $('#mobile_container').highcharts(gigrometr_options);
            $.ajax({
                dataType: 'json',
                url: 'http://public.barvius.pp.ua/srv.php',
                data: {
                    'dev': '35_000002793ac7'
                },
                success: function(data) {
                    var g0 = $("#mobile_container").highcharts();
                    var temperature = data.value;
                    var g0_p = g0.series[0].points[0],
                        temperature;
                    g0_p.update(temperature);
                    var g1 = $('#gigrometr').highcharts();
                    var humidity = data.value;
                    var g1_p = g1.series[0].points[0],
                        humidity;
                    g1_p.update(humidity);
                    render(data.data, ' %', 'Влажность');
                }
            });
            break;
        case 'pressure':
            $("#pressure_btn_m").addClass("active current");
            $("#pressure_btn_p").addClass("active current");
            $('#mobile_container').highcharts(barometr_options);
            $.ajax({
                dataType: 'json',
                url: 'http://public.barvius.pp.ua/srv.php',
                data: {
                    'dev': '81_000000000001'
                },
                success: function(data) {
                    var g0 = $("#mobile_container").highcharts();
                    var temperature = data.value;
                    var g0_p = g0.series[0].points[0],
                        temperature;
                    g0_p.update(temperature);
                    var g2 = $('#barometr').highcharts();
                    var pressure = data.value;
                    var g2_p = g2.series[0].points[0],
                        pressure;
                    g2_p.update(pressure);
                    render(data.data, ' mmHg', 'Давление');
                }
            });
            break;
        case 'wind_speed':
            $("#wind_speed_btn_m").addClass("active current");
            $("#wind_speed_btn_p").addClass("active current");
            $('#mobile_container').highcharts(wind_options);
            $.ajax({
                dataType: 'json',
                url: 'http://public.barvius.pp.ua/srv.php',
                data: {
                    'dev': '28_0a020b08010d'
                },
                success: function(data) {
                    var g0 = $("#mobile_container").highcharts();
                    var temperature = data.value;
                    var g0_p = g0.series[0].points[0],
                        temperature;
                    g0_p.update(temperature);
                    var g3 = $('#wind').highcharts();
                    var wind_speed = data.value;
                    var g3_p = g3.series[0].points[0],
                        wind_speed;
                    g3_p.update(wind_speed);
                    render(data.data, ' m/s', 'Скорость ветра');
                }
            });
            break;
    }
};

function render(data, valueSuffix, name) {
    $('#chart').highcharts('StockChart', {
        rangeSelector: {
            inputEnabled: false,
            buttonTheme: {
                fill: 'none',
                stroke: 'none',
                'stroke-width': 0,
                r: 2,
                style: {
                    color: '#507299',
                    fontWeight: 'bold'
                },
                states: {
                    hover: {
                        fill: '#e1e7ed'
                    },
                    select: {
                        fill: '#507299',
                        style: {
                            color: 'white'
                        }
                    }
                }
            },

            labelStyle: {
                color: 'silver',
                fontWeight: 'bold'
            },
            selected: 1,
            buttons: [{
                type: 'minute',
                count: 360,
                text: '6Ч'
            }, {
                type: 'day',
                count: 1,
                text: '1Д'
            }, {
                type: 'week',
                count: 1,
                text: '1Н'
            }, {
                type: 'month',
                count: 1,
                text: '1М'
            }, {
                type: 'year',
                count: 1,
                text: '1Г'
            }, {
                type: 'all',
                text: 'All'
            }]
        },
        title: {
            text: ''
        },
        tooltip: {
            valueSuffix: valueSuffix,
            xDateFormat: '%d-е %B %H:%M'
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        scrollbar: {
            enabled: false
        },
        navigator: {
            handles: {
                backgroundColor: 'none',
                borderColor: 'none'
            }
        },
        resetZoomButton: {
            theme: {
                display: 'none'
            }
        },
        series: [{
            type: 'spline',
            name: name,
            data: data,
            color: '#36638E',
            tooltip: {
                valueDecimals: 1
            }
        }]

    });
};
$(function() {
    chart_type('temperature');
    $('#barometr').highcharts(barometr_options);
    $('#gigrometr').highcharts(gigrometr_options);
    $("#thermometr").highcharts(thermometr_options);
    $('#wind').highcharts(wind_options);
    $.ajax({
        dataType: 'json',
        url: 'http://public.barvius.pp.ua/server.php',
        data: {
            act: 'weather_data'
        },
        success: function(data) {
            var g3 = $('#wind').highcharts();
            var g2 = $('#barometr').highcharts();
            var g1 = $('#gigrometr').highcharts();
            var g0 = $("#thermometr").highcharts();
            var wind_speed = data.data.wind_speed;
            var pressure = data.data.pressure;
            var humidity = data.data.humidity;
            var temperature = data.data.temperature;
            var g3_p = g3.series[0].points[0],
                wind_speed;
            var g2_p = g2.series[0].points[0],
                pressure;
            var g1_p = g1.series[0].points[0],
                humidity;
            var g0_p = g0.series[0].points[0],
                temperature;
            g3_p.update(wind_speed);
            g2_p.update(pressure);
            g1_p.update(humidity);
            g0_p.update(temperature);
        }
    });
});
