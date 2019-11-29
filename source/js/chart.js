Highcharts.chart('container', {
  exporting: {
    buttons: {
      contextButton: {
        enabled: false
      }
    }
  },

  chart: {
      type: 'column'
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
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Number of keywords',
          style: {
            "font-size": "10px",
            "font-weight": "normal",
            "font-family": "Roboto",
            "color": "#C2CFE0"
          }
      }
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
          pointPadding: 0,
          pointMargin: 0,
          borderWidth: 0,
          pointWidth: 30,
      }
  },
  series: [{
      name: 'Last',
      data: [1800, 3800, 2900, 1600, 2900, 3400],
      color: "#1DE9B6",
      showInLegend: false,      

  }, {
      name: 'Compared',
      data: [2600, 2000, 3600, 3400, 2200, 1900],
      color: "#0288D1",
      showInLegend: false, 
  }]

  
});