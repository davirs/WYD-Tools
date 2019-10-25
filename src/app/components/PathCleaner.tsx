// npm
import { useDispatch } from 'react-redux';

// store
import Page from '../store/ducks/Paths';

// default
export default function PathCleaner() {
	const dispatch = useDispatch();

	dispatch(Page.Actions.Reset());

	return null;
}
