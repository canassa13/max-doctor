import React from 'react';
import { Input, Container } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const DefaultInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, ...rest }, ref) => {
    return (
      <Container>
        <label htmlFor={name}>{name}</label>
        <Input name={name} ref={ref} id={name} {...rest} />
      </Container>
    );
  },
);

export default DefaultInput;
