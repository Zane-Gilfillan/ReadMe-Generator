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

    //setting up a layout for the readme file using literals
).then( ({ user, title, description, install, usage, contrib, test, license}) => {

    const layout = `# ${title}

    * [user](#user)
    * [description](#description)
    * [install](#install)
    * [usage](#usage)
    * [contrib](#contrib)
    * [test](#test)
    * [license](#test)
    ## User
    ${user}

    ## title
    ${title}

    ## description
    ${description}

    ## install
    ${install}

    ## usage
    ${usage}

    ## contrib 
    ${contrib}

    ## test
    ${test}

    ## license
    ${license}
    `
})

