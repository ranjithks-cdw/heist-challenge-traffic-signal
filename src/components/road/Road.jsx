import PropTypes from 'prop-types';
import "./Road.css"

const Road = (props) => {
  const {className='', children=<></>} = props;
  return ( <>
    <div className={className}>
      {children}
    </div>
  </> );
}

Road.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element)
}
 
export default Road;