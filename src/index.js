import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import Reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

ReactDOM.render(
	<Provider store={createStore(Reducers)}>
		<App />
	</Provider>
	, document.getElementById('root')
	);
