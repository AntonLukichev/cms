import React, { ReactElement } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import withApollo from '../lib/apollo';

const GET_MENU_LIST = gql`
  query GetMenuList {
    menus {
      nodes {
        id
        name
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
    }
  }
`;

type MenuItem = {
  id: string;
  label: string;
  url: string;
}

type MenuData = {
  id: string;
  name: string;
  menuItems: {
    nodes: MenuItem[];
  };
}

interface MenuListData {
  menus: {
    nodes: MenuData[];
  };
}

const Temp = (): ReactElement => {
  const { loading, error, data } = useQuery<MenuListData>(GET_MENU_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <>
        {JSON.stringify(error)}
      </>
    );
  }
  return (
    <div>
      {JSON.stringify(data, [0], 2)}
    </div>
  );
};

export default withApollo(Temp, {ssr: true});
