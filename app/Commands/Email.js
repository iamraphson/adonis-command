'use strict'

const { Command } = require('@adonisjs/ace')
const Helpers = use('Helpers')
const Database = use('Database')
const UserEmail = use('App/Models/Email');
const csv=require('csvtojson')

class Email extends Command {
  static get signature () {
    return 'add:email'
  }

  static get description () {
    return 'Add emails to the database'
  }

  async handle (args, options) {
		let csvLocation = Helpers.publicPath('emails.csv')
	  let data = [];

	  csv().fromFile(csvLocation).on('json', (csvObject) => {
		  data.push(csvObject)
		  }).on('done', async (error) => {
		  	if(error){
		  		 console.log(error.message)
				  return;
			  }
			  for(let i = 0; i < data.length; i++){
				  const userEmail = new UserEmail()
				  userEmail.fill({name: data[i].Name, email: data[i].Email})
				  await userEmail.save();
			  }
			  console.log('Email data imported successfully')
		    Database.close()
		  })
  }
}

module.exports = Email
