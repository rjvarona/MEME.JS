// Create virtual node
function h(tag, props, children) {
	// Return the virtual node
}

// Mount a virtual node to the DOM
function mount(vnode, container) {
	// Create the element
	// Set props
	// Handle children
	// Mount to the DOM
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
