'use strict'

const Schema = use('Schema')

class EmailSchema extends Schema {
  up () {
    this.create('emails', (table) => {
      table.increments()
	    table.string('name').nullable()
	    table.string('email').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('emails')
  }
}

module.exports = EmailSchema
