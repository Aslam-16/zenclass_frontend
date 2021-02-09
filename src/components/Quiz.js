import React from 'react';
import {QuizData} from './QuizData';
var answerarray=[],obj={};
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
    render(){
        const {question,options,currentIndex,userAnswer,quizEnd}=this.state
        if(quizEnd){
            return (
                <div>
                    <p>Thank you for filling the survey</p>
                </div>
            )
        }
        return (<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
    <div class="panel panel-container">
            <span>Question {currentIndex+1} of {QuizData.length}</span>
        <p class="quizquestion">{currentIndex+1}.{question}</p>
         <label class="container" style={{textAlign:'left'}}>{
            options.map(option=><label class="container" >
                <span class="quizquestion" key={option.id}onClick={()=>this.pushtoary(option,this.state.currentIndex)}>
                {option} 
                </span> <input type="radio" name="radio" onClick={()=>this.pushtoary(option,this.state.currentIndex)}/>
  <span class="checkmark"></span></label>
            )
        }</label>
        {
            currentIndex<QuizData.length-1 && 
            <div>
            <button className="click"onClick={this.nextQuestionHandler}>Next Question</button>
             <button className="click"onClick={this.skipped}>skip</button></div>
        }
         {
            currentIndex===QuizData.length-1 && 
            <button className="click" onClick={this.finishHandler}>Over</button>
        }
    

        </div>
        </div>)
    }
}
export default Quiz;