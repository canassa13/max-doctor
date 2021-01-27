import { useCallback } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { DefaultButton, Head } from '@components/ui';
import { Container } from '@styles/pages/Home';

const Home: NextPage = () => {
  const router = useRouter();

  const handleRoute = useCallback(() => {
    router.push('/maxdoctor');
  }, [router]);

  return (
    <>
      <Head>
        <title>Max Doctor</title>
      </Head>
      <Container>
        <h4>Avaliação de Pedro</h4>
        <DefaultButton
          type="button"
          onClick={handleRoute}
          width="140px"
          height="35px"
        >
          Acessar MaxDoctor
        </DefaultButton>
      </Container>
    </>
  );
};
export default Home;
