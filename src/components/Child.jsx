// Proptypes only run in run time. Need console watching
// But TS works while writing the code

import PropTypes from "prop-types";
export default function Child({ name, age, address }) {
  return (
    <div>
      {name}
      {age + 10}
      {address?.street}
    </div>
  );
}

Child.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
  }).isRequired,
  addresses: PropTypes.arrayOf(PropTypes.string),
};
