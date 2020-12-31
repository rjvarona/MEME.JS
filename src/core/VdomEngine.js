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

// Unmount a virtual node from the DOM
function unmount(vnode) {
	// Unmount the virtual node
}

// Take 2 vnodes, compare & figure out what's the difference
function patch(n1, n2) {
	// Case where the nodes are of the same tag
	// Case where the new vnode has string children
	// Case where the new vnode has an array of vnodes
	// Case where the nodes are of different tags
}

function render(message) {
	// Render a virtual node with a given message
}
