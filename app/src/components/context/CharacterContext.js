import React from 'react';
import PropTypes from 'prop-types';

const useCharacterContext = () => {
	const [characterLimit, setCharacterLimit] = React.useState(20);
	const [characters, setCharacters] = React.useState([]);

	return {
		characterLimit,
		setCharacterLimit,
		characters,
		setCharacters,
		addCharacters: newCharacters => {
			setCharacters([...characters, ...newCharacters]);
		},
	};
};

export const CharacterCtx = React.createContext({});

export default function CharacterContext({ children }) {
	return (
		<CharacterCtx.Provider value={{ ...useCharacterContext() }}>
			{children}
		</CharacterCtx.Provider>
	);
}
CharacterContext.propTypes = {
	children: PropTypes.node.isRequired,
};
