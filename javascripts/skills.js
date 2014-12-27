window.onload = function(){
  var skills1 = document.getElementById("webs").getContext("2d");
  var skills2 = document.getElementById("gen").getContext("2d");
  var myWebsCharts = new Chart(skills1).Doughnut(dataSet1, {animateScale: true, legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
});
  var myGenChart = new Chart(skills2).Doughnut(dataSet2, {
                  animateScale: true,
                  percentageInnerCutout : 25,
                  legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
                });
  document.getElementById("leg1").innerHTML = myWebsCharts.generateLegend();
  document.getElementById("leg2").innerHTML = myGenChart.generateLegend();
};

var dataSet1 = [
    {
        value: 150,
        color:"#F7464A",
        highlight: "#bdc3c7",
        label: "Java"
    },
    {
        value: 150,
        color: "#46BFBD",
        highlight: "#bdc3c7",
        label: "JavaScript"
    },
    {
        value: 100,
        color: "#8e44ad",
        highlight: "#bdc3c7",
        label: "HTML5"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#bdc3c7",
        label: "CSS3"
    },
    {
        value: 100,
        color: "#f1c40f",
        highlight: "#bdc3c7",
        label: "PHP"
    }
];
var dataSet2 = [
    {
        value: 40,
        color:"#c0391a",
        highlight: "#bdc3c7",
        label: "AngularJS"
    },
    {
        value: 10,
        color: "#27ae60",
        highlight: "#bdc3c7",
        label: "NodeJS"
    },
    {
        value: 10,
        color: "#d35400",
        highlight: "#bdc3c7",
        label: "Ruby (Rails)"
    },
    {
        value: 15,
        color: "#3498db",
        highlight: "#bdc3c7",
        label: "Wordpress"
    },
    {
        value: 25,
        color: "#A4C639",
        highlight: "#bdc3c7",
        label: "And. Prog."
    }
]
