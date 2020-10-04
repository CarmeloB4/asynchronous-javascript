console.log(`Before`)

getUser(1, getRepositories2);

console.log(`After`)

//<editor-fold desc="Named Function">
function getRepositories2(user) {
	return getRepositories(user.bitBucketUsername, getCommits2)
}

function getCommits2(repos) {
	return getCommits(repos[0], displayCommits);
}

function displayCommits(commits) {
	console.log('Commits', commits);
}
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


