import Linechart from './linechart';
import Barchart from './barchart';
function Dashboard(){
    return (
        <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
    <div class="panel panel-container">
         <p  class="line">Dashboard</p>
 <div style={{height: 50,marginBottom:20}}>
<div class="barcent">
  <p class ="barhead">Overall Progress<span style={{paddingLeft: 323}}>35%</span></p>
    <div class="progress">
	    <div class="bar" style={{width:200}}>
        </div>
    </div>
</div>
<div class="barcent"style={{marginLeft:70}}>
  <p class ="barhead">Attendance<span style={{paddingLeft: 365}}>60%</span></p>
    <div class="progress">
         <div class="bargreen" style={{width:300}}>
        </div>
    </div>
  </div>
</div>
  <div class="styled-table-outer"style={{width: 666,marginRight:4}}><div class="tableheading" >
<p  class ="headbar"style={{width: 666,textAlign:'left',paddingLeft:7}}>Overall Performance</p>


  </div><div class="styled-table-dashboardinner1"><div class="chart"><Linechart/></div></div></div>

<div class="styled-table-outer"style={{marginLeft:3}}>
  <div class="tableheading" >
<p  class ="headbar"colspan="4"style={{textAlign:'left'}}><span style={{paddingLeft:12}}>Today's Class</span></p>
<div><iframe class="youtubedashboard"  src="https://www.youtube.com/embed/il_t1WVLNxk"> </iframe><p class="youtubetitle">javascript<span class="youtubelink"><a class="a-color" href="/#prerequisite">prerequisite</a></span></p>
  <div style={{paddingTop: 15}}><span><button type="button" class="click">Join</button></span></div></div>
  </div>
</div>
 
<div class="styled-table-outer"style={{marginLeft: 0,marginTop: 20}}>
  <div class="tableheading" >
<p  class ="headbar" >Codekata<span class="week">Weekly</span><span class="once">Daily</span><span class="codekata"><img src="codekata.png"></img></span></p>

  </div>
   <p class="centre">3rd Week</p>
<div class="styled-table-dashboardinner" >
<ul class="yAxis">
	<li>25</li>
	<li>20</li>
	<li>15</li>
	<li>10</li>
	<li>05</li>

</ul>
	<div class="columns">
  <div class="column-container" style={{paddingLeft:20}}>
    <div class="column-bar series-b" style={{flexBasis: 200}}></div>
    <div class="column-bar series-a" style={{flexBasis: 160}}></div>
  </div>
  <div class="column-container" > 
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 140}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 170}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 60}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 92}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 130}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 10}}></div>
  </div>
</div>
<ul class="xAxis">
	<li style={{paddingLeft: 41}}>Mon</li>
	<li style={{paddingLeft: 35}}>Tue</li>
	<li style={{paddingLeft: 33}}>Wed</li>
	<li style={{paddingLeft: 33}}>Thu</li>
	<li style={{paddingLeft: 35}}>Fri</li>
	<li style={{paddingLeft: 32}}>Sat</li>
	<li style={{paddingLeft: 30}}>Sun</li>
	
</ul>

</div>
</div>
<div class="styled-table-outer"style={{marginLeft:0,marginTop: 20}}>
  <div class="tableheading" >
<p  class ="headbar">Webkata<span class="week">Weekly</span><span class="once">Daily</span><span class="codekata"><img src="codekata.png"></img></span></p>

  </div>
   <p class="centre">Weekly Stats</p>
<div class="styled-table-dashboardinner">
<ul class="yAxis">
	<li>25</li>
	<li>20</li>
	<li>15</li>
	<li>10</li>
	<li>05</li>
</ul>
	<div class="columns">
  <div class="column-container" style={{paddingLeft:20}}>
    <div class="column-bar series-b" style={{flexBasis: 200}}></div>
    <div class="column-bar series-a" style={{flexBasis: 160}}></div>
  </div>
  <div class="column-container" > 
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 140}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 170}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 60}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 92}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 130}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 10}}></div>
  </div>
