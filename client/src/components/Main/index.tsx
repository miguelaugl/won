import React from 'react';
import * as S from './styles';

const Main: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem deum átomo e react avançado escrito ao lado."
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration src="/img/hero-illustration.svg" />
    </S.Wrapper>
  );
};

export default Main;
