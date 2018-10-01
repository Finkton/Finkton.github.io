//doughnut
data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: [
            '#36a2eb',
            '#cc65fe',
            '#ffce56',
        ],
        // borderWidth:10,
        // borderColor:'#777',
        // hoverBorderWidth:3,
        // hoverBorderColor:'#000'
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Safe',
        'Kinda Safe',
        'UnSafe'
    ]
};

options = {
  title:{
    display:true,
    text:'Internet Usage',
    fontSize:25
  },
  legend:{
    display:true,
    position:'bottom',
    labels:{
      fontColor:'#000'
    }
  },
  layout:{
    padding:{
      left:0,
      right:0,
      bottom:0,
      top:0
    }
  },
  tooltips:{
    enabled:true
  },
  responsive: true,
  maintainAspectRatio: false,
};

if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

var ctx = document.getElementById("doughnutChart").getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

myDoughnutChart.canvas.parentNode.style.height = '628px';
