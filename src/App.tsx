import useAudio from 'beautiful-react-hooks/useAudio';
import arco from './assets/arco4.mp3';
import { Header } from './sections/header/Header';
import { Middle } from './sections/middle/Middle';
import { Toaster } from 'react-hot-toast';
import { AiFillSound, AiOutlinePause } from 'react-icons/ai';
import { Dress } from './sections/dress/Dress';
import { Confirmation } from './sections/confirmation/Confirmation';
import { Footer } from './sections/footer/Footer';
import './App.scss';

function App() {
  const [state, controls] = useAudio(arco, { autoPlay: true, loop: true });

  const handleSound = (audElemnt: any) => {
    if (audElemnt.isPlaying === false) {
      controls.play();
    } else {
      controls.pause();
    }
  };

  return (
    <main>
      <button
        className="button-music"
        id="audio"
        onClick={() => handleSound(state)}
      >
        {state.isPlaying ? <AiOutlinePause /> : <AiFillSound />}
      </button>
      <Toaster />
      <Header />
      <Middle />
      <Confirmation />
      <Dress />
      <Footer />
    </main>
  );
}

export default App;
