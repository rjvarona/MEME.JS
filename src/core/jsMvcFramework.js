import route from 'color-convert/route';

let routeList = [];

debugger;

export default class JsMvcFramework {
	constructor(routes) {
		routeList = routes;
		window['JsMvcFramework'] = this;
		return window['JsMvcFramework'];
	}
	//needs to change to take multiple ids later on maybe custom dictionary
	matchRoute(route1, route2) {
		return route1 === route2 ? true : false;
	}

	navigate(event, url) {
		if (event != null) event.preventDefault;
		routeList.forEach(route => {
			if (this.matchRoute(route.path, url)) {
				//load DOM
				//return view for html add specific html for specific path
				window.history.pushState({}, '', route.path);
				document.getElementById('meme').innerHTML = route.controller().view();
			}
		});
	}

	init() {
		window.onpopstate = function (event) {
			window['JsMvcFramework'].navigate(event, window.location.pathname);
		};
		window.onload = () => {
			this.navigate(null, window.location.pathname);
		};
	}
}
