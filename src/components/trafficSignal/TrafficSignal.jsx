import PropTypes from 'prop-types';
import "./TrafficSignal.css";

const TrafficSignal = (props) => {
  const {className=''} = props;
  return ( <>
    <div className={`traffic-signal ${className}`}>
      <div className="red-light"></div>
      <div className="green-light"></div>
    </div>
  </> );
}

TrafficSignal.propTypes = {
  className: PropTypes.string.isRequired
};

 
export default TrafficSignal;