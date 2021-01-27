import { useMemo } from 'react';

import blocks from '@assets/webp/blocks.webp';
import couch from '@assets/webp/couch.webp';
import motorcycle from '@assets/webp/motorcycle.webp';
import shoppingCart from '@assets/webp/shopping-cart.webp';
import truck from '@assets/webp/truck.webp';
import { Image } from '@components/ui';
import { Container, List } from './styles';

const IconsSection: React.FC = () => {
  const iconsList = useMemo(
    () => [
      {
        icon: shoppingCart,
        label: 'FACILIDADE DE COMPRA',
        height: 60,
        width: 67.2,
      },
      {
        icon: blocks,
        label: 'QUANTIDADE NÃO LIMITADA',
        height: 45,
        width: 84,
      },
      {
        icon: truck,
        label: 'FRETE GRÁTIS',
        height: 50,
        width: 75,
      },
      {
        icon: motorcycle,
        label: 'AGILIDADE',
        height: 50,
        width: 63,
      },
      {
        icon: couch,
        label: 'COMODIDADE',
        height: 50,
        width: 76,
      },
    ],
    [],
  );

  return (
    <Container>
      <List>
        {iconsList.map((item, index) => (
          <li key={item.label} style={{ width: index > 2 && 'unset' }}>
            <Image
              src={item.icon}
              height={item.height}
              width={item.width}
              alt={item.label}
            />
            <p>{item.label}</p>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default IconsSection;
