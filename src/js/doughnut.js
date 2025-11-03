import { Chart,ArcElement,  Tooltip,
  Legend, DoughnutController } from 'chart.js';


Chart.register(ArcElement,  Tooltip,
  Legend, DoughnutController);

export function renderChartDoughnut(completed, pending){


    const ctx = document.getElementById('chart-one');

    if(!ctx){
        console.error("No encontro el elemento")
    }

    // Guardar la instancia en una variable
    const taskChart = new Chart(ctx, {
        type: "doughnut",
        data:{
            labels: ["Done", "Pending"],
            datasets:[{
                data: [completed, pending],
                backgroundColor:["#F5E70F","#FFDBC2"]
            }]
        },
        options: {
            responsive: true,
            plugins:{
                legend: {position: "bottom"}
            }
        }
    });

}