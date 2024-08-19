import React from 'react';
import { connect } from 'react-redux';

class InformationContainer extends React.Component {
	render() {
		const { isDraw, isGameEnded, currentPlayer } = this.props;

		const information = () => {
			if (isDraw) {
				return 'Ничья';
			} else if (!isDraw && isGameEnded) {
				return `Победа: ${currentPlayer}`;
			} else {
				return `Ходит: ${currentPlayer}`;
			}
		};

		return (
			<div className="mt-4">
				<p className="text-lg font-bold">
					Статус: <span>{information()}</span>
				</p>
			</div>
		);
	}
}

const mapStateToProps3 = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export const InformationContainerContainer =
	connect(mapStateToProps3)(InformationContainer);
