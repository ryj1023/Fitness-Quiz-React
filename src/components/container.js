import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import QuestionDisplay from './question_display';
import AnswerForm from './answer_form';
import './container.css';
import {addAnswer} from '../actions';

class Container extends Component{
	constructor(props){
		super(props);
		this.state = {
			//answers: [],
			counter: 0,
			startMenu: true
		}
	}

	// addAnswer(input){
	// 	this.setState({
	// 		answers: [...this.state.answers, {input: parseInt(input, 10)}],
	// 		counter: this.state.counter + 1
	// 	})
	// }
	addAnswer(input){
		this.props.dispatch(addAnswer(parseInt(input)));
		this.setState({
			counter: this.state.counter + 1
		})
	}
	getStarted(toggle){
		this.setState({
			startMenu: toggle
		})
	}
	render(){
		console.log(this.props.answers)
		const Questions = this.props.questions.map((question)=>{ 
			if((question.userInput === this.state.counter)){
				return <QuestionDisplay key={question.userInput} {...question} />;
			}
		});

		const Form = this.props.questions.map((question, index)=>{
			if(question.userInput === this.state.counter){
				switch(question.answerType){
					case 'height':
					return <AnswerForm key={index} type="height" onAdd={input => this.addAnswer(input)} />
					break;
					case 'radio':
					return <AnswerForm key={index} type="radio" onAdd={input => this.addAnswer(input)} />
					break;
					default:
					return <AnswerForm type="text" onAdd={input => this.addAnswer(input)} key={index} text="Submit" /> ;
				}

			}
		})

		if(this.state.startMenu === true){
			return (
				<div className="container">
					<QuestionDisplay key="start" heading="Welcome!" subheading="Answer the following questions and we will make out a customized food intake and exercise program just for you!" />;
					<AnswerForm key="start-button" type="text" getStarted={() => this.getStarted(false)} text='Get Started' />
				</div>
				)
		}
		else{
			return(
					<div className="container">
						<h1>{Questions}</h1>
						{Form}
					</div>
				)
			}
		}	
}	

function mapStateToProps(state){
	return{
		questions: state.questions,
		answers: state.answers
	}
}

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators()
// }


export default connect(mapStateToProps)(Container)