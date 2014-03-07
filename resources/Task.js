module.exports = {
	// http://localhost/task/:task
	name: 'task',
	parent: 'user',

	schema: {
		name: String,
		deadline: Date,
		description: String
	}
};