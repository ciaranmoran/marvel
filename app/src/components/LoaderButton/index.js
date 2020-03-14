import React from 'react';
import './LoaderButton.css';

export default function LoaderButton({ handleClick, loading }) {
  return (
    <button
      onClick={handleClick()}
      className="w-full uppercase p-5 mc-loaderbutton-shadow">
      {loading ? 'Loading...' : 'Load More'}
    </button>
  );
}
