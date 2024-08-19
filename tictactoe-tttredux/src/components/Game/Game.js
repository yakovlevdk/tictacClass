import React from 'react';
import { connect } from 'react-redux';
import { FieldContainerContainer } from './Field/Field';
import { InformationContainerContainer } from './Information/Information';

class Game extends React.Component {
	handleRestartClick = () => {
		this.props.reset();
	};

	render() {
		return (
			<div className="container mx-auto">
				<FieldContainerContainer />
				<InformationContainerContainer />
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					onClick={this.handleRestartClick}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	reset: () => dispatch({ type: 'RESET' }),
});

export const GameContainer = connect(null, mapDispatchToProps)(Game);
