import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { setCookie, parseCookies } from 'nookies';
import TitlePage from '../src/components/commons/TitlePage';
import { Box } from '../src/components/foundation/Box';
import { LoginWrapper } from '../src/components/commons/Login/styles/LoginWrapper';
import InputField from '../src/components/Formulario/InputField';
import Formulario from '../src/components/Formulario';
import { Button } from '../src/components/commons/Button';
import { TextMessage } from '../src/components/commons/TextMessage';

export default function Home({ USER_LOGGED }) {
  const router = useRouter();
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [isLoginValid, setIsLoginValid] = React.useState(false);

  const [loginInfos, setLoginInfos] = React.useState({
    usuario: 'portifolio',
    senha: 'portifolio',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setLoginInfos({
      ...loginInfos,
      [fieldName]: event.target.value,
    });
  }

  useEffect(() => {
    if (USER_LOGGED === 'true') {
      router.push('/modelos');
    } else {
      setCookie(null, 'USER_LOGGED', 'false', {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    }
  }, []);

  const isFormInvalid = loginInfos.usuario.length === 0 || loginInfos.senha.length === 0;

  return (

    <Box>
      <LoginWrapper>
        <LoginWrapper.Left>
          <img
            alt="Imagem representativa de modelo de negócios"
            src="/modelo-de-negocios-vollpilates.svg"
            style={{ width: '100%', height: '340px' }}
          />
        </LoginWrapper.Left>

        <LoginWrapper.Right>
          <TitlePage>
            Modelo de Negócios
            <br />
            {' '}
            VOLL Pilates
          </TitlePage>

          {isFormSubmited && !isLoginValid
          && <TextMessage>Usuário ou Senha inválidos!</TextMessage>}

          <Formulario
            onSubmit={(event) => {
              event.preventDefault();
              setIsFormSubmited(true);

              if (loginInfos.usuario === 'portifolio' && loginInfos.senha === 'portifolio') {
                setIsLoginValid(true);
                setCookie(null, 'USER_LOGGED', 'true', {
                  maxAge: 86400, // 1 dia em segundos
                  path: '/',
                });
                router.push('/modelos');
              } else {
                setIsLoginValid(false);
                setCookie(null, 'USER_LOGGED', 'false', {
                  maxAge: 30 * 24 * 60 * 60,
                  path: '/',
                });
              }
            }}
          >
            <InputField type="text" placeholder="Usuário" name="usuario" onChange={handleChange} value={loginInfos.usuario} />
            <InputField type="password" placeholder="Senha" name="senha" onChange={handleChange} value={loginInfos.senha} />

            <Button type="submit" disabled={isFormInvalid}>
              Login
            </Button>
          </Formulario>

        </LoginWrapper.Right>
      </LoginWrapper>
    </Box>
  );
}

Home.propTypes = {
  USER_LOGGED: PropTypes.string,
};

Home.defaultProps = {
  USER_LOGGED: null,
};

export async function getServerSideProps(context) {
  const { USER_LOGGED } = parseCookies(context);

  if (USER_LOGGED) {
    //
  } else {
    setCookie(context, 'USER_LOGGED', 'false', {
      maxAge: 30 * 24 * 60 * 60, // 1 dia em segundos
      path: '/',
    });
  }

  return {
    props: {
      USER_LOGGED,
    },
  };
}
