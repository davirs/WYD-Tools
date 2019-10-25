// npm
import { useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// store
import Page from '../store/ducks/Paths';

// default
export default function PathUpdater() {
	const path = (useRouteMatch() || {}).path || '';

	const dispatch = useDispatch();

	dispatch(Page.Actions.Add(path));

	return null;
}
