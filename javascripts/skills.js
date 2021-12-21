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
        value: 40,
        color:"#F7464A",
        highlight: "#bdc3c7",
        label: "Typescript"
    },
    {
        value: 35,
        color: "#46BFBD",
        highlight: "#bdc3c7",
        label: "Golang"
    },
    {
        value: 25,
        color: "#8e44ad",
        highlight: "#bdc3c7",
        label: "Python"
    }
];
var dataSet2 = [
    {
        value: 30,
        color:"#c0391a",
        highlight: "#bdc3c7",
        label: "React"
    },
    {
        value: 35,
        color: "#27ae60",
        highlight: "#bdc3c7",
        label: "NodeJS"
    },
    {
        value: 10,
        color: "#3498db",
        highlight: "#bdc3c7",
        label: "Ruby on Rails"
    },
    {
        value: 25,
        color: "#A4C639",
        highlight: "#bdc3c7",
        label: "SQL"
    }
]
