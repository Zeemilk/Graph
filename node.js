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

  const data = [60, 20, 10];
  const label = ["นอน","กิน","อื่นๆ"];
  createPieChart(data);
});

function createPieChart(data) {
  const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12"];
  let startAngle = 0;

  for (let i = 0; i < data.length; i++) {
    const slice = document.createElement("div");
    slice.className = "slice";
    slice.style.backgroundColor = colors[i];
    const sliceAngle = (data[i] / 100) * 360;
    slice.style.transform = `rotate(${startAngle}deg) skewY(${sliceAngle}deg)`;

    const label = document.createElement("div");
    label.className = "slice-label";
    label.textContent = labels[i];
    slice.appendChild(label);

    startAngle += sliceAngle;

    oneday_chart.appendChild(slice);
  }
}

const wakeupDate = {
    labels: ['วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์', 'วันอาทิตย์'],
    datasets: [{
        label: 'เวลาการตื่นนอน',
        data: [7, 6, 9, 7, 6.30, 8, 8],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};
const ctx = document.getElementById('wakeup_chart').getContext('2d');
const wakeup_chart = new Chart(ctx, {
    type: 'bar',
    data: wakeUpData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'เวลาการตื่นนอน (ชั่วโมง)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'วัน'
                }
            }
        }
    }
});