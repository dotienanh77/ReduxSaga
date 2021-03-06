import {all} from 'redux-saga/effects';

import {sayHello} from './counterSagas';
import {watchIncrement, watchDecrement} from './counterSagas';

export default function* rootSaga() {
  yield all([watchIncrement(), watchDecrement()]);
}
