import {combineReducers} from 'redux';
import QuestionReducer from './reducer_questions';
import getInputReducer from './reducer_get_input';

const rootReducer = combineReducers({
	questions: QuestionReducer,
	answers: getInputReducer

})

export default rootReducer;