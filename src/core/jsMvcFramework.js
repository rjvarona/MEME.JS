import route from 'color-convert/route';

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

	navigate(url) {
		routeList.forEach(route => {
			if (this.matchRoute(route.path, url)) {
				//load DOM
				//return view for html add specific html for specific path
				document.getElementById('meme').innerHTML = route.controller().view();
			}
		});
	}
}
