import React from 'react';
import PropTypes from 'prop-types';
import Transition from '../Transition';
import { toggle, getLabel } from './Accordion.helpers';

export default function Accordion({
  openComponent,
  openLabel,
  closeLabel,
  classNames,
  children,
}) {
  const [isOpen, setIsopen] = React.useState(false);

  return (
    <div>
      <button
        onClick={toggle(setIsopen, isOpen)}
        aria-label={getLabel()}
        className="w-full">
        <div className={`${classNames}`}>
          {openComponent || (
            <div>{getLabel(isOpen, closeLabel, openLabel)}</div>
          )}
        </div>
      </button>

      <div className="transition duration-700 ease-in bg-white">
        {isOpen ? <Transition>{children}</Transition> : null}
      </div>
    </div>
  );
}

Accordion.defaultProps = {
  openComponent: null,
  openLabel: 'Expand',
  closeLabel: 'Collapse',
  classNames: '',
};

Accordion.propTypes = {
  openComponent: PropTypes.node,
  openLabel: PropTypes.string,
  closeLabel: PropTypes.string,
  classNames: PropTypes.string,
  children: PropTypes.node.isRequired,
};
