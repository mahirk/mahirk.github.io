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
        highlight: "#FF5A5E",
        label: "Java"
    },
    {
        value: 150,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "JavaScript"
    },
    {
        value: 100,
        color: "#8e44ad",
        highlight: "#FFC870",
        label: "HTML5"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "CSS3"
    },
    {
        value: 100,
        color: "#f1c40f",
        highlight: "#FFC870",
        label: "PHP"
    }
];
var dataSet2 = [
    {
        value: 300,
        color:"#c0391a",
        highlight: "#e74c3c",
        label: "AngularJS"
    },
    {
        value: 50,
        color: "#27ae60",
        highlight: "#5AD3D1",
        label: "NodeJS"
    },
    {
        value: 100,
        color: "#d35400",
        highlight: "#FFC870",
        label: "Ruby (Rails)"
    },
    {
        value: 100,
        color: "#3498db",
        highlight: "#3498db",
        label: "Wordpress"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Hell"
    }
]
