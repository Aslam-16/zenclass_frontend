import React, { Component } from "react";


class Class extends Component {
    componentDidMount(){
         window.$('.panel-collapse').on('show.bs.collapse', function () {
    window.$(this).siblings('.panel-heading').addClass('active');
  });

  window.$('.panel-collapse').on('hide.bs.collapse', function () {
    window.$(this).siblings('.panel-heading').removeClass('active');
  });
    }
    render() {
        return (
            <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
    <div class="panel panel-container">
 <p  class="line">Webinar</p>
<div class="wrapper center-block" style={{
    width: 900}}>
  <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading active" role="tab" id="headingOne">
      <h4 class="panel-title">
        <a  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         <span>Webinar On Full Stack Development</span><span class="size"style={{marginLeft: 242}}>15/2/2021</span> <br/>
         <span class="presenter">by Aslam Ceo,Mytech services Alaska</span><span class="size" style={{marginLeft: 277}}>03.00 PM</span>
          <div style={{paddingLeft:700,marginTop:-30}}><button  type="button" class="click">Register Now</button></div>
        </a>

      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
 
<div class="row">
    
    <div class="col-sm-6" style={{
    paddingLeft: 17
}}>
        <div class="middle">
     <p class="top">Description</p>
     <p class="alignment">Get a deeper understanding of Client Side Programming or in other words the front end development by developing highly responsive web pages across languages.A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node)</p>
      <p class="top">Key Takeaways from Webinar</p>
     <span><ol class="alignment" style={{width:360}}><li>What is Full Stack Development</li>
     <li>What is Full Stack Development</li>
     <li>Opportunities in full stack</li>
     <li>Future Scope</li>
     <li>Nuances of Full stack Development</li></ol></span>
    </div>
    </div>
    <div class="alignment">
    <div class="col-sm-6"style={{    paddingLeft: 0
}} ><div><img class="topnav2" src="guvi.png"/></div>
      <p class="alignment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.   </p>
    </div>
    <div class="col-sm-6" >
    <p class="alignment1"style={{float:"left",color:'black',marginBottom:0}}>A.Mohamed Aslam</p><br/>
       <span style={{float:"left",fontSize:12}}>Ceo,Mytech services Alaska</span>  
    </div>
  </div></div>
         
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <span>Webinar On Full Stack Development</span><span class="size"style={{marginLeft: 242}}>15/2/2021</span> <br/>
         <span class="presenter">by Aslam Ceo,Mytech services Alaska</span><span class="size" style={{marginLeft: 277}}>03.00 PM</span>
          <div style={{paddingLeft:700,marginTop:-30}}><button  type="button" class="click">Register Now</button></div>
        </a>
      </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
       
<div class="row">
    
    <div class="col-sm-6" style={{
    paddingLeft: 17
}}>
        <div class="middle">
     <p class="top">Description</p>
     <p class="alignment">Get a deeper understanding of Client Side Programming or in other words the front end development by developing highly responsive web pages across languages.A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node)</p>
      <p class="top">Key Takeaways from Webinar</p>
     <span><ol class="alignment"style={{width:360}}><li>What is Full Stack Development</li>
     <li>What is Full Stack Development</li>
     <li>Opportunities in full stack</li>
     <li>Future Scope</li>
     <li>Nuances of Full stack Development</li></ol></span>
    </div>
    </div>
    
    <div class="col-sm-6" style={{    paddingLeft: 0
}}><img class="topnav2" src="guvi.png"/>
      <p class="alignment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.   </p>
    </div>
    <div class="col-sm-6" >
      <p style={{float:"left",color:'black',marginBottom:0}}>A.Mohamed Aslam</p><br/>
       <span style={{float:"left",fontSize:12}}>Ceo,Mytech services Alaska</span>  
    </div>
  
         
      </div>
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <span>Webinar On Full Stack Development</span><span class="size"style={{marginLeft: 242}}>15/2/2021</span><br/>
         <div><span class="presenter">by Aslam Ceo,Mytech services Alaska</span><span class="size" style={{marginLeft: 277}}>03.00 PM</span></div>
         <div style={{paddingLeft:700,marginTop:-30}}><button  type="button" class="click">Register Now</button></div>
        </a>
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
<div class="row">
    
    <div class="col-sm-6"style={{
    paddingLeft: 17
}}>
        <div class="middle">
     <p class="top">Description</p>
     <p class="alignment">Get a deeper understanding of Client Side Programming or in other words the front end development by developing highly responsive web pages across languages.A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node)</p>
      <p class="top">Key Takeaways from Webinar</p>
     <span><ol class="alignment" style={{width:360}}><li>What is Full Stack Development</li>
     <li>What is Full Stack Development</li>
     <li>Opportunities in full stack</li>
     <li>Future Scope</li>
     <li>Nuances of Full stack Development</li></ol></span>
    </div>
    </div>
    
    <div class="col-sm-6" style={{    paddingLeft: 0
}}><img class="topnav2" src="guvi.png"/>
      <p class="alignment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.   </p>
    </div>
    <div class="col-sm-6" >
     <p style={{float:"left",color:'black',marginBottom:0}}>A.Mohamed Aslam</p><br/>
       <span style={{float:"left",fontSize:12}}>Ceo,Mytech services Alaska</span>  
    </div>
  
         
      </div>
      </div>
    </div>
  </div>
</div>
</div>
                                    

        </div></div>
               
        );
    }
}

export default Class;