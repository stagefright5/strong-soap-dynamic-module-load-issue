const importSoapAndDoSomething = (...args) => {
	const sop = require('strong-soap');
	console.log('[Label]', args)
};

module.exports = {
	importSoapAndDoSomething
}
