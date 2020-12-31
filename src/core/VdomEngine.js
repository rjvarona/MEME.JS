// Create virtual node
function h(tag, props, children) {
	return {
		tag,
		props,
		children,
	};
}

// Mount a virtual node to the DOM
function mount(vnode, container) {
	const el = (vnode.el = document.createElement(vnode.tag));

	for (const key in vnode.props) {
		el.setAttribute(key, vnode.props[key]);
	}

	if (typeof vnode.children === 'string') {
		el.textContent = vnode.children;
	} else {
		vnode.children.foreach(child => {
			mount(child, el);
		});
	}

	container.appendChild(el);
}

function unmount(vnode) {
	vnode.el.parentNode.removeChild(vnode.el);
}

// Take 2 vnodes, compare & figure out what's the difference
function patch(n1, n2) {
	const el = (n2.el = n1.el);

	if (n1.tag !== n2.tag) {
		mount(n2, el.parentNode);
		unmount(n1);
	} else {
		if (typeof n2.children === 'string') {
			el.textContent = n2.children;
		}
	}

	const c1 = n1.children;
	const c2 = n2.children;
	const commonLength = Math.min(c1.length, c2.length);

	for (let i = 0; i < commonLength; i++) {
		patch(c1[i], c2[i]);
	}

	if (c1.length > c2.length) {
		c1.slice(c2.length).forEach(child => {
			unmount(child);
		});
	} else if (c2.length > c1.length) {
		c2.slice(c1.length).forEach(child => {
			mount(child, el);
		});
	}
}

function render(message) {
	// Render a virtual node with a given message
}
