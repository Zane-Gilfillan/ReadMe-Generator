const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt(

    [

        {
            type: 'input',
            message: 'what is your github username?',
            name: 'user',
        },

        {
            type: 'input',
            message: 'what is the name of your project?',
            name: 'title',
        },
        
        {
            type: 'input',
            message: 'tell me a little bit about your project',
            name: 'description',
        },

        {
            type: 'input',
            message: 'are there any installation instructions?',
            name: 'install',
        },

        {
            type: 'input',
            message: 'are there any usage information',
            name: 'usage',
        },

        {
            type: 'input',
            message: 'are there any contributors to this project?',
            name: 'contrib',
        },

        {
            type: 'input',
            message: 'are there any test instructions?',
            name: 'test',
        },

        {
            type: 'input',
            message: 'choose a license for your project',
            name: 'license',
        },
    ]
).then( ({ user, title, description, install, usage, contrib, test, license}) => {

})

