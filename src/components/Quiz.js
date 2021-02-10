import React from 'react';
import {QuizData} from './QuizData';
var answerarray=[],obj={}
class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            userAnswer:null,
            currentIndex:0,
            options:[],
            quizEnd:false,
            score:0,
            disabled:true,
            check:false
        }
    }
    loadQuiz=()=>{
        const{currentIndex}=this.state;
        this.setState(()=>{
            return {
                question:QuizData[currentIndex].question,
                options:QuizData[currentIndex].options,
                answer:QuizData[currentIndex].answer,         

               }
        })
    }

    nextQuestionHandler=()=> {
        const {userAnswer,answer,score,currentIndex}=this.state;
        this.setState({currentIndex:this.state.currentIndex+1,userAnswer:null})
        answerarray.push(obj);
         this.setState({check:false})
         console.log("check",this.state.checked)
        // this.reset();
        console.log("nexr",answerarray);
        // if(userAnswer){
        
        // }
    }
    skipped=()=> {
        const {userAnswer,answer,score,currentIndex}=this.state;
        obj[currentIndex]="skipped";
        // answerarray.push(obj);
        console.log("skip",answerarray);
        this.nextQuestionHandler()

    }
     skipend=()=> {
        const {userAnswer,answer,score,currentIndex}=this.state;
        obj[currentIndex]="skipped";
        console.log("skip",answerarray);
        this.finishHandler()
     }
    componentDidMount() {
        this.loadQuiz();
    }


    checkAnswer=(answer)=> {
        this.setState({userAnswer:answer,disabled:false})
        

    }
    pushtoary=(answer,id)=>{
            obj[id]=answer;
            this.setState({check:true})
            console.log(answerarray);
        }

    componentDidUpdate(prevProps,prevState){
        const {currentIndex}=this.state;
        if(this.state.currentIndex!=prevState.currentIndex){
            this.setState(()=> {
                return {
                    disables:true,
                     question:QuizData[currentIndex].question,
                options:QuizData[currentIndex].options,
                answer:QuizData[currentIndex].answer,         

                }
            })
        }
    }
    finishHandler=()=>{
        answerarray.push(obj);
        console.log("ovr",answerarray)
        this.setState({quizEnd:true})

    }
    click=()=>{
        this.setState({check:true})
    }
    reset=()=>{
        this.setState({check:false})
    }
//     finalanswer=()=>{
//         console.log("from finalansers");
//         for(var i=0;i<answerarray.length;i++){
//            finalanswers.push( <ul>
//           <li key={i}>{answerarray[i]}</li>
//             </ul>)
//         }

//    }
onchangevalue(event){
    const checked = event.target.checked ;
	const name    = event.target.name;

    if(checked==true){
        this.setState({check:true})
    }
    else         this.setState({check:false})
     
}
    render(){
        const {question,options,currentIndex,userAnswer,quizEnd}=this.state
        if(quizEnd){
  
            return (
                
                <div>
                    <p>Thank you for filling the survey</p>
                     <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
    <div class="panel panel-container"> 
   <table class="styled-table"style={{width:999}}>
  <thead class="tableheading">
            <th style={{textAlign:'left'}}colspan="6" class="column">Answers</th>
  </thead>
    <thead class="active-head">
        <tr class="active-head">
            <th class="column">Question:No</th>
            <th>Answer</th>
        </tr>
    </thead>
    <tbody style={{fontSize:20}}> {
    Object.entries(answerarray[0]).map(([key, value]) => (
    <tr class="active-row">
            <td class="column">{key}</td>
            <td >{value}</td>
            </tr>
    
    ))}
       </tbody></table> </div></div></div>
              
            )
        }
        return (<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
    <div class="panel panel-container">
            <span style={{textAlign:'left'}} >Question {currentIndex+1} of {QuizData.length}</span>
        <p class="quizquestion"style={{width:700,textAlign:'left'}}>{currentIndex+1}.{question}</p>
         <label class="container" style={{textAlign:'left'}}>{
            options.map(option=><label class="container" >
                <span class="quizquestion" key={option.id}onClick={()=>this.pushtoary(option,this.state.currentIndex)}>
                {option} 
                </span> <input type="radio" name="radio"  onChange={(e)=>this.onchangevalue(e)}onClick={()=>this.pushtoary(option,this.state.currentIndex)}/>
  <span class="checkmark"></span></label>
            )
        }</label>
        {
            currentIndex<QuizData.length-1 && 
            <div>
                 <button className="click"onClick={this.skipped}>skip</button>
            <button className="click"style={{marginLeft: 12}}
            onClick={this.nextQuestionHandler}>Next Question</button>
            </div>
        }
         {
            currentIndex===QuizData.length-1 && 
            <div>
                <button className="click"onClick={this.skipend}>skip</button>
            <button className="click"style={{marginLeft: 12}} onClick={this.finishHandler}>Over</button>
            </div>
        }
    

        </div>
        </div>)
    }
}
export default Quiz;