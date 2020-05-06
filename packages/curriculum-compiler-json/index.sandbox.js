/* eslint-disable */
// Use this sandbox to play with the parser
const ast = {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value:
        'author: mihaiberq\n\nlevels:\n\n  - beginner\n\n  - basic\n\ntype: normal\n\ncategory: must-know\n\nstandards:\n  blockchain.analyze-blockchain-components.2: 10\n  blockchain.identify-blockchain-applications.0: 20\n  blockchain.identify-blockchain-applications.1: 10\n  blockchain.analyze-network-security-policy.0: 10\n\naspects:\n\n  - introduction\n\n  - workout\n',
      data: {
        parsedValue: {
          author: 'mihaiberq',
          levels: ['beginner', 'basic'],
          type: 'normal',
          category: 'must-know',
          standards: {
            'blockchain.analyze-blockchain-components.2': 10,
            'blockchain.identify-blockchain-applications.0': 20,
            'blockchain.identify-blockchain-applications.1': 10,
            'blockchain.analyze-network-security-policy.0': 10,
          },
          aspects: ['introduction', 'workout'],
        },
      },
    },
    {
      type: 'headline',
      children: [
        {
          type: 'text',
          value: 'The Ledger',
        },
      ],
    },
    {
      type: 'section',
      name: 'Content',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value:
                'The ledger, or better said "the transaction-based ledger", is a blockchain\'s ',
            },
            {
              type: 'emphasis',
              children: [
                {
                  type: 'text',
                  value: 'log of transactions',
                },
              ],
            },
            {
              type: 'text',
              value:
                '. As with any other ledger, the transacted object must be ',
            },
            {
              type: 'strong',
              children: [
                {
                  type: 'text',
                  value: 'uniquely identifiable',
                },
              ],
            },
            {
              type: 'text',
              value:
                ', under one form or another. Bitcoin, like most of the other blockchains, are gravitating around their only asset - the cryptocoin. Hence, the Bitcoin ledger will record bitcoin transactions.',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value:
                'Other types of ledgers include an account-based ledger, used by the Ethereum blockchain, or a combination of the two, used by the QTUM blockchain.',
            },
          ],
        },
        {
          type: 'heading',
          depth: 3,
          children: [
            {
              type: 'text',
              value: 'Why are most blockchains built around coins?',
            },
            {
              type: 'linkReference',
              identifier: '1',
              label: '1',
              referenceType: 'shortcut',
              children: [
                {
                  type: 'text',
                  value: '1',
                },
              ],
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value:
                'Digital coins are easier to track. We cannot necessarily link one coin to an actual person, but we can track their movement. Digital coins (similar to any other currency) are commonly accepted as a mean to evaluate services, items, shares, etc. and it is in developers interest to also release a token.',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Before money, it was something like this:',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'image',
              title: null,
              url:
                '%3Csvg%20width%3D%22100%25%22%20height%3D%22auto%22%20viewBox%3D%220%200%20320%20248%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EGroup%204%3C%2Ftitle%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20fill%3D%22%23FFF%22%20fill-rule%3D%22nonzero%22%20width%3D%22320%22%20height%3D%22248%22%20rx%3D%229%22%2F%3E%3Cg%20transform%3D%22translate%2828%2069%29%22%3E%3Ccircle%20stroke%3D%22%230058DE%22%20stroke-width%3D%225%22%20cx%3D%2238.5%22%20cy%3D%2238.5%22%20r%3D%2238.5%22%2F%3E%3Ctext%20font-family%3D%22Roboto-Bold%2C%20Roboto%22%20font-size%3D%2226%22%20font-weight%3D%22bold%22%20fill%3D%22%23000%22%3E%3Ctspan%20x%3D%2231%22%20y%3D%2229%22%3EX%3C%2Ftspan%3E%3C%2Ftext%3E%3Cpath%20d%3D%22M19.599%2032.25h37.14%22%20stroke%3D%22%238CBAFF%22%20stroke-width%3D%22.5%22%20stroke-linecap%3D%22square%22%2F%3E%3Ctext%20font-family%3D%22Roboto-Light%2C%20Roboto%22%20font-size%3D%2214%22%20font-weight%3D%22300%22%3E%3Ctspan%20x%3D%2219.062%22%20y%3D%2248%22%20fill%3D%22%23000%22%3EHas%3C%2Ftspan%3E%20%3Ctspan%20x%3D%2243.521%22%20y%3D%2248%22%20font-family%3D%22Roboto-Regular%2C%20Roboto%22%20font-weight%3D%22normal%22%20fill%3D%22%23000%22%3E%20%3C%2Ftspan%3E%20%3Ctspan%20x%3D%2247.048%22%20y%3D%2248%22%20font-family%3D%22Roboto-Medium%2C%20Roboto%22%20font-weight%3D%22400%22%20fill%3D%22%23649AEB%22%3EA%3C%2Ftspan%3E%20%20%3Ctspan%20x%3D%2212%22%20y%3D%2261%22%20fill%3D%22%23000%22%3EWants%3C%2Ftspan%3E%20%3Ctspan%20x%3D%2251.067%22%20y%3D%2261%22%20font-family%3D%22Roboto-Regular%2C%20Roboto%22%20font-weight%3D%22normal%22%20fill%3D%22%23000%22%3E%20%3C%2Ftspan%3E%20%3Ctspan%20x%3D%2254.595%22%20y%3D%2261%22%20font-family%3D%22Roboto-Medium%2C%20Roboto%22%20font-weight%3D%22400%22%20fill%3D%22%236198EE%22%3EB%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%28219%2021%29%22%3E%3Ccircle%20stroke%3D%22%230058DE%22%20stroke-width%3D%225%22%20cx%3D%2238.5%22%20cy%3D%2238.5%22%20r%3D%2238.5%22%2F%3E%3Ctext%20font-family%3D%22Roboto-Bold%2C%20Roboto%22%20font-size%3D%2226%22%20font-weight%3D%22bold%22%20fill%3D%22%23000%22%3E%3Ctspan%20x%3D%2231%22%20y%3D%2229%22%3EY%3C%2Ftspan%3E%3C%2Ftext%3E%3Cpath%20d%3D%22M19.599%2032.25h37.14%22%20stroke%3D%22%238CBAFF%22%20stroke-width%3D%22.5%22%20stroke-linecap%3D%22square%22%2F%3E%3Ctext%20font-family%3D%22Roboto-Light%2C%20Roboto%22%20font-size%3D%2214%22%20font-weight%3D%22300%22%3E%3Ctspan%20x%3D%2219.458%22%20y%3D%2248%22%20fill%3D%22%23000%22%3EHas%3C%2Ftspan%3E%20%3Ctspan%20x%3D%2243.917%22%20y%3D%2248%22%20font-family%3D%22Roboto-Regular%2C%20Roboto%22%20font-weight%3D%22normal%22%20fill%3D%22%23000%22%3E%20%3C%2Ftspan%3E%20%3Ctspan%20x%3D%2247.444%22%20y%3D%2248%22%20font-family%3D%22Roboto-Medium%2C%20Roboto%22%20font-weight%3D%22400%22%20fill%3D%22%23649AEB%22%3EB%3C%2Ftspan%3E%20%20%3Ctspan%20x%3D%2212%22%20y%3D%2261%22%20fill%3D%22%23000%22%3EWants%3C%2Ftspan%3E%20%3Ctspan%20x%3D%2251.067%22%20y%3D%2261%22%20font-family%3D%22Roboto-Regular%2C%20Roboto%22%20font-weight%3D%22normal%22%20fill%3D%22%23000%22%3E%20%3C%2Ftspan%3E%20%3Ctspan%20x%3D%2254.595%22%20y%3D%2261%22%20font-family%3D%22Roboto-Medium%2C%20Roboto%22%20font-weight%3D%22400%22%20fill%3D%22%236198EE%22%3EC%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%28142%20146%29%22%3E%3Ccircle%20stroke%3D%22%230058DE%22%20stroke-width%3D%225%22%20cx%3D%2238.5%22%20cy%3D%2238.5%22%20r%3D%2238.5%22%2F%3E%3Ctext%20font-family%3D%22Roboto-Bold%2C%20Roboto%22%20font-size%3D%2226%22%20font-weight%3D%22bold%22%20fill%3D%22%23000%22%3E%3Ctspan%20x%3D%2231%22%20y%3D%2229%22%3EZ%3C%2Ftspan%3E%3C%2Ftext%3E%3Cpath%20d%3D%22M19.599%2032.25h37.14%22%20stroke%3D%22%238CBAFF%22%20stroke-width%3D%22.5%22%20stroke-linecap%3D%22square%22%2F%3E%3Ctext%20font-family%3D%22Roboto-Light%2C%20Roboto%22%20font-size%3D%2214%22%20font-weight%3D%22300%22%3E%3Ctspan%20x%3D%2219.393%22%20y%3D%2248%22%20fill%3D%22%23000%22%3EHas%3C%2Ftspan%3E%20%3Ctspan%20x%3D%2243.852%22%20y%3D%2248%22%20font-family%3D%22Roboto-Regular%2C%20Roboto%22%20font-weight%3D%22normal%22%20fill%3D%22%23000%22%3E%20%3C%2Ftspan%3E%20%3Ctspan%20x%3D%2247.379%22%20y%3D%2248%22%20font-family%3D%22Roboto-Medium%2C%20Roboto%22%20font-weight%3D%22400%22%20fill%3D%22%23649AEB%22%3EC%3C%2Ftspan%3E%20%20%3Ctspan%20x%3D%2212%22%20y%3D%2261%22%20fill%3D%22%23000%22%3EWants%3C%2Ftspan%3E%20%3Ctspan%20x%3D%2251.067%22%20y%3D%2261%22%20font-family%3D%22Roboto-Regular%2C%20Roboto%22%20font-weight%3D%22normal%22%20fill%3D%22%23000%22%3E%20%3C%2Ftspan%3E%20%3Ctspan%20x%3D%2254.595%22%20y%3D%2261%22%20font-family%3D%22Roboto-Medium%2C%20Roboto%22%20font-weight%3D%22400%22%20fill%3D%22%236198EE%22%3EA%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fg%3E%3Cpath%20d%3D%22M214.09%2069.338l-12.064-2.392%202.912%2010.608%209.151-8.216zM111.684%2098.175l92.664-25.437.675-.185-.37-1.35-.675.185-92.664%2025.437-.675.185.37%201.35.675-.185zM205.148%20146l10.832-5.825-8.993-6.335-1.839%2012.16zm30.78-44.903l-25.463%2036.14-.403.573%201.144.806.403-.572%2025.463-36.14.403-.573-1.144-.806-.403.572zM103.998%20136.151l5.898%2010.792%206.274-9.035-12.172-1.757zm36.901%2024.774l-28.1-19.515-.576-.399-.798%201.15.575.4%2028.1%2019.514.576.4.798-1.15-.575-.4z%22%20fill%3D%22%230058DE%22%20fill-rule%3D%22nonzero%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E',
              alt: 'barter cricle',
              svg: true,
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value:
                "Since we now have a non-perishable intermediary, there's no need to count of the others to need what we have to offer when we need what they have to offer.\nHaving a mean to reward well behaved participants in the network, more people are incentivized to join. As more people join the network, the more secure and trustworthy the network becomes.",
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'This way, blockchains are able to self-sustain ',
            },
            {
              type: 'inlineCode',
              value: 'solely',
            },
            {
              type: 'text',
              value: ' based on the adoption rate.',
            },
          ],
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: null,
          value: 'test[2]',
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'image',
              title: null,
              url:
                'https://img.enkipro.com/0cd818e0c946a0f6ffd79981cc02bd4a.png',
              alt: 'link-text-and-image',
            },
          ],
        },
        {
          type: 'heading',
          depth: 3,
          children: [
            {
              type: 'text',
              value: 'The Bitcoin ledger',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'The ledger is built to be ',
            },
            {
              type: 'strong',
              children: [
                {
                  type: 'text',
                  value: 'append-only',
                },
              ],
            },
            {
              type: 'text',
              value:
                ". If any other type of update operation is to take place (removal or modification), it usually means that the blockchain's security and integrity are compromised.",
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value:
                'Unlike physical ledgers, if a transaction ever took place, there is no way of hiding or reversing it. Once happened and confirmed, the details of the transaction will be available to anyone connected to the network. This is one of the reasons the blockchain technology became so popular.',
            },
          ],
        },
      ],
    },
    {
      type: 'section',
      name: 'Footnotes',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'linkReference',
              identifier: '1: test footnote',
              label: '1: Test Footnote',
              referenceType: 'shortcut',
              children: [
                {
                  type: 'text',
                  value: '1: Test Footnote',
                },
              ],
            },
            {
              type: 'text',
              value: '\nThis should get into:',
            },
          ],
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: null,
          value: 'the footnote[1]',
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Continuation',
            },
          ],
        },
      ],
    },
    {
      type: 'section',
      name: 'Practice',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value:
                'Identify a valid blockchain operation from the list below:',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'questionGap',
              value: '???',
            },
          ],
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          spread: false,
          children: [
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'Append data',
                    },
                  ],
                },
              ],
              correct: true,
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Modify data',
                    },
                  ],
                },
              ],
              correct: false,
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Remove data',
                    },
                  ],
                },
              ],
              correct: false,
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Update data',
                    },
                  ],
                },
              ],
              correct: false,
            },
          ],
          answers: true,
        },
      ],
      question: true,
    },
    {
      type: 'section',
      name: 'Revision',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'In the context of coin-based blockchains, the ledger is',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'questionGap',
              value: '???',
            },
          ],
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          spread: false,
          children: [
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'transaction-based',
                    },
                  ],
                },
              ],
              correct: true,
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'account-based',
                    },
                  ],
                },
              ],
              correct: false,
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'property-based',
                    },
                  ],
                },
              ],
              correct: false,
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'storage-based',
                    },
                  ],
                },
              ],
              correct: false,
            },
          ],
          answers: true,
        },
      ],
      question: true,
    },
    {
      type: 'section',
      name: 'Quiz',
      children: [
        {
          type: 'questionHeadline',
          children: [
            {
              type: 'text',
              value: 'is NaN equal to itself?',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: '// What would the following expression evaluate to?',
            },
          ],
        },
        {
          type: 'code',
          lang: null,
          meta: null,
          value: 'NaN === NaN',
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'questionGap',
              value: '???',
            },
          ],
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          spread: false,
          children: [
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'false',
                    },
                  ],
                },
              ],
              correct: true,
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'true',
                    },
                  ],
                },
              ],
              correct: false,
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'SyntaxError',
                    },
                  ],
                },
              ],
              correct: false,
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'NaN',
                    },
                  ],
                },
              ],
              correct: false,
            },
          ],
          answers: true,
        },
      ],
      question: true,
    },
  ],
};
const { getCompiler } = require('./index');
const json = getCompiler('insight').compileSync(ast);

console.log(JSON.stringify(json, null, 2));
