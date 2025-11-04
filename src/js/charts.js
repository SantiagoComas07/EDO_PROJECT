import { Chart,ArcElement,  Tooltip,
  Legend, DoughnutController } from 'chart.js';


Chart.register(ArcElement,  Tooltip,
  Legend, DoughnutController);


let taskChart;

export function renderChartDoughnut(completed, pending){


    const ctx = document.getElementById('chart-one').getContext('2d');;

    
    if(!ctx){
        console.error("No encontro el elemento")
    }


    // Make sure to destroy previous chart instance if it exists
        if (taskChart) {
        taskChart.destroy();
    }

    // Guardar la instancia en una variable
     taskChart = new Chart(ctx, {
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