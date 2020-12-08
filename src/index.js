//entry point of our framework
import JsMVcFramework from './core/jsMvcFramework';
import routes from './routes';

new JsMVcFramework(routes).init();
