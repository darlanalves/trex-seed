module.exports = {
	// http://localhost/user/:user
	name: 'user',

	schema: {
		name: String,
		email: String,
		password: {
			type: String,
			private: true
		}
	}
};