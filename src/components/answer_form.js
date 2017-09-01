import React, {Component} from 'react';
import './answer_form.css';

export default class AnswerForm extends Component{
	constructor(props){
		super(props)
		this.state = {
			input: 0
		}
	}
	onSubmit(event){
		event.preventDefault();
		const input = this.state.input;
		if(input && this.props.onAdd){
			this.props.onAdd(input)
		}
		this.setState({
			input: 0
		})
	}
	startSubmit(e){
		e.preventDefault();
		if(this.props.text){
			this.props.getStarted()
		}
	}
	setInput(input){
		this.setState({
			input
		})
	}

	render(){
			if(this.props.onAdd){
				switch(this.props.type){
					case 'height':
					return(
						 <form onSubmit={(e)=> this.onSubmit(e)}>
		                  <input className="input-box-one" type="text" onChange={(e)=>this.setInput(e.target.value)} placeholder="please enter a number"/>
		                  <input className="input-box-two" name='choice' type="text"/>
		                  <button className="submit">Submit</button> 
		              </form>
					)
					break;
					case 'radio':
					return(
						 <form onSubmit={(e)=> this.onSubmit(e)}>
			                  <div className="answer"> 
			                      <label>
			                      <input name='choice' type="radio" className="option" placeholder="select a value"/>
			                      </label>
			                    <span>answer</span>
			                  </div>
			                  <button className="submit">Submit</button> 
		              	</form>
						)
					break;
					case 'text':
					return(
						<form onSubmit={(e)=> this.onSubmit(e)}>
		                  <input className="input-box-one" type="text" onChange={(e)=>this.setInput(e.target.value)} placeholder="please enter a number"/>
		                  <button className="submit">Submit</button> 
		              	</form>
						)
					default:
					return;
				}
			}
			else{
				return(
					<div>
					 <form onSubmit={(e)=> this.startSubmit(e)}>
			            <button className="start-button">{this.props.text}</button> 
			         </form>
					</div>
		        )
			}
	}

}