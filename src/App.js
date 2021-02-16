import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import Query from './components/query';
import Dashboard from './components/dashboard';
import Quiz from './components/Quiz';
import Class from './components/class';

function App() {
  return (
   <Router>
    <div className="App">
      <Header/>  
      <Sidebar/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Switch>
      <Route exact path="/" component={Query}/>
      <Route exact path="/quiz" component={Quiz}/>
      <Route exact path="/class" component={Class}/>
      </Switch>
    </div>
    </Router>
  );
}
// import React from "react"; 
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore"; 
// import Accordion from "@material-ui/core/Accordion"; 
// import AccordionDetails from "@material-ui/core/AccordionDetails"; 
// import Typography from "@material-ui/core/Typography"; 
// import AccordionSummary from "@material-ui/core/AccordionSummary"; 

//  function App() { 
// return ( 
// 	<div style={{}}> 
// 	<h4>How to create Accordion in ReactJS?</h4> 
// 	<Accordion style={{ width: 999 }}> 
// 		<AccordionSummary 
// 		expandIcon={<ExpandMoreIcon />} 
// 		aria-controls="panel1a-content" id="panel1a-content"
// 		> 
// 		<Typography 
// 			style={{ 
// 			fontWeight: 10, 
// 			}} 
// 		> 
// 		 <h4 class="panel-title"style={{
//     height: 70
// }}>
//         <a 
//    style={{paddingBottom: 22}}
// class="accordion-toggle" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         
//          <span>Webinar on Full Stack Development</span>
//          <p class="presenter" style={{
//     paddingTop: 5,color:"black",marginBottom: 0
// }}>by Aslam,Ceo, Mytech services Alaska</p>
//          <div style={{paddingLeft:0,marginTop:-33,marginLeft: 120,width:800}}><span class="size"style={{marginLeft: 530,marginTop:-20}}>15/2/2021</span><br/><p class="size" style={{marginLeft: 530,color:"black",paddingTop:5,width:90}}>03.00 PM</p>
//  <div style={{paddingLeft:700,marginTop:-38}}><button  type="button" class="click">Register Now</button></div>
//        </div> 
//         </a>
//       </h4>
// 		</Typography> 
// 		</AccordionSummary> 
// 		<AccordionDetails> 
// 		<Typography>     <div class="panel-body">
         
// <div class="row">
    
//     <div class="col-sm-6" style={{
//     paddingLeft: 17
// }}>
//         <div class="middle">
//      <p class="top">Description</p>
//      <p class="alignment">Get a deeper understanding of Client Side Programming or in other words the front end development by developing highly responsive web pages across languages.A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node)</p>
//       <p class="top">Key Takeaways from Webinar</p>
//      <span><ol class="alignment" style={{width:360}}><li>What is Full Stack Development</li>
//      <li>What is Full Stack Development</li>
//      <li>Opportunities in full stack</li>
//      <li>Future Scope</li>
//      <li>Nuances of Full stack Development</li></ol></span>
//     </div>
//     </div>
//     <div class="alignment">
//     <div class="col-sm-6"style={{paddingLeft: 0}} ><div><img class="topnav2" src="guvi.png"/></div>
//       <p class="alignment"style={{paddingLeft:130}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.   </p>
//     </div>
//     <div class="col-sm-6"style={{paddingLeft: 0}}  >
//     <p class="alignment1"style={{float:"left",color:'black',marginBottom:0}}>A.Mohamed Aslam</p><br/>
//        <span style={{float:"left",fontSize:12,width:130,paddingLeft: 5}}>Ceo,Mytech services</span>  
//     </div>
//   </div></div>
//       </div></Typography> 
// 		</AccordionDetails> 
// 	</Accordion> 
//   	<Accordion style={{ width: 999 }}> 
// 		<AccordionSummary 
// 		expandIcon={<ExpandMoreIcon />} 
// 		aria-controls="panel2a-content" id="panel2a-content"
// 		> 
// 		<Typography 
// 			style={{ 
// 			fontWeight: 10, 
// 			}} 
// 		> 
// 		 <h4 class="panel-title"style={{
//     height: 70
// }}>
//         <a 
//    style={{paddingBottom: 22}}
// class="accordion-toggle" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         
//          <span>Webinar on Full Stack Development</span>
//          <p class="presenter" style={{
//     paddingTop: 5,color:"black",marginBottom: 0
// }}>by Aslam,Ceo, Mytech services Alaska</p>
//          <div style={{paddingLeft:0,marginTop:-33,marginLeft: 120,width:800}}><span class="size"style={{marginLeft: 530,marginTop:-20}}>15/2/2021</span><br/><p class="size" style={{marginLeft: 530,color:"black",paddingTop:5,width:90}}>03.00 PM</p>
//  <div style={{paddingLeft:700,marginTop:-38}}><button  type="button" class="click">Register Now</button></div>
//        </div> 
//         </a>
//       </h4>
// 		</Typography> 
// 		</AccordionSummary> 
// 		<AccordionDetails> 
// 		<Typography>     <div class="panel-body">
         
// <div class="row">
    
//     <div class="col-sm-6" style={{
//     paddingLeft: 17
// }}>
//         <div class="middle">
//      <p class="top">Description</p>
//      <p class="alignment">Get a deeper understanding of Client Side Programming or in other words the front end development by developing highly responsive web pages across languages.A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node)</p>
//       <p class="top">Key Takeaways from Webinar</p>
//      <span><ol class="alignment" style={{width:360}}><li>What is Full Stack Development</li>
//      <li>What is Full Stack Development</li>
//      <li>Opportunities in full stack</li>
//      <li>Future Scope</li>
//      <li>Nuances of Full stack Development</li></ol></span>
//     </div>
//     </div>
//     <div class="alignment">
//     <div class="col-sm-6"style={{paddingLeft: 0}} ><div><img class="topnav2" src="guvi.png"/></div>
//       <p class="alignment"style={{paddingLeft:130}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.   </p>
//     </div>
//     <div class="col-sm-6"style={{paddingLeft: 0}}  >
//     <p class="alignment1"style={{float:"left",color:'black',marginBottom:0}}>A.Mohamed Aslam</p><br/>
//        <span style={{float:"left",fontSize:12,width:130,paddingLeft: 5}}>Ceo,Mytech services</span>  
//     </div>
//   </div></div>
//       </div></Typography> 
// 		</AccordionDetails> 
// 	</Accordion> 
// 	</div> 
// ); 
// }

export default App;
