console.log(`Before`)
getUser(1, (user => {
	console.log('User', user);
}));
console.log(user);
console.log(`After`)

function getUser(id, callback) {
	setTimeout(() => {
		console.log(`Reading a user from a database...`)
		callback({id: id, bitBucketUsername: 'piero.cascio'})
	}, 2000)
}

