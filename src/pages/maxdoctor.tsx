import { GetStaticProps, NextPage } from 'next';

import { Header, RegisterForm, IconsSection } from '@components/core';
import { Head } from '@components/ui';
import { IUF } from '@models/uf.interface';
import { IOption } from '@models/option.interface';
import { Container } from '@styles/pages/MaxDoctor';

interface MaxDoctorProps {
  ufs: IOption[];
}

const MaxDoctor: NextPage<MaxDoctorProps> = ({ ufs }) => {
  return (
    <>
      <Head>
        <title>Max Doctor</title>
      </Head>
      <Container>
        <Header />
        <RegisterForm ufs={ufs} />
        <IconsSection />
      </Container>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
  );

  const ufs: IUF[] = await response.json();

  const formattedUfs = ufs
    .map(uf => ({
      label: `${uf?.nome} (${uf?.sigla})`,
      value: uf?.id,
    }))
    .sort((a, b) => (a.label > b.label ? 1 : -1));

  return {
    props: {
      ufs: formattedUfs,
    },
  };
};

export default MaxDoctor;
