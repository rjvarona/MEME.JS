let routeList = [];

export default class JsMvcFramework {
	constructor(routes) {
		routeList = routes;
		return this;
	}
	//needs to change to take multiple ids later on maybe custom dictionary
	matchRoute(route1, route2) {
		return route1 === route ? true : false;
	}
}
