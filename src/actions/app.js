/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export const navigate = (path) => (dispatch) => {
  // Extract the page name from path.
  const page = path === '/' ? 'home' : path.slice(1);
  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(loadPage(page));

  // Close the drawer - in case the *path* change came from a link in the drawer.
  dispatch(updateDrawerState(false));
};

const loadPage = (page) => async (dispatch) => {
  switch (page) {
    case 'home':
      await
      import ('../components/ts-home.js');
      // Put code here that you want it to run every time when
      // navigate to home page and ts-home.js is loaded
      break;
    case 'blog':
      await
      import ('../components/ts-blog.js');
      break;
    case 'solutions':
      await
      import ('../components/ts-solutions.js');
      break;
    case 'care':
      await
      import ('../components/ts-care.js');
      break;
    case 'design':
      await
      import ('../components/ts-design.js');
      break;
    case 'emergency':
      await
      import ('../components/ts-emergency.js');
      break;
    case 'migrations':
      await
      import ('../components/ts-migrations.js');
      break;
    case 'pagespeed':
      await
      import ('../components/ts-pagespeed.js');
      break;
    case 'privacy':
      await
      import ('../components/ts-privacy.js');
      break;
    case 'security':
      await
      import ('../components/ts-security.js');
      break;
    default:
      page = 'view404';
      await
      import ('../components/ts-view404.js');
  }

  dispatch(updatePage(page));
}

const updatePage = (page) => {
  return {
    type: UPDATE_PAGE,
    page
  };
}

let snackbarTimer;

export const showSnackbar = () => (dispatch) => {
  dispatch({
    type: OPEN_SNACKBAR
  });
  clearTimeout(snackbarTimer);
  snackbarTimer = setTimeout(() =>
    dispatch({
      type: CLOSE_SNACKBAR
    }), 3000);
};

export const updateOffline = (offline) => (dispatch, getState) => {
  // Show the snackbar, unless this is the first load of the page.
  if (getState().app.offline !== undefined) {
    dispatch(showSnackbar());
  }
  dispatch({
    type: UPDATE_OFFLINE,
    offline
  });
};

export const updateLayout = (wide) => (dispatch, getState) => {
  if (getState().app.drawerOpened) {
    dispatch(updateDrawerState(false));
  }
}

export const updateDrawerState = (opened) => (dispatch, getState) => {
  if (getState().app.drawerOpened !== opened) {
    dispatch({
      type: UPDATE_DRAWER_STATE,
      opened
    });
  }
}