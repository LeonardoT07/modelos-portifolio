import React from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import PropTypes from 'prop-types';
import { Button } from '../../../src/components/commons/Button';
import Navigation from '../../../src/components/commons/Navigation';
import TitlePage from '../../../src/components/commons/TitlePage';
import Formulario from '../../../src/components/Formulario';
import FormGroup from '../../../src/components/Formulario/FormGroup';
import { Box } from '../../../src/components/foundation/Box';
import { Container } from '../../../src/components/foundation/Container';
import Page404 from '../../404';

export default function ModeloNovo({ USER_LOGGED }) {
  const router = useRouter();

  const [novoModelo, setNovoModelo] = React.useState({
    // Dados Principais
    afiliado: 'vazio',
    url: 'vazio',
    pixel: 'vazio',
    whatsapp: 'vazio',
    num_whats: 'vazio',
    // Cursos Presenciais
    cp_evp: 'vazio',
    cp_susp: 'vazio',
    cp_mit: 'vazio',
    cp_pilEmGrupo: 'vazio',
    cp_aprimoramento: 'vazio',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setNovoModelo({
      ...novoModelo,
      [fieldName]: event.target.value,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    // DTO = Data Transfer Object
    const modeloDTO = {
      afiliado: novoModelo.afiliado,
      url: novoModelo.url,
      pixel: novoModelo.pixel,
      link_whatsapp: novoModelo.whatsapp,
      numero_whatsapp: novoModelo.num_whats,
      cursos_presenciais: {
        espaco_vida_pilates: novoModelo.cp_evp,
        suspension: novoModelo.cp_susp,
        formacao_mit: novoModelo.cp_mit,
        pilates_em_grupo: novoModelo.cp_pilEmGrupo,
        aprimoramento: novoModelo.cp_aprimoramento,
      },
    };

    // URL DA API RETIRADA PARA PORTIFOLIO
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modeloDTO),
    })
      .then((respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          alert('Modelo criado com sucesso!');
          router.push('/modelos');
          return respostaDoServidor.json();
        }
        throw new Error('Não foi possível criar o modelo agora :(');
      })
      .then((respostaConvertidaEmObjeto) => {
        // eslint-disable-next-line no-console
        console.log(respostaConvertidaEmObjeto);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }

  const isFormInvalid = novoModelo.whatsapp.length === 0
    || novoModelo.afiliado.length === 0
    || novoModelo.url.length === 0;

  return (
    <>
      {USER_LOGGED === 'true'
        && (
          <Box>
            <TitlePage>Novo Modelo</TitlePage>
            <Navigation />
            <Container flexRow>
              {/* eslint-disable-next-line max-len */}
              <p style={{ lineHeight: '30px', marginBottom: '20px' }}>
                *Portifólio - Aqui estão alguns campos só para demonstração.
                <span style={{ color: 'red' }}> As URLs da API foram removidas para o portifólio</span>
                , então o botão de SALVAR não vai funcionar. É apenas para demonstração.
              </p>
              <Formulario onSubmit={handleFormSubmit} style={{ paddingBottom: '120px' }}>
                <FormGroup
                  title="Informações do Modelo"
                  fieldLabel="Nome do Afiliado"
                  fieldName="afiliado"
                  objectModel={novoModelo.afiliado}
                  changeFunc={handleChange}
                />

                <FormGroup
                  fieldLabel="URL do Modelo"
                  fieldName="url"
                  objectModel={novoModelo.url}
                  changeFunc={handleChange}
                />

                <FormGroup
                  fieldLabel="TAGs do Modelo"
                  fieldName="pixel"
                  objectModel={novoModelo.pixel}
                  changeFunc={handleChange}
                />

                <FormGroup
                  fieldLabel="Numero de Whatsapp"
                  fieldName="num_whats"
                  objectModel={novoModelo.num_whats}
                  changeFunc={handleChange}
                />

                <FormGroup
                  fieldLabel="Link do Whatsapp"
                  fieldName="whatsapp"
                  objectModel={novoModelo.whatsapp}
                  changeFunc={handleChange}
                />

                <FormGroup
                  title="Cursos Presenciais"
                  fieldLabel="Curso 01"
                  fieldName="cp_evp"
                  objectModel={novoModelo.cp_evp}
                  changeFunc={handleChange}
                />

                <FormGroup
                  fieldLabel="Curso 02"
                  fieldName="cp_susp"
                  objectModel={novoModelo.cp_susp}
                  changeFunc={handleChange}
                />

                <FormGroup
                  fieldLabel="Curso 03"
                  fieldName="cp_mit"
                  objectModel={novoModelo.cp_mit}
                  changeFunc={handleChange}
                />

                <FormGroup
                  fieldLabel="Curso 04"
                  fieldName="cp_pilEmGrupo"
                  objectModel={novoModelo.cp_pilEmGrupo}
                  changeFunc={handleChange}
                />

                <FormGroup
                  fieldLabel="Curso 05"
                  fieldName="cp_aprimoramento"
                  objectModel={novoModelo.cp_aprimoramento}
                  changeFunc={handleChange}
                />

                <Button type="submit" disabled={isFormInvalid}>
                  Criar Modelo
                </Button>
              </Formulario>
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

ModeloNovo.propTypes = {
  USER_LOGGED: PropTypes.string.isRequired,
};

export async function getServerSideProps(context) {
  const { USER_LOGGED } = parseCookies(context);

  return {
    props: {
      USER_LOGGED,
    },
  };
}
