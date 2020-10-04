getCustomer(1, (customer) => {
	if (customer.Vip) {
		getVipCreditCard(customer, (cards) => {
			cards.forEach(card => console.log('Card Information: ', card))
			sendEmail(customer.email, cards, () => console.log(`Email sent successfully!`))
		})
	}
})

function sendEmail(email, cards, callback) {
	console.log(`Preparing credit cards report....`)
	console.log(`Sending email to ${email}....`)
	callback();
}

function getCustomer(id, callback) {
	setTimeout(() => {
		callback({
			id: 1,
			name: 'Piero',
			Vip: true,
			email: 'somefakeemail@test.com'
		})
	}, 1500)
}

function getVipCreditCard(user, callback) {
	callback([
		{
			creditCardNumber: '1234 5678 9098',
			secretCode: 123,
			ownerName: 'Piero',
			ownerSurname: 'Cascio',
			layer: 'GOLD'
		},
		{
			creditCardNumber: '4321 5678 9098',
			secretCode: 456,
			ownerName: 'Piero',
			ownerSurname: 'Cascio',
			layer: 'SILVER'
		},
		{
			creditCardNumber: '4321 8765 9098',
			secretCode: 789,
			ownerName: 'Piero',
			ownerSurname: 'Cascio',
			layer: 'PLATINUM'
		}
	])
}
