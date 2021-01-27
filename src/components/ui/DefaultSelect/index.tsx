/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Select, {
  Styles,
  Props as SelectProps,
  OptionTypeBase,
} from 'react-select';

import arrowDown from '@assets/webp/arrow-down.webp';
import { Image } from '@components/ui';
import theme from '@styles/theme';
import { Container } from './styles';

interface DefaultSelectProps extends SelectProps<OptionTypeBase> {
  name: string;
}

const DefaultSelect = React.forwardRef<any, DefaultSelectProps>(
  ({ name, ...rest }, ref) => {
    const customStyles: Styles = {
      control: styles => ({
        ...styles,
        border: 0,
        boxShadow: 'unset',
        background: 'transparent',
        cursor: 'pointer',
      }),
      option: (styles, { isSelected }) => ({
        ...styles,
        fontSize: theme.fontSize.medium,
        color: isSelected ? 'white' : theme.colors.gray.medium,
        fontWeight: 500,

        background: isSelected ? theme.colors.purple.dark : 'white',

        ':hover': {
          background: theme.colors.purple.medium,
          color: 'white',
        },
      }),
      input: () => ({
        fontSize: theme.fontSize.big,
        color: theme.colors.gray.medium,
      }),
      singleValue: () => ({
        fontSize: theme.fontSize.big,
        color: theme.colors.gray.medium,
        fontWeight: 500,
      }),
      menu: styles => ({
        ...styles,
        margin: 0,
      }),
    };
    return (
      <Container>
        <label htmlFor={name}>UF</label>
        <Select
          ref={ref}
          instanceId="DefaultSelect"
          styles={customStyles}
          inputId={name}
          noOptionsMessage={() => 'Nada encontrado'}
          components={{
            DropdownIndicator: () => (
              <Image
                src={arrowDown}
                height={10}
                width={20}
                alt="Dropdown indicator"
              />
            ),
            IndicatorSeparator: null,
          }}
          {...rest}
        />
      </Container>
    );
  },
);

export default DefaultSelect;
