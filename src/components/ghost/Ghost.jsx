import ImageContainer from "@/containers/imageContainer/ImageContainer";
import './Ghost.css';

const Ghost = () => {
  const allGhosts = [...Array(4)].map((element,index) => <ImageContainer key={index} containerClass={`ghost-container gc-${index}`} src="ghost.png" alt="ghost" imgClass={`ghost g-${index}`} />);

  return ( <>
    {allGhosts}
  </> );
}
 
export default Ghost;