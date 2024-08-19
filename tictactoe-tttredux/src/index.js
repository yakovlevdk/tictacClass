import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { GameContainer } from './components/Game/Game';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<GameContainer />
		</Provider>
	</React.StrictMode>,
);
