'use strict'

const Model = use('Model')

class Email extends Model {

	static get table () {
		return 'emails'
	}

	static get primaryKey () {
		return 'id'
	}
}

module.exports = Email
