const ArtMatir = document.getElementById("ArtMatir");
const ArtMatir_chart = document.getElementById("ArtMatir_chart");
const ArtMatirLabel = document.getElementById("ArtMatirLabel");

ArtMatir.addEventListener("click", function() {
    ArtMatir.style.display = "none";
    ArtMatir_chart.style.display = "block";
    ArtMatirLabel.style.display = "block";
  });
///////////////////////////////////////////////////////////
const oneday = document.getElementById("oneday");
const oneday_chart = document.getElementById("oneday_chart");
const onedayLabel = document.getElementById("onedayLabel");

oneday.addEventListener("click", function() {
  oneday_chart.style.display = "block";
  oneday.style.display = "none";
  onedayLabel.style.display = "block";
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['กิจวัตร', '%'],
  ['นอน', 6],
  ['กิน', 3],
  ['อื่นๆ', 1],
]);
  var options = {'title':'กิจวัตรใน 1 วัน', 'width':550, 'height':400};
  var chart = new google.visualization.PieChart(document.getElementById('oneday_chart'));
  chart.draw(data, options);
}
///////////////////////////////////////////
const smart = document.getElementById("smart");
const smart_chart = document.getElementById("smart_chart");
const smartLabel = document.getElementById("smartLabel");

smart.addEventListener("click", function() {
  smart_chart.style.display = "block";
  smart.style.display = "none";
  smartLabel.style.display = "block";
});

var c = document.getElementById("smart_chart");
var context = document.getElementById("smart_chart");
var ctx = c.getContext("2d");
var ct = context.getContext("2d");
var text = {
head:["กราฟแสดงความหล่อของผมตลอด 2016-2022","2016","2017","2018","2019","2020","2021","2022","(% ความหล่อ)"],
ti:["1000%","750%","500%","250%","100%"]
};

function xScale(x1,y1,x2,y2){
    var i;
    ct.moveTo(x1,y1);
    ct.lineTo(x2,y2);
    ct.strokeStyle="#777777";
    ct.stroke();

    for(i=50;i<=200; i+=50){
        ct.moveTo(x1,y1+i);
        ct.lineTo(x2,y2+i);
    }
    ct.strokeStyle="#FF9900";
    ct.stroke();
}

function yScale(x1,y1,x2,y2){
    var i;
    ct.moveTo(x1,y1);
    ct.lineTo(x2,y2);
    ct.strokeStyle="#33CC00";
    ct.stroke();

    for(i=70;i<=420; i+=70){
        ct.moveTo(x1+i,y1);
        ct.lineTo(x2+i,y2);
    }
    ct.strokeStyle="#33FF00";
    ct.stroke();
}

function drawLine(){
    var i;
    ctx.moveTo(arguments[0],arguments[1]);
    for(i=2;i< arguments.length;i+=2){
        ctx.lineTo(arguments[i],arguments[i+1]);
        ctx.stroke();
    }
}

function detail(){
    var i,x=75,y=55;
    ctx.font = "25px Cordia New";
    
    for(i=0;i<5;i++){
        ctx.fillText(text.ti[i],x,y+=50);
    }
    ctx.fillText(text.head[0],145,60);
    ctx.fillText(text.head[1],113,325);
    ctx.fillText(text.head[2],183,325);
    ctx.fillText(text.head[3],253,325);
    ctx.fillText(text.head[4],323,325);
    ctx.fillText(text.head[5],393,325);
    ctx.fillText(text.head[6],463,325);
    ctx.fillText(text.head[7],533,325);
    ctx.fillText(text.head[8],65,70);
}

detail();
drawLine(130,285,195,220,230,220,240,230,350,180,450,200,550,150);
xScale(130,100,550,100);
yScale(130,300,130,100);