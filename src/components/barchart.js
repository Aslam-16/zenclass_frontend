import {Bar,Chart} from 'react-chartjs-2';

function Barchart(){
    Chart.defaults.global.legend.display=false;
    const data= {
        labels: ["5", "10", "15", "20"],
        datasets: [
          {
            label: "Pending Approval",
            backgroundColor: "#5D267C",
            data: [20, 10, 5, 15],
            stack: 1,
            borderTopLeftRadius: 0.3125,
            borderTopRightRadius: 0.3125
           
          },
          {
            label: "Invoice Created",
            backgroundColor: "#F0EFF4",
            data: [10,20,25,15],
            stack: 1,
            borderTopLeftRadius: 0.3125,
            borderTopRightRadius: 0.3125
          },
        ]
      }
         

     const options= {
        title:{
            display:false,
            text:'line'
         },
        scales: {
         
          yAxes: [
            { gridLines:{drawOnChartArea:false},  
                
            }
          ], xAxes:[{
                gridLines:{drawOnChartArea:false},
 
                 
           }]
        }
      }
    return (
        <Bar data={data} options={options} width={620} height={228}/>
    )
}
export default Barchart;