import { Card, CardBody } from "react-bootstrap";

const Frase = () => {
  return (
    <>
        <Card className="border-0 fondoNelson">
            <h1 className="display-6">Nelson Muntz</h1>
            <hr />
            <CardBody>
                <img src="https://cdn.glitch.me/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png" alt="" />
                <p>
                ¡Ja ja ja! ¿Eso es todo lo que tienes? Eres tan predecible que podrías ser la tabla de multiplicar del uno en persona. Sabes, es como si tus acciones estuvieran escritas en las estrellas, tan evidentes como el sol saliendo cada mañana. ¡Vaya, qué desafío es tratar contigo cuando eres tan transparente como el agua en un vaso vacío!
                </p>
            </CardBody>
        </Card>
    </>
  );
};

export default Frase;