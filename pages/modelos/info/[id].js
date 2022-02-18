/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import Page404 from '../../404';
import { Box } from '../../../src/components/foundation/Box';
import { Container } from '../../../src/components/foundation/Container';
import TitlePage from '../../../src/components/commons/TitlePage';
import Formulario from '../../../src/components/Formulario';
import Navigation from '../../../src/components/commons/Navigation';
import { Button } from '../../../src/components/commons/Button';
import FormGroup from '../../../src/components/Formulario/FormGroup';

export default function Modelo({ USER_LOGGED }) {
  const router = useRouter();
  // const modeloID = router.query.id;

  const [disabledMode, setDisabledMode] = React.useState(true);

  const [auxModel, setAuxModel] = React.useState({
    // Dados Principais
    afiliado: '',
    url: '',
    pixel: '',
    whatsapp: '',
    num_whats: '',
    // Cursos Presenciais
    cp_evp: '',
    cp_susp: '',
    cp_mit: '',
    cp_pilEmGrupo: '',
    cp_aprimoramento: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');

    setAuxModel({
      ...auxModel,
      [fieldName]: event.target.value,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    // eslint-disable-next-line no-console
    console.log('O será enviado para alteração do modelo.');

    // DTO = Data Transfer Object
    const modeloDTO = {
      afiliado: auxModel.afiliado,
      url: auxModel.url,
      pixel: auxModel.pixel,
      link_whatsapp: auxModel.whatsapp,
      numero_whatsapp: auxModel.num_whats,
      cursos_presenciais: {
        espaco_vida_pilates: auxModel.cp_evp,
        suspension: auxModel.cp_susp,
        formacao_mit: auxModel.cp_mit,
        pilates_em_grupo: auxModel.cp_pilEmGrupo,
        aprimoramento: auxModel.cp_aprimoramento,
      },
    };

    // URL DA API Retirada PARA PORTIFOLIO
    fetch('', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modeloDTO),
    })
      .then((respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          alert('Modelo alterado com sucesso!');
          setDisabledMode(true);
          return respostaDoServidor.json();
        }
        throw new Error('Não foi possível alterar o modelo agora :(');
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

  // URL DA API RETIRADA PARA PORTIFOLIO
  function handleDeleteModel() {
    fetch('', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          alert('Modelo excluido com sucesso!');
          router.back();
          return respostaDoServidor.json();
        }
        throw new Error('Não foi possível excluir o modelo agora :(');
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

  useEffect(async () => {
    await fetch('')
      .then((respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          return respostaDoServidor.json();
        }
        throw new Error('Não foi possível retornar a lista de modelos');
      })
      .then((respostaConvertidaEmObjeto) => {
        setAuxModel({
          _id: respostaConvertidaEmObjeto._id,
          ativo: respostaConvertidaEmObjeto.ativo,
          afiliado: respostaConvertidaEmObjeto.afiliado,
          url: respostaConvertidaEmObjeto.url,
          pixel: respostaConvertidaEmObjeto.pixel,
          whatsapp: respostaConvertidaEmObjeto.link_whatsapp,
          num_whats: respostaConvertidaEmObjeto.numero_whatsapp,
          cp_evp: respostaConvertidaEmObjeto.cursos_presenciais.espaco_vida_pilates,
          cp_susp: respostaConvertidaEmObjeto.cursos_presenciais.suspension,
          cp_mit: respostaConvertidaEmObjeto.cursos_presenciais.formacao_mit,
          cp_pilEmGrupo: respostaConvertidaEmObjeto.cursos_presenciais.pilates_em_grupo,
          cp_aprimoramento: respostaConvertidaEmObjeto.cursos_presenciais.aprimoramento,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, []);

  return (
    <>
      {USER_LOGGED === 'true'
        && (
          <Box>
            <TitlePage>Informações do MN</TitlePage>
            <Navigation
              infoPage
              disabledMode={disabledMode}
              setDisabledMode={setDisabledMode}
              handleDeleteModel={handleDeleteModel}
            />
            <Container flexRow>
              {/* eslint-disable-next-line max-len */}
              <p style={{ lineHeight: '30px', marginBottom: '20px' }}>
                *Portifólio - Aqui estão alguns campos FAKE só para demonstração.
                <span style={{ color: 'red' }}> As URLs da API foram removidas para o portifólio</span>
                , então as informações não serão carregadas e os botões de SALVAR/EXCLUIR não vão funcionar.
                É apenas para demonstração.
              </p>

              <Formulario title="Modelo ID: " modelID={auxModel._id} onSubmit={handleFormSubmit} style={{ paddingBottom: '120px' }}>
                <FormGroup
                  title="Informações do Modelo"
                  fieldLabel="Nome do Afiliado"
                  fieldName="afiliado"
                  objectModel={auxModel.afiliado}
                  changeFunc={handleChange}
                  disabledMode={disabledMode}
                />

                <FormGroup
                  fieldLabel="URL do Modelo"
                  fieldName="url"
                  objectModel={auxModel.url}
                  changeFunc={handleChange}
                  disabledMode={disabledMode}
                />

                <FormGroup
                  fieldLabel="TAGs do Modelo"
                  fieldName="pixel"
                  objectModel={auxModel.pixel}
                  changeFunc={handleChange}
                  disabledMode={disabledMode}
                />

                <FormGroup
                  fieldLabel="Numero de Whatsapp"
                  fieldName="num_whats"
                  objectModel={auxModel.num_whats}
                  changeFunc={handleChange}
                  disabledMode={disabledMode}
                />

                <FormGroup
                  fieldLabel="Link do Whatsapp"
                  fieldName="whatsapp"
                  objectModel={auxModel.whatsapp}
                  changeFunc={handleChange}
                  disabledMode={disabledMode}
                />

                <FormGroup
                  title="Cursos Presenciais"
                  fieldLabel="Curso 01"
                  fieldName="cp_evp"
                  objectModel={auxModel.cp_evp}
                  changeFunc={handleChange}
                  disabledMode={disabledMode}
                />

                <FormGroup
                  fieldLabel="Curso 02"
                  fieldName="cp_susp"
                  objectModel={auxModel.cp_susp}
                  changeFunc={handleChange}
                  disabledMode={disabledMode}
                />

                <FormGroup
                  fieldLabel="Curso 03"
                  fieldName="cp_mit"
                  objectModel={auxModel.cp_mit}
                  changeFunc={handleChange}
                  disabledMode={disabledMode}
                />

                <FormGroup
                  fieldLabel="Curso 04"
                  fieldName="cp_pilEmGrupo"
                  objectModel={auxModel.cp_pilEmGrupo}
                  changeFunc={handleChange}
                  disabledMode={disabledMode}
                />

                <FormGroup
                  fieldLabel="Curso 05"
                  fieldName="cp_aprimoramento"
                  objectModel={auxModel.cp_aprimoramento}
                  changeFunc={handleChange}
                  disabledMode={disabledMode}
                />

                <Button
                  type="submit"
                  disabledMode={disabledMode}
                >
                  Salvar Alterações
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

Modelo.propTypes = {
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
