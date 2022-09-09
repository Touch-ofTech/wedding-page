import "./App.scss";
import { Footer } from "./sections/footer/Footer";
import { Form } from "./sections/form/Form";
import { Header } from "./sections/header/Header";
import { Middle } from "./sections/middle/Middle";
import { Toaster } from "react-hot-toast";
import { AiFillSound, AiOutlinePause } from "react-icons/ai";
import useAudio from "beautiful-react-hooks/useAudio";
import arco from "./assets/arco.mp3";

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
    <main style={{ position: "relative" }}>
      <button
        className="button-music"
        style={{
          position: "sticky",
          background: "transparent",
          border: "none",
          fontSize: "24px",
          top: "15px",
          right: "15px",
          zIndex: "20",
          cursor: "pointer",
        }}
        id="audio"
        onClick={() => handleSound(state)}
      >
        {state.isPlaying ? <AiOutlinePause /> : <AiFillSound />}
      </button>
      <Toaster />
      <Header />
      <Middle />
      <Form />
      <Footer />
    </main>
  );
}

export default App;
