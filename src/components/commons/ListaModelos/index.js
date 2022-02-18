/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { ListaCardsWrapper } from './styles/ListaCardsWrapper';
import Link from '../Link';

export default function ListaModelos({ modelosList }) {
  return (
    <ListaCardsWrapper>
      {modelosList.map((modelo) => (

        <ListaCardsWrapper.Item key={modelo._id}>
          <ListaCardsWrapper.ItemAtributes>
            Afiliado:
            {' '}
            <ListaCardsWrapper.ItemValues>
              {modelo.afiliado}
            </ListaCardsWrapper.ItemValues>
          </ListaCardsWrapper.ItemAtributes>

          <ListaCardsWrapper.ItemAtributes>
            Modelo:
            {' '}
            <ListaCardsWrapper.ItemValues>
              {modelo.url}
            </ListaCardsWrapper.ItemValues>
          </ListaCardsWrapper.ItemAtributes>

          <ListaCardsWrapper.Actions>
            <Link href={`https://${modelo.url}`} target="_blank" btnAction>
              acessar
            </Link>
            <Link href={`/modelos/info/${modelo._id}`}>
              infos/edit/del
            </Link>
          </ListaCardsWrapper.Actions>
        </ListaCardsWrapper.Item>

      ))}
    </ListaCardsWrapper>
  );
}

ListaModelos.propTypes = {
  modelosList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      ativo: PropTypes.bool,
      afiliado: PropTypes.string,
      url: PropTypes.string,
      link_whatsapp: PropTypes.string,
      cursos_presenciais: PropTypes.shape({
        espaco_vida_pilates: PropTypes.string,
        metodo_hipopressivo: PropTypes.string,
        livro_mat: PropTypes.string,
      }),
      cursos_online: PropTypes.shape({
        espaco_vida_pilates: PropTypes.string,
        suspension: PropTypes.string,
      }),
    }),
  ),
};

ListaModelos.defaultProps = {
  modelosList: [],
};
