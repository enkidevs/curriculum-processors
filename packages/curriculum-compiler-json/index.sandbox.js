// Use this sandbox to play with the parser
const parser = require('../../packages/curriculum-parser/index')

const ast = {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: "author: catalin\n\nlevels:\n  - basic\n  - medium\n  - advanced\n\ntype: normal\n\ncategory: must-know\n\nstandards:\n  sql.use-dql.0: 10\n  sql.use-ddl.1: 1000\n\ntags:\n  - introduction\n  - workout\n\nstub: false\n\nlinks:\n  - '[EnkiCool](https://enki.com){website}'\n",
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0
        },
        end: {
          line: 26,
          column: 4,
          offset: 257
        },
        indent: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ]
      },
      data: {
        parsedValue: {
          author: 'catalin',
          levels: ['basic', 'medium', 'advanced'],
          type: 'normal',
          category: 'must-know',
          standards: {
            'sql.use-dql.0': 10,
            'sql.use-ddl.1': 1000
          },
          tags: ['introduction', 'workout'],
          stub: false,
          links: [
            {
              name: 'EnkiCool',
              url: 'https://enki.com',
              nature: 'website'
            }
          ]
        }
      }
    },
    {
      type: 'headline',
      children: [
        {
          type: 'text',
          value: 'Sample title with ',
          position: {
            start: {
              line: 27,
              column: 3,
              offset: 260
            },
            end: {
              line: 27,
              column: 21,
              offset: 278
            },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'code',
          position: {
            start: {
              line: 27,
              column: 21,
              offset: 278
            },
            end: {
              line: 27,
              column: 27,
              offset: 284
            },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' within',
          position: {
            start: {
              line: 27,
              column: 27,
              offset: 284
            },
            end: {
              line: 27,
              column: 34,
              offset: 291
            },
            indent: []
          }
        }
      ]
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
              value: 'This is a sample paragraph.',
              position: {
                start: {
                  line: 32,
                  column: 1,
                  offset: 309
                },
                end: {
                  line: 32,
                  column: 28,
                  offset: 336
                },
                indent: []
              }
            },
            {
              type: 'linkReference',
              identifier: '1',
              referenceType: 'shortcut',
              children: [
                {
                  type: 'text',
                  value: '1',
                  position: {
                    start: {
                      line: 32,
                      column: 29,
                      offset: 337
                    },
                    end: {
                      line: 32,
                      column: 30,
                      offset: 338
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 32,
                  column: 28,
                  offset: 336
                },
                end: {
                  line: 32,
                  column: 31,
                  offset: 339
                },
                indent: []
              }
            }
          ],
          position: {
            start: {
              line: 32,
              column: 1,
              offset: 309
            },
            end: {
              line: 32,
              column: 31,
              offset: 339
            },
            indent: []
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'This is a sample list',
              position: {
                start: {
                  line: 34,
                  column: 1,
                  offset: 341
                },
                end: {
                  line: 34,
                  column: 22,
                  offset: 362
                },
                indent: []
              }
            },
            {
              type: 'linkReference',
              identifier: '2',
              referenceType: 'shortcut',
              children: [
                {
                  type: 'text',
                  value: '2',
                  position: {
                    start: {
                      line: 34,
                      column: 23,
                      offset: 363
                    },
                    end: {
                      line: 34,
                      column: 24,
                      offset: 364
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 34,
                  column: 22,
                  offset: 362
                },
                end: {
                  line: 34,
                  column: 25,
                  offset: 365
                },
                indent: []
              }
            },
            {
              type: 'text',
              value: ':',
              position: {
                start: {
                  line: 34,
                  column: 25,
                  offset: 365
                },
                end: {
                  line: 34,
                  column: 26,
                  offset: 366
                },
                indent: []
              }
            }
          ],
          position: {
            start: {
              line: 34,
              column: 1,
              offset: 341
            },
            end: {
              line: 34,
              column: 26,
              offset: 366
            },
            indent: []
          }
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          loose: false,
          children: [
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'item one',
                      position: {
                        start: {
                          line: 36,
                          column: 3,
                          offset: 370
                        },
                        end: {
                          line: 36,
                          column: 11,
                          offset: 378
                        },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: {
                      line: 36,
                      column: 3,
                      offset: 370
                    },
                    end: {
                      line: 36,
                      column: 11,
                      offset: 378
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 36,
                  column: 1,
                  offset: 368
                },
                end: {
                  line: 36,
                  column: 11,
                  offset: 378
                },
                indent: []
              }
            },
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'item ',
                      position: {
                        start: {
                          line: 37,
                          column: 3,
                          offset: 381
                        },
                        end: {
                          line: 37,
                          column: 8,
                          offset: 386
                        },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'two',
                      position: {
                        start: {
                          line: 37,
                          column: 8,
                          offset: 386
                        },
                        end: {
                          line: 37,
                          column: 13,
                          offset: 391
                        },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: {
                      line: 37,
                      column: 3,
                      offset: 381
                    },
                    end: {
                      line: 37,
                      column: 13,
                      offset: 391
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 37,
                  column: 1,
                  offset: 379
                },
                end: {
                  line: 37,
                  column: 13,
                  offset: 391
                },
                indent: []
              }
            }
          ],
          position: {
            start: {
              line: 36,
              column: 1,
              offset: 368
            },
            end: {
              line: 37,
              column: 13,
              offset: 391
            },
            indent: [1]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Sample code',
              position: {
                start: {
                  line: 39,
                  column: 1,
                  offset: 393
                },
                end: {
                  line: 39,
                  column: 12,
                  offset: 404
                },
                indent: []
              }
            },
            {
              type: 'linkReference',
              identifier: '3',
              referenceType: 'shortcut',
              children: [
                {
                  type: 'text',
                  value: '3',
                  position: {
                    start: {
                      line: 39,
                      column: 13,
                      offset: 405
                    },
                    end: {
                      line: 39,
                      column: 14,
                      offset: 406
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 39,
                  column: 12,
                  offset: 404
                },
                end: {
                  line: 39,
                  column: 15,
                  offset: 407
                },
                indent: []
              }
            },
            {
              type: 'text',
              value: ':',
              position: {
                start: {
                  line: 39,
                  column: 15,
                  offset: 407
                },
                end: {
                  line: 39,
                  column: 16,
                  offset: 408
                },
                indent: []
              }
            }
          ],
          position: {
            start: {
              line: 39,
              column: 1,
              offset: 393
            },
            end: {
              line: 39,
              column: 16,
              offset: 408
            },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          value: "console.log('sample code')",
          position: {
            start: {
              line: 40,
              column: 1,
              offset: 409
            },
            end: {
              line: 42,
              column: 4,
              offset: 453
            },
            indent: [1, 1]
          }
        }
      ]
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
              value: 'This is a sample question with one gap:',
              position: {
                start: {
                  line: 47,
                  column: 1,
                  offset: 472
                },
                end: {
                  line: 47,
                  column: 40,
                  offset: 511
                },
                indent: []
              }
            }
          ],
          position: {
            start: {
              line: 47,
              column: 1,
              offset: 472
            },
            end: {
              line: 47,
              column: 40,
              offset: 511
            },
            indent: []
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'questionGap',
              value: '???',
              position: {
                start: {
                  line: 49,
                  column: 1,
                  offset: 513
                },
                end: {
                  line: 49,
                  column: 4,
                  offset: 516
                },
                indent: []
              }
            }
          ],
          position: {
            start: {
              line: 49,
              column: 1,
              offset: 513
            },
            end: {
              line: 49,
              column: 4,
              offset: 516
            },
            indent: []
          }
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          loose: false,
          children: [
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'correct',
                      position: {
                        start: {
                          line: 51,
                          column: 3,
                          offset: 520
                        },
                        end: {
                          line: 51,
                          column: 10,
                          offset: 527
                        },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: {
                      line: 51,
                      column: 3,
                      offset: 520
                    },
                    end: {
                      line: 51,
                      column: 10,
                      offset: 527
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 51,
                  column: 1,
                  offset: 518
                },
                end: {
                  line: 51,
                  column: 10,
                  offset: 527
                },
                indent: []
              },
              correct: true
            },
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'incorrect',
                      position: {
                        start: {
                          line: 52,
                          column: 3,
                          offset: 530
                        },
                        end: {
                          line: 52,
                          column: 12,
                          offset: 539
                        },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: {
                      line: 52,
                      column: 3,
                      offset: 530
                    },
                    end: {
                      line: 52,
                      column: 12,
                      offset: 539
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 52,
                  column: 1,
                  offset: 528
                },
                end: {
                  line: 52,
                  column: 12,
                  offset: 539
                },
                indent: []
              },
              correct: true
            },
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'not a chance',
                      position: {
                        start: {
                          line: 53,
                          column: 3,
                          offset: 542
                        },
                        end: {
                          line: 53,
                          column: 15,
                          offset: 554
                        },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: {
                      line: 53,
                      column: 3,
                      offset: 542
                    },
                    end: {
                      line: 53,
                      column: 15,
                      offset: 554
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 53,
                  column: 1,
                  offset: 540
                },
                end: {
                  line: 53,
                  column: 15,
                  offset: 554
                },
                indent: []
              },
              correct: true
            }
          ],
          position: {
            start: {
              line: 51,
              column: 1,
              offset: 518
            },
            end: {
              line: 53,
              column: 15,
              offset: 554
            },
            indent: [1, 1]
          },
          answers: true
        }
      ],
      question: true
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
              value: 'This is a sample question with two gaps:',
              position: {
                start: {
                  line: 58,
                  column: 1,
                  offset: 573
                },
                end: {
                  line: 58,
                  column: 41,
                  offset: 613
                },
                indent: []
              }
            }
          ],
          position: {
            start: {
              line: 58,
              column: 1,
              offset: 573
            },
            end: {
              line: 58,
              column: 41,
              offset: 613
            },
            indent: []
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'questionGap',
              value: '???',
              position: {
                start: {
                  line: 60,
                  column: 1,
                  offset: 615
                },
                end: {
                  line: 60,
                  column: 4,
                  offset: 618
                },
                indent: []
              }
            }
          ],
          position: {
            start: {
              line: 60,
              column: 1,
              offset: 615
            },
            end: {
              line: 60,
              column: 4,
              offset: 618
            },
            indent: []
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'questionGap',
              value: '???',
              position: {
                start: {
                  line: 62,
                  column: 1,
                  offset: 620
                },
                end: {
                  line: 62,
                  column: 4,
                  offset: 623
                },
                indent: []
              }
            }
          ],
          position: {
            start: {
              line: 62,
              column: 1,
              offset: 620
            },
            end: {
              line: 62,
              column: 4,
              offset: 623
            },
            indent: []
          }
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          loose: false,
          children: [
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'correct',
                      position: {
                        start: {
                          line: 64,
                          column: 3,
                          offset: 627
                        },
                        end: {
                          line: 64,
                          column: 10,
                          offset: 634
                        },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: {
                      line: 64,
                      column: 3,
                      offset: 627
                    },
                    end: {
                      line: 64,
                      column: 10,
                      offset: 634
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 64,
                  column: 1,
                  offset: 625
                },
                end: {
                  line: 64,
                  column: 10,
                  offset: 634
                },
                indent: []
              },
              correct: true
            },
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'also correct',
                      position: {
                        start: {
                          line: 65,
                          column: 3,
                          offset: 637
                        },
                        end: {
                          line: 65,
                          column: 15,
                          offset: 649
                        },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: {
                      line: 65,
                      column: 3,
                      offset: 637
                    },
                    end: {
                      line: 65,
                      column: 15,
                      offset: 649
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 65,
                  column: 1,
                  offset: 635
                },
                end: {
                  line: 65,
                  column: 15,
                  offset: 649
                },
                indent: []
              },
              correct: false
            },
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'nah bro',
                      position: {
                        start: {
                          line: 66,
                          column: 3,
                          offset: 652
                        },
                        end: {
                          line: 66,
                          column: 10,
                          offset: 659
                        },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: {
                      line: 66,
                      column: 3,
                      offset: 652
                    },
                    end: {
                      line: 66,
                      column: 10,
                      offset: 659
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 66,
                  column: 1,
                  offset: 650
                },
                end: {
                  line: 66,
                  column: 10,
                  offset: 659
                },
                indent: []
              },
              correct: false
            },
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'fam, just no',
                      position: {
                        start: {
                          line: 67,
                          column: 3,
                          offset: 662
                        },
                        end: {
                          line: 67,
                          column: 15,
                          offset: 674
                        },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: {
                      line: 67,
                      column: 3,
                      offset: 662
                    },
                    end: {
                      line: 67,
                      column: 15,
                      offset: 674
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 67,
                  column: 1,
                  offset: 660
                },
                end: {
                  line: 67,
                  column: 15,
                  offset: 674
                },
                indent: []
              },
              correct: false
            }
          ],
          position: {
            start: {
              line: 64,
              column: 1,
              offset: 625
            },
            end: {
              line: 67,
              column: 15,
              offset: 674
            },
            indent: [1, 1, 1]
          },
          answers: true
        }
      ],
      question: true
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
              value: 'Quiz title',
              position: {
                start: {
                  line: 72,
                  column: 5,
                  offset: 693
                },
                end: {
                  line: 72,
                  column: 15,
                  offset: 703
                },
                indent: []
              }
            }
          ]
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Sample quiz question',
              position: {
                start: {
                  line: 74,
                  column: 1,
                  offset: 705
                },
                end: {
                  line: 74,
                  column: 21,
                  offset: 725
                },
                indent: []
              }
            }
          ],
          position: {
            start: {
              line: 74,
              column: 1,
              offset: 705
            },
            end: {
              line: 74,
              column: 21,
              offset: 725
            },
            indent: []
          }
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          loose: false,
          children: [
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'correct',
                      position: {
                        start: {
                          line: 76,
                          column: 3,
                          offset: 729
                        },
                        end: {
                          line: 76,
                          column: 10,
                          offset: 736
                        },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: {
                      line: 76,
                      column: 3,
                      offset: 729
                    },
                    end: {
                      line: 76,
                      column: 10,
                      offset: 736
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 76,
                  column: 1,
                  offset: 727
                },
                end: {
                  line: 76,
                  column: 10,
                  offset: 736
                },
                indent: []
              },
              correct: true
            },
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'emphasis',
                      children: [
                        {
                          type: 'text',
                          value: 'incorrect',
                          position: {
                            start: {
                              line: 77,
                              column: 4,
                              offset: 740
                            },
                            end: {
                              line: 77,
                              column: 13,
                              offset: 749
                            },
                            indent: []
                          }
                        }
                      ],
                      position: {
                        start: {
                          line: 77,
                          column: 3,
                          offset: 739
                        },
                        end: {
                          line: 77,
                          column: 14,
                          offset: 750
                        },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: {
                      line: 77,
                      column: 3,
                      offset: 739
                    },
                    end: {
                      line: 77,
                      column: 14,
                      offset: 750
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 77,
                  column: 1,
                  offset: 737
                },
                end: {
                  line: 77,
                  column: 14,
                  offset: 750
                },
                indent: []
              },
              correct: false
            },
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'not a ',
                      position: {
                        start: {
                          line: 78,
                          column: 3,
                          offset: 753
                        },
                        end: {
                          line: 78,
                          column: 9,
                          offset: 759
                        },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'chance',
                      position: {
                        start: {
                          line: 78,
                          column: 9,
                          offset: 759
                        },
                        end: {
                          line: 78,
                          column: 17,
                          offset: 767
                        },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: {
                      line: 78,
                      column: 3,
                      offset: 753
                    },
                    end: {
                      line: 78,
                      column: 17,
                      offset: 767
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 78,
                  column: 1,
                  offset: 751
                },
                end: {
                  line: 78,
                  column: 17,
                  offset: 767
                },
                indent: []
              },
              correct: false
            },
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'nope',
                      position: {
                        start: {
                          line: 79,
                          column: 3,
                          offset: 770
                        },
                        end: {
                          line: 79,
                          column: 7,
                          offset: 774
                        },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: {
                      line: 79,
                      column: 3,
                      offset: 770
                    },
                    end: {
                      line: 79,
                      column: 7,
                      offset: 774
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 79,
                  column: 1,
                  offset: 768
                },
                end: {
                  line: 79,
                  column: 7,
                  offset: 774
                },
                indent: []
              },
              correct: false
            }
          ],
          position: {
            start: {
              line: 76,
              column: 1,
              offset: 727
            },
            end: {
              line: 79,
              column: 7,
              offset: 774
            },
            indent: [1, 1, 1]
          },
          answers: true
        }
      ],
      question: true
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
              identifier: '1: paragraph',
              referenceType: 'shortcut',
              children: [
                {
                  type: 'text',
                  value: '1: Paragraph',
                  position: {
                    start: {
                      line: 84,
                      column: 2,
                      offset: 795
                    },
                    end: {
                      line: 84,
                      column: 14,
                      offset: 807
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 84,
                  column: 1,
                  offset: 794
                },
                end: {
                  line: 84,
                  column: 15,
                  offset: 808
                },
                indent: []
              }
            },
            {
              type: 'text',
              value: '\nSample explanation',
              position: {
                start: {
                  line: 84,
                  column: 15,
                  offset: 808
                },
                end: {
                  line: 85,
                  column: 19,
                  offset: 827
                },
                indent: [1]
              }
            }
          ],
          position: {
            start: {
              line: 84,
              column: 1,
              offset: 794
            },
            end: {
              line: 85,
              column: 19,
              offset: 827
            },
            indent: [1]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'linkReference',
              identifier: '2: list',
              referenceType: 'shortcut',
              children: [
                {
                  type: 'text',
                  value: '2: List',
                  position: {
                    start: {
                      line: 87,
                      column: 2,
                      offset: 830
                    },
                    end: {
                      line: 87,
                      column: 9,
                      offset: 837
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 87,
                  column: 1,
                  offset: 829
                },
                end: {
                  line: 87,
                  column: 10,
                  offset: 838
                },
                indent: []
              }
            },
            {
              type: 'text',
              value: '\nSample list',
              position: {
                start: {
                  line: 87,
                  column: 10,
                  offset: 838
                },
                end: {
                  line: 88,
                  column: 12,
                  offset: 850
                },
                indent: [1]
              }
            }
          ],
          position: {
            start: {
              line: 87,
              column: 1,
              offset: 829
            },
            end: {
              line: 88,
              column: 12,
              offset: 850
            },
            indent: [1]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'linkReference',
              identifier: '3: code',
              referenceType: 'shortcut',
              children: [
                {
                  type: 'text',
                  value: '3: Code',
                  position: {
                    start: {
                      line: 90,
                      column: 2,
                      offset: 853
                    },
                    end: {
                      line: 90,
                      column: 9,
                      offset: 860
                    },
                    indent: []
                  }
                }
              ],
              position: {
                start: {
                  line: 90,
                  column: 1,
                  offset: 852
                },
                end: {
                  line: 90,
                  column: 10,
                  offset: 861
                },
                indent: []
              }
            },
            {
              type: 'text',
              value: '\nSample code',
              position: {
                start: {
                  line: 90,
                  column: 10,
                  offset: 861
                },
                end: {
                  line: 91,
                  column: 12,
                  offset: 873
                },
                indent: [1]
              }
            }
          ],
          position: {
            start: {
              line: 90,
              column: 1,
              offset: 852
            },
            end: {
              line: 91,
              column: 12,
              offset: 873
            },
            indent: [1]
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          value: 'var x = 10',
          position: {
            start: {
              line: 92,
              column: 1,
              offset: 874
            },
            end: {
              line: 94,
              column: 4,
              offset: 902
            },
            indent: [1, 1]
          }
        }
      ]
    }
  ],
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 95,
      column: 1,
      offset: 903
    }
  }
}

const { getCompiler } = require('./index')
const json = getCompiler('insight').compileSync(ast)

console.log(json)