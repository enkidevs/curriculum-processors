// Use this sandbox to play with the compiler
const { getCompiler } = require('./index');

const ast = {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value:
        "author: nem035\naspects:\n  - introduction\n  - workout\ntype: normal\ncategory: must-know\nlinks:\n- '[A](enki.com){documentation}'\n- '[B](enki.com){website}'",
      data: {
        parsedValue: {
          author: 'nem035',
          aspects: ['introduction', 'workout'],
          type: 'normal',
          category: 'must-know',
          links: [
            {
              name: 'Docker Registry',
              url: 'https://docs.docker.com/registry/',
              nature: 'documentation',
            },
            {
              name: 'Docker Hub',
              url: 'https://hub.docker.com/',
              nature: 'website',
            },
          ],
        },
      },
    },
    {
      type: 'headline',
      children: [
        {
          type: 'text',
          value: 'Test',
        },
      ],
    },
    {
      type: 'section',
      name: 'Content',
      children: [
        {
          type: 'code',
          lang: null, // <-- this is the key
          meta: null,
          value: 'test',
        },
      ],
    },
  ],
};

process.stdout.write(getCompiler('insight').compileSync(ast));
