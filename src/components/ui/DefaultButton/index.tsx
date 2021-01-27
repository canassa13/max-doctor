import { Button, Container } from './styles';

export interface DefaultButtonProps {
  width?: string | number;
  height?: string | number;
  color?: string;
  background?: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
  width,
  height,
  color,
  children,
  background,
  type,
  onClick,
  ...rest
}) => {
  return (
    <Container width={width} height={height} {...rest}>
      <Button
        onClick={onClick}
        background={background}
        color={color}
        type={type}
      >
        {children}
      </Button>
    </Container>
  );
};

export default DefaultButton;
