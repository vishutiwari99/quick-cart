module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'React component using Typescript',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Component Type: ',
        choices: ['molecule', 'organism', 'template-component'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component Name: ',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/components/{{type}}s/{{name}}',
        templateFiles: 'plop_templates/component/*.hbs',
        base: 'plop_templates/component',
      },
      {
        type: 'append',
        path: 'src/components/{{type}}s/index.js',
        templateFile: 'plop_templates/component/index.js.hbs',
      },
    ],
  });
};
