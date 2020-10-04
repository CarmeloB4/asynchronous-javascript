console.log(`Before`)

// PROMISES implementation
getUser(1)
	.then((user) => getRepositories(user.bitBucketUsername))
	.then((repos) => getCommits(repos))
	.then((commits) => console.log('Commits: ', commits))
	.catch((error) => console.error('Error: ', error.message))

// CALLBACK HELL implementation
// getUser(1,
// 	(user) => {
// 		getRepositories(user.bitBucketUsername,
// 			(repos) => {
// 				getCommits(repos[0],
// 					(commits) => {
// 						console.log('Commits:', commits);
// 					});
// 			})
// 	});

console.log(`After`)

function getUser(id) {
	return new Promise(((resolve, reject) => {
		setTimeout(() => {
			console.log(`Reading a user from a database...`)
			resolve({id: id, bitBucketUsername: 'piero.cascio'})
		}, 2000)

	}))
}

function getRepositories(username) {
	return new Promise(((resolve, reject) => {
		setTimeout(() => {
			console.log(`Calling the BitBucket API for user: ${username}....`)
			resolve(['repo1', 'repo2', 'repo3'])
		})
	}))
}

function getCommits(repos) {
	return new Promise(((resolve, reject) => {
		setTimeout(() => {
			resolve(['commit1'])
		}, 200)
	}))
}
