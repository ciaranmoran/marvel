import PropTypes from 'prop-types';
import React from 'react';
import Transition from '../Transition';
import Accordion from '../Accordion';
import {
  getImageUrl,
  infoLabel,
  handleWikiClick,
} from './CharacterCard.helpers';
import './CharacterCard.css';

export default function CharacterCard({ skeleton, character }) {
  const { name, comics, series, stories, events, urls } = character;

  const imageUrl = getImageUrl(skeleton, character);
  if (!imageUrl) {
    return null;
  }

  return (
    <Transition classNames="m-auto p-4 sm:m-0 sm:w-1/2 lg:w-1/3">
      <div className="bg-white flex flex-col transition duration-700 ease-in">
        <Accordion
          openComponent={
            <>
              <Transition
                classNames="flex-1 bg-marvel-black"
                duration={1000}>
                <img
                  src={imageUrl}
                  alt={skeleton ? 'loading character' : name}
                  className="w-full mc-character-image"
                />
              </Transition>
              <div className="text-xl p-3">
                {skeleton ? (
                  <div className="h-4 bg-marvel-black opacity-50" />
                ) : (
                  name
                )}
              </div>
            </>
          }>
          {!skeleton && (
            <>
              <div className="mc-separator"></div>
              <div className="flex justify-between p-3">
                <div className="font-extrabold">
                  {comics.available}
                </div>
                <div>{infoLabel('Comic', comics.available)}</div>
                <div className="font-extrabold">
                  {series.available}
                </div>
                <div>{infoLabel('Serie', series.available)}</div>
                <div className="font-extrabold">
                  {stories.available}
                </div>
                <div>{infoLabel('Storie', stories.available)}</div>
              </div>
              <div className="flex p-3 mc-events">
                <div className="font-extrabold pr-1">
                  {events.available}
                </div>
                <div>{infoLabel('Event', events.available)}</div>
              </div>
              <div className="text-white uppercase items-center bg-marvel-red">
                <button
                  className="w-full p-5"
                  onClick={handleWikiClick(urls || '')}>
                  Character Wiki ›
                </button>
              </div>
            </>
          )}
        </Accordion>
      </div>
    </Transition>
  );
}

CharacterCard.defaultProps = {
  character: {},
  skeleton: false,
};

CharacterCard.propTypes = {
  character: PropTypes.object,
  skeleton: PropTypes.bool,
};
