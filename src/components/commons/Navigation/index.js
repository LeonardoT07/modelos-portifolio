import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import { NavigationWrapper } from './style/NavigationWrapper';
import { Button } from '../Button';

export default function Navigation({
  infoPage, disabledMode, setDisabledMode, handleDeleteModel,
}) {
  return (
    <NavigationWrapper>
      <NavigationWrapper.UnList>
        <NavigationWrapper.Left>
          <NavigationWrapper.ListItem>
            <Link href="/modelos" navItem>Modelos</Link>
          </NavigationWrapper.ListItem>
          <NavigationWrapper.ListItem>
            <Link href="/modelos/novo" navItem>Criar Novo</Link>
          </NavigationWrapper.ListItem>
        </NavigationWrapper.Left>

        {infoPage
          ? (
            <NavigationWrapper.Right>
              <NavigationWrapper.InfoPage>
                <Button navItem edit onClick={() => setDisabledMode(!disabledMode)}>
                  {disabledMode === true && 'Editar'}
                  {disabledMode === false && 'Cancelar Edição'}
                </Button>
              </NavigationWrapper.InfoPage>
              <NavigationWrapper.InfoPage>
                <Link href="/modelos" navItem excluir onClick={handleDeleteModel}>Excluir Modelo</Link>
              </NavigationWrapper.InfoPage>
              <NavigationWrapper.ListItem>
                <Link href="/logout" navItem logout>Desconectar</Link>
              </NavigationWrapper.ListItem>
            </NavigationWrapper.Right>
          )
          : (
            <NavigationWrapper.Right>
              <NavigationWrapper.ListItem>
                <Link href="/logout" navItem logout>Desconectar</Link>
              </NavigationWrapper.ListItem>
            </NavigationWrapper.Right>
          )}
      </NavigationWrapper.UnList>
    </NavigationWrapper>
  );
}

Navigation.propTypes = {
  infoPage: PropTypes.bool,
  disabledMode: PropTypes.bool,
  setDisabledMode: PropTypes.func,
  handleDeleteModel: PropTypes.func,
};

Navigation.defaultProps = {
  infoPage: false,
  disabledMode: false,
  setDisabledMode: () => {},
  handleDeleteModel: () => {},
};
