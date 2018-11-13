var TestContract_build = {
  "contractName": "TestContract",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "getTotalNumberOfIssues",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_buyer",
          "type": "address"
        },
        {
          "name": "_eth",
          "type": "uint256"
        }
      ],
      "name": "transferEth",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405261271060005534801561001657600080fd5b5061013c806100266000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637acc978714610051578063e9bb84c21461007c575b600080fd5b34801561005d57600080fd5b506100666100bc565b6040518082815260200191505060405180910390f35b6100ba600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506100c5565b005b60008054905090565b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561010b573d6000803e3d6000fd5b5050505600a165627a7a72305820edd637a236d3bae7ac6a00a5f18efb8e7e3412c765440950558511c6d7d381940029",
  "deployedBytecode": "0x60806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637acc978714610051578063e9bb84c21461007c575b600080fd5b34801561005d57600080fd5b506100666100bc565b6040518082815260200191505060405180910390f35b6100ba600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506100c5565b005b60008054905090565b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561010b573d6000803e3d6000fd5b5050505600a165627a7a72305820edd637a236d3bae7ac6a00a5f18efb8e7e3412c765440950558511c6d7d381940029",
  "sourceMap": "26:534:2:-;;;82:5;55:32;;26:534;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:534:2;;;;;;;",
  "deployedSourceMap": "26:534:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;346:104;;8:9:-1;5:2;;;30:1;27;20:12;5:2;346:104:2;;;;;;;;;;;;;;;;;;;;;;;456:101;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;346:104;401:4;424:19;;417:26;;346:104;:::o;456:101::-;529:6;:15;;:21;545:4;529:21;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;529:21:2;456:101;;:::o",
  "source": "pragma solidity ^0.4.24;\n\ncontract TestContract {\n\n    uint totalNumberOfIssues = 10000; //총발행주식수\n    uint totalTrades; //거래횟수\n    uint totalShareholder; //주주수\n\n    struct stockData{\n        address walletAddr; //주주\n        uint transactionHash;\n        uint timestamp;\n    }\n\n    // stockData[] public trades;\n\n    function getTotalNumberOfIssues() public view returns (uint) {\n        return totalNumberOfIssues;\n    }\n\n    function transferEth(address _buyer, uint _eth) payable public {\n        _buyer.transfer(_eth);\n    }\n\n}",
  "sourcePath": "/Users/hyun/dev/Fito/fito.ga/contracts/TestContract.sol",
  "ast": {
    "absolutePath": "/Users/hyun/dev/Fito/fito.ga/contracts/TestContract.sol",
    "exportedSymbols": {
      "TestContract": [
        224
      ]
    },
    "id": 225,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 187,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 224,
        "linearizedBaseContracts": [
          224
        ],
        "name": "TestContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 190,
            "name": "totalNumberOfIssues",
            "nodeType": "VariableDeclaration",
            "scope": 224,
            "src": "55:32:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 188,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "55:4:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3130303030",
              "id": 189,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "82:5:2",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000_by_1",
                "typeString": "int_const 10000"
              },
              "value": "10000"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 192,
            "name": "totalTrades",
            "nodeType": "VariableDeclaration",
            "scope": 224,
            "src": "114:16:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 191,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "114:4:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 194,
            "name": "totalShareholder",
            "nodeType": "VariableDeclaration",
            "scope": 224,
            "src": "151:21:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 193,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "151:4:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "TestContract.stockData",
            "id": 201,
            "members": [
              {
                "constant": false,
                "id": 196,
                "name": "walletAddr",
                "nodeType": "VariableDeclaration",
                "scope": 201,
                "src": "217:18:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 195,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "217:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 198,
                "name": "transactionHash",
                "nodeType": "VariableDeclaration",
                "scope": 201,
                "src": "254:20:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 197,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "254:4:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 200,
                "name": "timestamp",
                "nodeType": "VariableDeclaration",
                "scope": 201,
                "src": "284:14:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 199,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "284:4:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "stockData",
            "nodeType": "StructDefinition",
            "scope": 224,
            "src": "191:114:2",
            "visibility": "public"
          },
          {
            "body": {
              "id": 208,
              "nodeType": "Block",
              "src": "407:43:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 206,
                    "name": "totalNumberOfIssues",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 190,
                    "src": "424:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 205,
                  "id": 207,
                  "nodeType": "Return",
                  "src": "417:26:2"
                }
              ]
            },
            "documentation": null,
            "id": 209,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTotalNumberOfIssues",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 202,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "377:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 204,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 209,
                  "src": "401:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 203,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "401:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "400:6:2"
            },
            "scope": 224,
            "src": "346:104:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 222,
              "nodeType": "Block",
              "src": "519:38:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 219,
                        "name": "_eth",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 213,
                        "src": "545:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 216,
                        "name": "_buyer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 211,
                        "src": "529:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 218,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "529:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 220,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "529:21:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 221,
                  "nodeType": "ExpressionStatement",
                  "src": "529:21:2"
                }
              ]
            },
            "documentation": null,
            "id": 223,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferEth",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 211,
                  "name": "_buyer",
                  "nodeType": "VariableDeclaration",
                  "scope": 223,
                  "src": "477:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 210,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 213,
                  "name": "_eth",
                  "nodeType": "VariableDeclaration",
                  "scope": 223,
                  "src": "493:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 212,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "493:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "476:27:2"
            },
            "payable": true,
            "returnParameters": {
              "id": 215,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "519:0:2"
            },
            "scope": 224,
            "src": "456:101:2",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 225,
        "src": "26:534:2"
      }
    ],
    "src": "0:560:2"
  },
  "legacyAST": {
    "absolutePath": "/Users/hyun/dev/Fito/fito.ga/contracts/TestContract.sol",
    "exportedSymbols": {
      "TestContract": [
        224
      ]
    },
    "id": 225,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 187,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 224,
        "linearizedBaseContracts": [
          224
        ],
        "name": "TestContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 190,
            "name": "totalNumberOfIssues",
            "nodeType": "VariableDeclaration",
            "scope": 224,
            "src": "55:32:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 188,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "55:4:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3130303030",
              "id": 189,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "82:5:2",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000_by_1",
                "typeString": "int_const 10000"
              },
              "value": "10000"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 192,
            "name": "totalTrades",
            "nodeType": "VariableDeclaration",
            "scope": 224,
            "src": "114:16:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 191,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "114:4:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 194,
            "name": "totalShareholder",
            "nodeType": "VariableDeclaration",
            "scope": 224,
            "src": "151:21:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 193,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "151:4:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "TestContract.stockData",
            "id": 201,
            "members": [
              {
                "constant": false,
                "id": 196,
                "name": "walletAddr",
                "nodeType": "VariableDeclaration",
                "scope": 201,
                "src": "217:18:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 195,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "217:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 198,
                "name": "transactionHash",
                "nodeType": "VariableDeclaration",
                "scope": 201,
                "src": "254:20:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 197,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "254:4:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 200,
                "name": "timestamp",
                "nodeType": "VariableDeclaration",
                "scope": 201,
                "src": "284:14:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 199,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "284:4:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "stockData",
            "nodeType": "StructDefinition",
            "scope": 224,
            "src": "191:114:2",
            "visibility": "public"
          },
          {
            "body": {
              "id": 208,
              "nodeType": "Block",
              "src": "407:43:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 206,
                    "name": "totalNumberOfIssues",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 190,
                    "src": "424:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 205,
                  "id": 207,
                  "nodeType": "Return",
                  "src": "417:26:2"
                }
              ]
            },
            "documentation": null,
            "id": 209,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTotalNumberOfIssues",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 202,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "377:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 204,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 209,
                  "src": "401:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 203,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "401:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "400:6:2"
            },
            "scope": 224,
            "src": "346:104:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 222,
              "nodeType": "Block",
              "src": "519:38:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 219,
                        "name": "_eth",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 213,
                        "src": "545:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 216,
                        "name": "_buyer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 211,
                        "src": "529:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 218,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "529:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 220,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "529:21:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 221,
                  "nodeType": "ExpressionStatement",
                  "src": "529:21:2"
                }
              ]
            },
            "documentation": null,
            "id": 223,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferEth",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 211,
                  "name": "_buyer",
                  "nodeType": "VariableDeclaration",
                  "scope": 223,
                  "src": "477:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 210,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 213,
                  "name": "_eth",
                  "nodeType": "VariableDeclaration",
                  "scope": 223,
                  "src": "493:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 212,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "493:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "476:27:2"
            },
            "payable": true,
            "returnParameters": {
              "id": 215,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "519:0:2"
            },
            "scope": 224,
            "src": "456:101:2",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 225,
        "src": "26:534:2"
      }
    ],
    "src": "0:560:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0xa8a4665904d6909b3ca5d43238d59ef3cba6e17d",
      "transactionHash": "0x83440c74fa4c7d10abde165077729813e7b5340b778dcf5c30572ea5681fd6b5"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-13T00:54:04.631Z"
}