import PropTypes from 'prop-types';
import "./PedastrianCrossing.css"
const PedastrianCrossing = (props) => {
  const {className=''} = props;
  return ( <>
    <div className={className}></div>
  </> );
}

PedastrianCrossing.propTypes = {
  className: PropTypes.string,
}
 
export default PedastrianCrossing;