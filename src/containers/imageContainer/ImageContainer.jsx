import PropTypes from 'prop-types';
const ImageContainer = (props) => {
  const {containerClass='', src='', alt='', imgClass=''} = props;
  
	return (
		<>
			<div className={containerClass}>
				<img src={`assets/${src}`} alt={alt} className={imgClass} />
			</div>
		</>
	);
};

ImageContainer.propTypes = {
  containerClass: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imgClass: PropTypes.string
};


export default ImageContainer;
