import styled from "styled-components";

export const Container = styled.main`
  background-color: #0aa1dd;
  color: #e8f9fd;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
`;
export const Titulo = styled.h1`
  font-size: 5rem;
`;

export const Subtitulo = styled.h3`
  font-size: 2em;
  margin-top: 20px;
`;

export const SpanNumero = styled.span`
  color: #192f35;
`;

export const Chute = styled.section`
  font-size: 1.5em;
  margin-top: 40px;
`;

export const Box = styled.span`
  border: 2px solid #e8f9fd;
  display: inline-block;
  font-size: 4em;
  padding: 10px;
  margin: 20px;
`;

export const Botao = styled.button`
  border: 2px solid black;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #e8f9fd;
  color: black;
  padding: 1rem;
  cursor: pointer;
  display: block;
  width: 50%;
  margin: 0 auto;
`;
