console.log(`Before`)

getUser(1,
	(user) => {
		getRepositories(user.bitBucketUsername,
			(repos) => {
				getCommits(repos[0],
					(commits) => {
						console.log('Commits:', commits);
					});
			})
	});

console.log(`After`)

function getUser(id, callback) {
	setTimeout(() => {
		console.log(`Reading a user from a database...`)
		callback({id: id, bitBucketUsername: 'piero.cascio'})
	}, 2000)
}

function getRepositories(username, callback) {
	setTimeout(() => {
		console.log(`Calling the BitBucket API....`)
		callback(['repo1', 'repo2', 'repo3'])
	})
}

function getCommits(repos, callback) {
	setTimeout(() => {
		callback(['commit1'])
	}, 200)
}
