import React from 'react';
import CharacterContext from './components/context/CharacterContext';
import Characters from './components/Characters';

function App() {
	return (
		<CharacterContext>
			<Characters />
		</CharacterContext>
	);
}

export default App;
