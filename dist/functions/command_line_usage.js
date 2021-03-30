"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const appConfigName1 = config_1.appName.toLowerCase();
const appConfigName = appConfigName1 + '-v2';
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
];
const sections = [
    {
        header: config_1.appName,
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
            `$ ${appConfigName} stats totalram`,
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
        content: `GitHub: {underline ${config_1.GitHubLink}}`
    }
];
exports.default = sections;
