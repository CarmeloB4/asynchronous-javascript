console.log(`Before`)
const user = getUser(1);
console.log(user);
console.log(`After`)

function getUser(id) {
//<editor-fold desc="Asynchronous call">
	setTimeout(() => {
		console.log(`Reading a user from a database...`)
		return {id: id, bitBucketUsername: 'piero.cascio'}
	}, 2000)
//</editor-fold>
// 		return {id: id, bitBucketUsername: 'piero.cascio'}		// Add this later to
}
