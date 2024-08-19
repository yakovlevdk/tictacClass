import React from 'react';
import { connect } from 'react-redux';

class FieldContainer extends React.Component {
	handleClickItem = (index) => {
		const {
			field,
			currentPlayer,
			isGameEnded,
			setField,
			setGameEnded,
			setCurrentPlayer,
			setDraw,
		} = this.props;

		if (field[index] === '' && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			setField(newField);

			const WIN_PATTERNS = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6],
			];

			for (const combination of WIN_PATTERNS) {
				if (
					newField[combination[0]] === newField[combination[1]] &&
					newField[combination[1]] === newField[combination[2]] &&
					newField[combination[0]] !== ''
				) {
					setGameEnded(true);
					setCurrentPlayer(newField[combination[0]]);
					return;
				}
			}

			if (!newField.includes('') && !isGameEnded) {
				setDraw(true);
			} else if (!isGameEnded && newField.includes('')) {
				setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
			}
		}
	};

	render() {
		const { field } = this.props;
		return (
			<FieldLayout field={field} handleClickItem={this.handleClickItem} />
		);
	}
}

const mapStateToProps2 = (state) => ({
	field: state.field,
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});
const mapDispatchToProps2 = (dispatch) => ({
	setField: (field) => dispatch({ type: 'SET_FIELD', payload: field }),
	setGameEnded: (isGameEnded) =>
		dispatch({ type: 'SET_GAME_ENDED', payload: isGameEnded }),
	setCurrentPlayer: (currentPlayer) =>
		dispatch({ type: 'SET_CURRENT_PLAYER', payload: currentPlayer }),
	setDraw: (isDraw) => dispatch({ type: 'SET_DRAW', payload: isDraw }),
});

export const FieldContainerContainer = connect(
	mapStateToProps2,
	mapDispatchToProps2,
)(FieldContainer);

class FieldLayout extends React.Component {
	render() {
		const { field, handleClickItem } = this.props;
		return (
			<div className="grid grid-cols-3 gap-4">
				{field.map((item, index) => (
					<div
						key={index}
						className="bg-gray-200 rounded-md flex items-center justify-center h-20 cursor-pointer"
						onClick={() => handleClickItem(index)}
					>
						<p
							className={`text-5xl ${
								item === 'X' ? 'text-red-500' : 'text-blue-500'
							}`}
						>
							{item}
						</p>
					</div>
				))}
			</div>
		);
	}
}
