import PropTypes from 'prop-types';
import "./WalkOverBridge.css"
const WalkOverBridge = (props) => {
  const {className=''} = props;
  return ( <>
    <div className={className}>
      <p className="bill-board">CDW</p>
    </div>
  </> );
}

WalkOverBridge.propTypes = {
  className: PropTypes.string,
}
 
export default WalkOverBridge;