const path = require('path');
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: './main.bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
