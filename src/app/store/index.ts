// npm
import { createStore } from 'redux';

// ducks
import Ducks, { DucksType, DucksAction } from './ducks';

// default
export default createStore<DucksType, DucksAction, null, null>(Ducks);
