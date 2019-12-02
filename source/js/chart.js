Highcharts.chart('container', {
  exporting: {
    buttons: {
      contextButton: {
        enabled: false
      }
    }
  },
  chart: {
    type: 'column',
    marginTop: '20',
  },
  title: {
    text: ''
  },
  credits: {
    enabled: false
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: [
      'TOP 1',
      'TOP 3',
      'TOP 10',
      'TOP 30',
      'TOP 50',
      'TOP 100'
    ],
    labels: {
      style: {
        'font-weight': 'normal',
        'font-size': '24px',
        'line-height': '28px',
        'color': '#37474F',
        'fontFamily': 'Roboto',
      },
    },
    crosshair: true,
    offset: 25,
    lineWidth: 0,
  },
  yAxis: {
    lineWidth: 0.5,
    gridLineWidth: 1,
    min: 0,
    title: {
      x: -10,
      text: 'Number of keywords',
      style: {
        "font-size": "20px",
        "font-weight": "normal",
        "font-family": "Roboto",
        "color": "#C2CFE0"
      }
    },
    labels: {
      x: -20,
      y: 6,
      style: {
        'font-weight': 'normal',
        'font-size': '24px',
        'line-height': '28px',
        'color': '#C2CFE0',
        'fontFamily': 'Roboto',
      }
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      groupPadding: 0.89,
      pointPadding: 0,
      pointMargin: 0,
      borderWidth: 0,
      pointWidth: 60,
    }
  },
  series: [{
    name: 'Last',
    data: [2600, 2000, 3600, 3400, 2200, 1900],
    color: {
      linearGradient: {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 1
      },
      stops: [
        [0, 'rgba(29, 233, 182, 1)'],
        [1, 'rgba(29, 233, 182, 0.102)']
      ]
    },
    showInLegend: false,
    dataLabels: {
      crop: false,
      overflow: 'none',
      "align": "center",
      "enabled": false,
      "borderColor": "",
      "rotation": 0,
      "style": {
        'fontFamily': 'Roboto',
        'fontWeight': 'normal',
        'fontSize': '24px',
        'line-height': '28px',
        'color': '#37474F',
      }
    },
  }, {
    name: 'Compared',
    data: [1800, 3800, 2900, 1600, 2900, 3400],
    color: {
      linearGradient: {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 1
        },
      stops: [
        [0, 'rgba(2, 136, 209, 1)'],
        [1, 'rgba(2, 136, 209, 0.102)']
      ]
    },
    showInLegend: false,
    dataLabels: {
      crop: false,
      overflow: 'none',
      "align": "center",
      "enabled": false,
      "borderColor": "",
      "rotation": 0,
      "style": {
        'fontFamily': 'Roboto',
        'fontWeight': 'normal',
        'fontSize': '24px',
        'line-height': '28px',
        'color': '#37474F',
      }
    },
  }]

});
