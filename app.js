//doughnut
data = {
    datasets: [{
        data: [40, 60],
        backgroundColor: [
            'red',
            'green',
        ],
        // borderWidth:10,
        // borderColor:'#777',
        // hoverBorderWidth:3,
        // hoverBorderColor:'#000'
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Malicious',
        'Safe'
    ]
};
data2 = {
    datasets: [{
        data: [0, 30],
        backgroundColor: [
            'red',
            'green',
        ],
        // borderWidth:10,
        // borderColor:'#777',
        // hoverBorderWidth:3,
        // hoverBorderColor:'#000'
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Safe',
        'Lost',
    ]
};
data3 = {
    datasets: [{
        data: [2, 3],
        backgroundColor: [
            'red',
            'green',
        ],
        // borderWidth:10,
        // borderColor:'#777',
        // hoverBorderWidth:3,
        // hoverBorderColor:'#000'
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Lost',
        'Safe',
    ]
};
data4 = {
    datasets: [{
        data: [10, 40, 20],
        backgroundColor: [
            'red',
            'orange',
            'green',
        ],
        // borderWidth:10,
        // borderColor:'#777',
        // hoverBorderWidth:3,
        // hoverBorderColor:'#000'
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Weak',
        'ReUsed',
        'Strong'
    ]
};
options = {
  title:{
    display:true,
    text:'Sites Visited',
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


options2 = {
  title:{
    display:true,
    text:'Credit Card',
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

options3 = {
  title:{
    display:true,
    text:'Personal Info',
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
options4 = {
  title:{
    display:true,
    text:'Passwords',
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
var ctx = document.getElementById("doughnutChart2").getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data2,
    options: options2
});
var ctx = document.getElementById("doughnutChart3").getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data3,
    options: options3
});
var ctx = document.getElementById("doughnutChart4").getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data4,
    options: options4
});


var element=document.getElementById("c1");
var rect = element.getBoundingClientRect();
console.log(toString(rect.top));

var c1 = document.getElementById("c1");
console.log(toString(c1.style.height));

myDoughnutChart.canvas.parentNode.style.height = '400px';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});
