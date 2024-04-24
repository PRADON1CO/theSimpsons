import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Container }   from 'react-bootstrap';
import Frase from "./compenets/Frase";


function App() {
  return (
    <>
      <Container className="">
        <img className='w-50' src="https://media-protected.taiga.io/attachments/a/a/b/4/1e59bddbfc9b0d9e56fadf4f4230a3c93b20423105e3afc205e3b0a1e4b8/logosimpson.png?token=ZilhpQ%3AJw7W1pZNBDmmVkGlVuaIMuSCkcaoEeST5whd1Wlmn6y2VF2Uzzevbm0_x4a4ftyTotwbEJpzJbcVVJeNm64MGw#_taiga-refresh=userstory:2494482" alt="" />
        <Frase></Frase>
        <Button className='m-2 btn-dark'>Obtener Frase</Button>
      </Container>

    </>
  )
}

export default App
