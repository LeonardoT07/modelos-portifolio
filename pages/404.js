import React from 'react';
import TitlePage from '../src/components/commons/TitlePage';
import { Box } from '../src/components/foundation/Box';
import Link from '../src/components/commons/Link';

export default function Page404() {
  return (
    <Box>
      <TitlePage>
        404!
        {' '}
        <br />
        Essa página não pode ser encontrada!
      </TitlePage>
      <Link href="/">VOLTAR PARA HOME</Link>
    </Box>
  );
}
