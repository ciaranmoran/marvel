import React from 'react';
import { getLabel } from './LoaderButton.helpers';
import './LoaderButton.css';

export default function LoaderButton({
  handleClick,
  loading,
  error,
}) {
  return (
    <button
      onClick={handleClick()}
      className="w-full uppercase p-5 mc-loaderbutton-shadow">
      {getLabel(loading, error)}
    </button>
  );
}
