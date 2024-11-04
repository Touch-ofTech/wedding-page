import useAudio from 'beautiful-react-hooks/useAudio';
import arco from './assets/arco4.mp3';
import { Toaster } from 'react-hot-toast';
import { AiFillSound, AiOutlinePause } from 'react-icons/ai';
import {
  Dress,
  Footer,
  Form,
  Header,
  Middle,
  Recomendations,
} from './sections';
import './App.scss';

function App() {
  const [state, controls] = useAudio(arco, {
    autoPlay: true,
    loop: true,
  });

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
      <section className="sections">
        <Middle />
        <Form />
        <Dress />
        <Recomendations />
      </section>
      {/* <Confirmation /> */}
      <Footer />
    </main>
  );
}

export default App;
