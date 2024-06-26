import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import Frase from "./compenets/Frase";
import { useEffect, useState } from "react";

function App() {
  // declarar variables o estados
  const [FrasePersonaje, setFrasePersonaje] = useState({});

  useEffect(() => {
    console.log("prueba");
    //pedir al servidor
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      //pedir la Frase a la API
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      // almacenar la respuesta en el state
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        console.log(datos[0]);
        setFrasePersonaje(datos[0]);
      }
    } catch (error) {
      console.error(error);
      //agregar un mensaje para el usuario final
    }
  };

  return (
    <>
      <Container className="">
        <img
          className="w-50"
          src="https://media-protected.taiga.io/attachments/a/a/b/4/1e59bddbfc9b0d9e56fadf4f4230a3c93b20423105e3afc205e3b0a1e4b8/logosimpson.png?token=ZilhpQ%3AJw7W1pZNBDmmVkGlVuaIMuSCkcaoEeST5whd1Wlmn6y2VF2Uzzevbm0_x4a4ftyTotwbEJpzJbcVVJeNm64MGw#_taiga-refresh=userstory:2494482"
          alt=""
        />
        <Frase frasePersonaje={FrasePersonaje}></Frase>
        <Button className="m-2 btn-dark" onClick={consultarAPI}>Obtener Frase</Button>
      </Container>
    </>
  );
}

export default App;
