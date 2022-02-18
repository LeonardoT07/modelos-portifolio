import { parseCookies } from 'nookies';
import PropTypes from 'prop-types';
import React from 'react';
import ListaModelos from '../../src/components/commons/ListaModelos';
import Navigation from '../../src/components/commons/Navigation';
import TitlePage from '../../src/components/commons/TitlePage';
import { Box } from '../../src/components/foundation/Box';
import { Container } from '../../src/components/foundation/Container';
import Page404 from '../404';

export default function Modelos({ modelos, USER_LOGGED }) {
  return (
    <>
      {USER_LOGGED === 'true'
      && (
      <Box>
        <TitlePage>Lista de Modelos</TitlePage>
        <Navigation />

        <Container flexRow>
          <p style={{ marginBottom: '30px' }}>*Portifólio - Aqui será carregado os modelos da API</p>
          <ListaModelos modelosList={modelos} />
        </Container>
      </Box>
      )}

      {USER_LOGGED === 'false'
      && (
      <Page404 />
      )}
    </>
  );
}

Modelos.propTypes = {
  modelos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      ativo: PropTypes.bool,
      afiliado: PropTypes.string,
      url: PropTypes.string,
      pixel: PropTypes.string,
      link_whatsapp: PropTypes.string,
      numero_whatsapp: PropTypes.string,
      cursos_presenciais: PropTypes.shape({
        espaco_vida_pilates: PropTypes.string,
        suspension: PropTypes.string,
        formacao_mit: PropTypes.string,
        pilates_em_grupo: PropTypes.string,
        aprimoramento: PropTypes.string,
      }),
    }),
  ),

  USER_LOGGED: PropTypes.string.isRequired,
};

Modelos.defaultProps = {
  modelos: [],
};

export async function getServerSideProps(context) {
  const { USER_LOGGED } = parseCookies(context);

  // URL FAKE PARA PORTIFOLIO
  const modelos = await fetch('https://my-json-server.typicode.com/LeonardoT07/modelos-portifolio-api/modelos')
    .then((respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        return respostaDoServidor.json();
      }
      throw new Error('Não foi possível retornar a lista de modelos');
    })
    .then((respostaConvertidaEmObjeto) => (respostaConvertidaEmObjeto))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });

  return {
    props: {
      USER_LOGGED,
      modelos,
    },
  };
}