</div>
<ul class="xAxis">
	<li style={{paddingLeft: 41}}>Mon</li>
	<li style={{paddingLeft: 35}}>Tue</li>
	<li style={{paddingLeft: 33}}>Wed</li>
	<li style={{paddingLeft: 33}}>Thu</li>
	<li style={{paddingLeft: 35}}>Fri</li>
	<li style={{paddingLeft: 32}}>Sat</li>
	<li style={{paddingLeft: 30}}>Sun</li>
	
</ul>
</div>
</div>
<div class="styled-table-outer"style={{marginLeft: 4,marginTop: 20}}>
  <div class="tableheading" >
<p  class ="headbar"colspan="4" >Micro Arc<span class="week">Weekly</span><span class="once">Daily</span><span class="codekata"><img src="codekata.png"></img></span></p>

  </div>
   <p class="centre">1st Week</p>
<div class="styled-table-dashboardinner">
<ul class="yAxis">
	<li>25</li>
	<li>20</li>
	<li>15</li>
	<li>10</li>
	<li>05</li>

</ul>
	<div class="columns">
  <div class="column-container" style={{paddingLeft:20}}>
    <div class="column-bar series-b" style={{flexBasis: 200}}></div>
    <div class="column-bar series-a" style={{flexBasis: 160}}></div>
  </div>
  <div class="column-container" > 
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 140}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 170}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 60}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 92}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 130}}></div>
  </div>
  <div class="column-container">
    <div class="column-bar series-b" style={{flexBasis: 180}}></div>
    <div class="column-bar series-a" style={{flexBasis: 10}}></div>
  </div>
</div>
<ul class="xAxis">
	<li style={{paddingLeft: 41}}>Mon</li>
	<li style={{paddingLeft: 35}}>Tue</li>
	<li style={{paddingLeft: 33}}>Wed</li>
	<li style={{paddingLeft: 33}}>Thu</li>
	<li style={{paddingLeft: 35}}>Fri</li>
	<li style={{paddingLeft: 32}}>Sat</li>
	<li style={{paddingLeft: 30}}>Sun</li>
	
</ul>
</div>
</div>
{/* <div class="styled-table-outer"style={{marginLeft: 0,marginTop: 20}}>
  <div class="tableheading" >
<p  class ="headbar"style={{textAlign:'left'}}><span style={{paddingLeft:12}}>Assessments</span></p>

  </div>

<div class="styled-table-dashboardinner2" >
<ul class="yAxis2">
	<li>50</li>
	<li>40</li>
	<li>30</li>
	<li>20</li>
	<li>10</li>

</ul>
	<div class="columns2">
    <div class="line-chart-block block">
  <div class="line-chart">
   <div class='grafico'style={{paddingTop:200}}>
     <span data-valor='25'style={{left:80}}>
       <span data-valor='8'style={{width:25}}>
         <span data-valor='13'style={{width:30}}>
           <span data-valor='5'style={{width:100}}>   
             <span data-valor='23'style={{top:-2,left:100,width:40}}>   
             <span data-valor='12'style={{width:20}}>
                 <span data-valor='15'>
                 </span>
              </span>
            </span>
          </span>
        </span>
       </span>
      </span>
   </div>
  </div>
</div>
</div>
<ul class="xAxis2">
	<li style={{paddingLeft: 20}}>1st</li>
	<li style={{paddingLeft: 1}}>2nd</li>
	<li style={{paddingLeft: 1}}>3rd</li>
	<li style={{paddingLeft: 1}}>4th</li>
	<li style={{paddingLeft: 1}}>5th</li>
	<li style={{paddingLeft: 1}}>6th</li>
	<li style={{paddingLeft: 1}}>7th</li>
  <li style={{paddingLeft: 1}}>8th</li>
	<li style={{paddingLeft: 1}}>9th</li>
	<li style={{paddingLeft: 1}}>10th</li>
	<li style={{paddingLeft: 1}}>11th</li>
	<li style={{paddingLeft: 1}}>12th</li>
	
</ul>
</div>
<p class="youtubetitle">Completed<span class="youtubetitle">Mark</span><span class="youtubelink"><a href="/#prerequisite">prerequisite</a></span></p> 
 </div>*/}
</div> 
</div>
    )
}
export default Dashboard;