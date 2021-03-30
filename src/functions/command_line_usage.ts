import { appName, GitHubLink } from "../config";

const appConfigName = appName.toLowerCase()


const optionDefinitions = [
  {
    name: 'help',
    description: 'Displays the usage guide.',
    type: Boolean
  },
  {
    name: 'version',
    description: 'Show version number.',
    type: Boolean
  }, {
    name: 'debug',
    description: 'Run in debug mode.',
    type: Boolean
  }
]

const sections = [
  {
    header: appName,
    content: 'A Nodejs Server Stats App'
  },
  {
    header: 'Commands',
    content: [
        `-- HTTP Server Commands --`,
        `$ ${appConfigName} serve`,
        `-- Stats Commands --`,
        `$ ${appConfigName} stats`,
        `$ ${appConfigName} stats all`,
        `$ ${appConfigName} totalram`,
        `$ ${appConfigName} stats platform`,
        `$ ${appConfigName} stats CPU_model`,
        `$ ${appConfigName} stats CPU_speed`,
        `$ ${appConfigName} stats CPU_cores`,
        `$ ${appConfigName} stats sysUptime`,
        `$ ${appConfigName} stats hostname`,
      ]
  },
  {
    header: 'Options',
    optionList: optionDefinitions
  },
  {
    header: 'Examples',
    content: [
      {
        desc: '1. Start the HTTP Server ',
        example: `$ ${appConfigName} serve [port]  starts the server`
      },
      {
        desc: '2. Debug Mode ',
        example: `$ ${appConfigName} serve --debug`
      },
      {
        desc: '3. Show Stats on your CLI ',
        example: `$ ${appConfigName} stats all`
      },
      {
        desc: '4. Show certain stat on your CLI ',
        example: `$ ${appConfigName} stats platform`
      }
    ]
  },
  {
    content: `GitHub: {underline ${GitHubLink}}`
  }
]

export default sections