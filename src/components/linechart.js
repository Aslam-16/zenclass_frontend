import {Line,Chart} from 'react-chartjs-2';

function Linechart(){
    Chart.defaults.global.legend.display=false;
    const data={
        
        labels:['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th'],
        datasets:[
            {
            label:'Zenclass',
            borderColor:'#5D267C',
            backgroundColor:'#5D267C',
            pointBackgroundColor:'white',
            pointBorderColor:'#5D267C',
            fill:false,
            data:[5,10,15,20,5,10,30,20,17,25,10,15],
            borderWidth:1,
            }
        ]
    }
    const options={
        title:{
            display:false,
            text:'line'
        },
        scales:{
            yAxes:[{
                ticks:{
                    min:5,max:30,stepSize:5
                },gridLines:{drawOnChartArea:false,drawBorder:true}
            }],
             xAxes:[{
                gridLines:{drawOnChartArea:false,drawBorder:true}
            }]
        }
    }
    return (
        <Line data={data} options={options} width={620} height={228}/>
    )
}
export default Linechart;