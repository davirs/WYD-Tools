// store
import { DucksAction } from '.';

// interface
export type PathsType = string[];

// base
const BSTATE: PathsType = [];

// class
export default class Page {
	private static Types = {
		add: 'ADD.PAGE',
		reset: 'RESET.PAGE',
	};

	public static Actions = {
		Add: (path: string): DucksAction => ({ type: Page.Types.add, data: path }),
		Reset: (): DucksAction => ({ type: Page.Types.reset, data: null }),
	};

	public static Reducer(state: PathsType = BSTATE, { type, data }: DucksAction): PathsType {
		const { add, reset } = Page.Types;

		switch (type) {
			case add: {
				return [...state, data];
			}

			case reset: {
				return [];
			}

			default: {
				return state;
			}
		}
	}
}
