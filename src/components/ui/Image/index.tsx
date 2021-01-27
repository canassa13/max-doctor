import NextImage, { ImageProps } from 'next/image';

const Image: React.FC<ImageProps> = ({ children, ...rest }) => {
  return <NextImage {...rest}>{children}</NextImage>;
};

export default Image;
