import React from 'react';
import { ContainerWrapper } from './styles';

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  );
};
