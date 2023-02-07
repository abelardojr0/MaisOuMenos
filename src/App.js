import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {
  Botao,
  Box,
  Chute,
  Container,
  SpanNumero,
  Subtitulo,
  Titulo,
} from "./Components";
import React from "react";

function App() {
  const { transcript } = useSpeechRecognition();

  const minimo = 0;
  const maximo = 1000;
  let estado = "";
  let estadoIcone = "";
  document.body.style.margin = "0px";

  const numeroSorteado = React.useMemo(() => {
    const numero = parseInt(Math.random() * (maximo + 1));
    return numero;
  }, []);

  if (transcript > numeroSorteado) {
    estado = "menor";
    estadoIcone = "down";
  } else if (transcript < numeroSorteado) {
    estado = "maior";
    estadoIcone = "up";
  }
  console.log(transcript);
  function invalido(numero) {
    if (isNaN(numero)) {
      if (numero <= maximo && numero >= maximo) {
        return false;
      } else {
        return true;
      }
    }
  }

  function reiniciar() {
    window.location.reload();
  }
  return (
    <>
      <Container>
        <Titulo>Acerte o número secreto</Titulo>
        <Subtitulo>
          O número secreto está entre <SpanNumero>{minimo} </SpanNumero> e{" "}
          <SpanNumero>{maximo}</SpanNumero>
        </Subtitulo>

        <Chute>
          {+transcript === numeroSorteado && (
            <>
              <p>Parabéns você acertou!</p>
              <Botao onClick={reiniciar}>Reiniciar</Botao>
            </>
          )}

          {invalido(transcript) ? (
            <p>
              Valor inválido, diga um número entre {minimo} e {maximo}
            </p>
          ) : (
            <>
              <p>Você disse: </p>
              {transcript === "" ? (
                <Box>Diga um número</Box>
              ) : (
                <>
                  <Box>{transcript}</Box>
                  <div>
                    O número secreto é {estado} que {transcript}{" "}
                    <i className={`fa-solid fa-${estadoIcone}-long`}></i>
                  </div>
                </>
              )}
            </>
          )}

          <Botao onClick={SpeechRecognition.startListening}>Falar</Botao>
        </Chute>
      </Container>
    </>
  );
}

export default App;
