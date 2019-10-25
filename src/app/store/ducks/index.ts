// npm
import { combineReducers } from 'redux';

// ducks
import Paths, { PathsType } from './Paths';

// interface
export type DucksType = {
	Paths: PathsType;
};

export type DucksAction = {
	type: string;
	data: any;
};

// default
export default combineReducers<DucksType>({
	Paths: Paths.Reducer,
});
