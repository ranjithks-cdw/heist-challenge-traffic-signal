import './App.css';
import ImageContainer from '@/containers/imageContainer/ImageContainer';
import RoadContainer from '@/containers/roadContainer/RoadContainer';
import Ghost from './components/ghost/Ghost';

function App() {

  return (
    <>
      <ImageContainer containerClass="bg-image-container" src="signal-img.png" alt="bg-img" imgClass="bg-image" />
      <RoadContainer />
      <ImageContainer containerClass="tidel-container" src="tidel.jpg" alt="tidel" imgClass="tidel" />
      <ImageContainer containerClass="station-container" src="tvmr-station.jpeg" alt="station" imgClass="station" />
      <Ghost />
    </>
  )
}

export default App
