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

//<editor-fold desc="Synchronous implementation">
// const user = getUser(1)
// const repos = getRepositories(user.bitBucketUsername)
// const commits = getCommits(repos[0]);
// console.log('User', user);
// console.log('Repos', repos);
// console.log('Commits', commits);
//</editor-fold>

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
