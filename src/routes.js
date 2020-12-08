import Home from './controllers/Home';
import Contact from './controllers/Contact';
const routes = [
	{
		path: '/',
		controller: Home,
	},
	{
		path: '/contact',
		controller: Contact,
	},
];

export default routes;
