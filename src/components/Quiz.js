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
            disabled:true
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
        console.log("nexr",answerarray);
        // if(userAnswer){
        
        // }
    }
    componentDidMount() {
        this.loadQuiz();
    }


    checkAnswer=(answer)=> {
        this.setState({userAnswer:answer,disabled:false})
        

    }
    pushtoary=(answer,id)=>{
            obj[id]=answer;
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
    render(){
        console.log("fffffffffff")
        const {question,options,currentIndex,userAnswer,quizEnd}=this.state
        return (<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
    <div class="panel panel-container">
            <span>Question {currentIndex+1} of {QuizData.length}</span>
        <h2 style={{textAlign:'left',paddingLeft: 140}}>{question}</h2>
         <label class="container" style={{textAlign:'left'}}>{
            options.map(option=><label class="container">
                <span key={option.id}onClick={()=>this.pushtoary(option,this.state.currentIndex)}>
                {option} 
                </span> <input type="radio" name="radio"onClick={()=>this.pushtoary(option,this.state.currentIndex)}/>
  <span class="checkmark"></span></label>
            )
        }</label>
        {
            currentIndex<QuizData.length-1 && 
            <button onClick={this.nextQuestionHandler}>Next Question</button>
        }
         {
            currentIndex===QuizData.length-1 && 
            <button class="click" onClick={this.nextQuestionHandler}>Over</button>
        }
    

        </div>
        </div>)
    }
}
export default Quiz;