import React from 'react';
import PropTypes from 'prop-types';

const Transition = ({ children, classNames, duration }) => {
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpacity(1);
    });
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`transition duration-${duration} ease-in ${classNames}`}
      style={{ opacity }}>
      {children}
    </div>
  );
};

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  duration: PropTypes.number,
};

Transition.defaultProps = {
  classNames: '',
  duration: 700,
};

export default Transition;
