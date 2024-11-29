import ImageContainer from '@/containers/imageContainer/ImageContainer';
import PropTypes from 'prop-types';
const Vehicle = (props) => {
  const {className='', vehicleImg=''} = props;
  return ( <>
    <ImageContainer containerClass={className} src={vehicleImg} alt='vehicle' imgClass='vehicle' />
  </> );
}

Vehicle.propTypes = {
  className: PropTypes.string.isRequired,
  vehicleImg: PropTypes.string.isRequired,
}
 
 
export default Vehicle;