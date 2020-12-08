import Home from './controllers/Home';
import Contact from './controllers/Contact';
const router = [
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
