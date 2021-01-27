import ReactLottie, { LottieProps } from 'react-lottie';

import { Container } from './styles';

const Lottie: React.FC<LottieProps> = ({ options, height, width }) => {
  const defaultOptions = {
    ...options,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <ReactLottie options={defaultOptions} height={height} width={width} />
    </Container>
  );
};

export default Lottie;
