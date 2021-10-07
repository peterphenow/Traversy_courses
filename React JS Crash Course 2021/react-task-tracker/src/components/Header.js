import PropTypes from 'prop-types';

import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} />
    </header>
  );
};

// setting default props in the case that no props are passed from parent
Header.defaultProps = {
  title: 'Task Tracker'
};

// can set prop types(similar to TypeScript) to send a warning if prop is not a certain type
// the page will still render, but there will be a warning about having the wrong type
Header.propTypes = {
  title: PropTypes.string.isRequired
};

// can create a style object for CSS in JS
// link in-line on element with style = {headingStyle}
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// };

export default Header;
