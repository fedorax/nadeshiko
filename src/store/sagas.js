import { all } from 'redux-saga/effects';

// public
//import LoginSaga from './auth/login/saga';
//import LogoutSaga from './auth/logout/saga';
// import LayoutSaga from './layout/saga';

export default function* rootSaga() {
  yield all([
    // public
    // eslint-disable-next-line new-cap
    // LayoutSaga(),
    // fork(LoginSaga),
    // fork(LogoutSaga),
  ]);
}
