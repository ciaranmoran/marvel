import React from 'react';
import CharacterCard from '../CharacterCard';

export const handleFilterChange = setFilterValue => e => {
	const { value } = e.target;
	setFilterValue(value);
};

export const renderSkeletonCards = limit =>
	Array.from(Array(limit)).map((_, i) => (
		<CharacterCard skeleton key={i} />
	));

export const renderCharacterCards = (filterValue, characters) => {
	if (filterValue) {
		return characters
			.filter(c =>
				c.name.toLowerCase().startsWith(filterValue.toLowerCase()),
			)
			.map(character => (
				<CharacterCard character={character} key={character.id} />
			));
	}
	return characters.map(character => (
		<CharacterCard character={character} key={character.id} />
	));
};
