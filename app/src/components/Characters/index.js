import React from 'react';
import { CharacterCtx } from '../context/CharacterContext';
import { getCharacters } from '../../services';
import LoaderButton from '../LoaderButton';
import {
  handleFilterChange,
  renderSkeletonCards,
  renderCharacterCards,
} from './Characters.helpers';
import './Character.css';

const Characters = () => {
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [filterValue, setFilterValue] = React.useState('');
  const ctx = React.useContext(CharacterCtx);
  const { characters, characterLimit: limit, error } = ctx;

  React.useEffect(() => {
    getCharacters({ ctx, setLoading, page, limit });
    // eslint-disable-next-line
  }, []);

  const handleClick = () => () => {
    setFilterValue('');
    const newPage = page + 1;
    getCharacters({
      ctx,
      setLoading,
      page: newPage,
      limit,
    });

    setPage(newPage);
  };

  return (
    <>
      <div className="sticky top-0 w-full px-4 mt-2">
        <input
          type="text"
          placeholder="Start typing to filter..."
          className="w-full p-3 mc-characters-shadow"
          value={filterValue}
          onChange={handleFilterChange(setFilterValue)}
        />
      </div>
      <div className="flex flex-wrap max-w-screen-lg m-auto">
        <>
          {characters.length === 0
            ? renderSkeletonCards(limit)
            : renderCharacterCards(filterValue, characters)}
        </>
      </div>
      <div className="w-full md:w-1/2 sticky bottom-0 text-white bg-marvel-red text-center m-auto">
        <LoaderButton {...{ handleClick, loading, error }} />
      </div>
    </>
  );
};

export default Characters;
