import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { DefaultInput, DefaultSelect } from '@components/ui';
import { IRegister } from '@models/register.interface';
import { IOption } from '@models/option.interface';
import animationData from '@assets/lottie/success.json';
import { Form, Button } from './styles';

const Lottie = dynamic(() => import('@components/ui/Lottie'));

interface RegisterFormProps {
  ufs: IOption[];
}

const RegisterForm: React.FC<RegisterFormProps> = ({ ufs }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();
  const schema = yup.object().shape({
    crm: yup
      .string()
      .required('CRM é obrigatório')
      .min(5, 'CRM inválido')
      .matches(/^[0-9]+$/, 'CRM deve conter apenas números'),
    uf: yup.string().required('UF é obrigatório'),
  });

  const { register, errors, handleSubmit, control } = useForm<IRegister>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    (data: IRegister) => {
      setShowSuccess(true);
      setTimeout(() => {
        console.log(data);
        router.push('/');
      }, 2700);
    },
    [router],
  );

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DefaultInput
          ref={register}
          name="crm"
          type="text"
          placeholder="0000000"
        />
        {errors?.crm && <span>{errors?.crm?.message}</span>}
        <Controller
          name="uf"
          control={control}
          defaultValue=""
          render={props => (
            <DefaultSelect
              name="uf"
              placeholder="Selecione"
              options={ufs}
              {...props}
              onChange={(option: IOption) => props.onChange(option.value)}
              value={[ufs.find(uf => uf.value === props.value)]}
            />
          )}
        />
        {errors?.uf && <span>{errors?.uf?.message}</span>}
        <Button width="100%" height="35px" type="submit">
          CONTINUE
        </Button>
        <p>CANAL DE COMPRA EXCLUSIVO PARA CLASSE MÉDICA</p>
        {showSuccess && (
          <Lottie
            options={{ loop: false, autoplay: true, animationData }}
            width={100}
            height={100}
          />
        )}
      </Form>
    </>
  );
};

export default RegisterForm;
