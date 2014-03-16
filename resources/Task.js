module.exports = {
	// http://localhost/task/:task
	name: 'task',
	//	parent: 'user',

	schema: {
		name: {
			type: String,
			unique: true,
			required: true
		},
		done: {
			type: Boolean,
			default: false
		}
	}
};