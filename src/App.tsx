import { Header } from './sections/header/Header';
import { Middle } from './sections/middle/Middle';
import { Toaster } from 'react-hot-toast';
import { AiFillSound, AiOutlinePause } from 'react-icons/ai';
import useAudio from 'beautiful-react-hooks/useAudio';
import arco from './assets/arco2.mp3';
import { Dress } from './sections/dress/Dress';
import './App.scss';
import { Form } from './sections/form/Form';
import { useMemo } from 'react';

function App() {
  const [state, controls] = useAudio(arco, { autoPlay: true });

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
        style={{
          position: 'fixed',
          background: 'transparent',
          border: 'none',
          fontSize: '24px',
          top: '15px',
          right: '15px',
          zIndex: '20',
          cursor: 'pointer',
        }}
        id="audio"
        onClick={() => handleSound(state)}
      >
        {state.isPlaying ? <AiOutlinePause /> : <AiFillSound />}
      </button>
      <Toaster />
      <Header />
      <Middle />
      <Dress />
      {useMemo(
        () => (
          <Form />
        ),
        []
      )}

      {/* <Footer /> */}
    </main>
  );
}

export default App;
