import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class QuestionDisplay extends Component{
	render(){
		return <li>{this.props.question}</li>
	}
}

