const importSoapAndDoSomething = (...args) => {
	const sop = require('strong-soap');
	console.log('[Label]', sop)
};

module.exports = {
	importSoapAndDoSomething
}
