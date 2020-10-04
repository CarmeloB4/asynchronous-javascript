console.log(`Before`)
//<editor-fold desc="Asynchronous call">
setTimeout(() => {
	console.log(`Make a remote call...`)
}, 2000)
//</editor-fold>
console.log(`After`)
