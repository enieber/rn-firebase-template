import React from 'react';

import Login from './Login/Login';
import Home from './Home/Home';
import CreateUser from './CreateUser/CreateUser';

export const routers = {
  login: 'LOGIN',
  home: 'HOME',
  createUser: 'CREATE_USER',
};

export default (router, params) => {
  switch (router) {
    case routers.login: {
      return <Login {...params} />;
    }
    case routers.createUser: {
      return <CreateUser {...params} />;
    }
    case routers.home: {
      return <Home {...params} />;
    }
  }
};
