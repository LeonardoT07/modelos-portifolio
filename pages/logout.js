import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import TitlePage from '../src/components/commons/TitlePage';
import { Box } from '../src/components/foundation/Box';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setCookie(null, 'USER_LOGGED', 'false', {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      router.push('/');
    }, 6000);
  }, []);

  return (
    <Box>
      <TitlePage tagH3>
        Desconectando da Aplicação
      </TitlePage>
    </Box>
  );
}
