export default function Home() {
	return {
		view: () => {
			return `
                <h1>Home</h1>
                <a href='/contact' onClick="JsMvcFramework.navigate(event, '/contact')">Contact Page</a>
            `;
		},
	};
}
