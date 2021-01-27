import { Button, RoundedRipples } from './styles';

export interface RoundedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width: string | number;
  height: string | number;
  color?: string;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  width,
  height,
  color,
  children,
  ...rest
}) => {
  return (
    <RoundedRipples>
      <Button
        width={width}
        height={height}
        color={color}
        type="button"
        {...rest}
      >
        {children}
      </Button>
    </RoundedRipples>
  );
};

export default RoundedButton;
