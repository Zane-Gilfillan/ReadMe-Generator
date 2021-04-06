const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt(

    [
        {
            type: 'input',
            message: 'what is the name of your project?',
            name: 'title',
        },

        {
            type: 'input',
            message: 'what is your github username?',
            name: 'user',
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
            type: 'list',
            message: 'choose a license for your project',
            name: 'license',
            choices: ['MIT', 'GPL', 'Apache', 'GNJ']
        },
    ]
).then( ({ user, title, description, install, usage, contrib, test, license}) => {

    const layout = `

# ${title}
   
# Description
${description}

# Install
${install}

# Usage
${usage}

# Contributions
${contrib}

# Test
${test}

# License
${license}`;

    fileBuild(title, layout)
});

function fileBuild(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`, data, (err) => {
        if(err){
            console.log(err)
        }
        console.log('all done!')
    })
    
}

