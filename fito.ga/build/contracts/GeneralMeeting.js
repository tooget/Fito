var GeneralMeeting_build = {
  "contractName": "GeneralMeeting",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "stockDatas",
      "outputs": [
        {
          "name": "token",
          "type": "uint256"
        },
        {
          "name": "walletAddrFrom",
          "type": "address"
        },
        {
          "name": "walletAddrTo",
          "type": "address"
        },
        {
          "name": "tradingPrice",
          "type": "uint256"
        },
        {
          "name": "timestamp",
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
          "name": "_walletAddrTo",
          "type": "address"
        },
        {
          "name": "_numTk",
          "type": "uint256"
        }
      ],
      "name": "addStocks",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_idx",
          "type": "uint256"
        },
        {
          "name": "_walletAddr",
          "type": "address"
        }
      ],
      "name": "getProductStruct",
      "outputs": [
        {
          "name": "",
          "type": "address"
        },
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
      "constant": true,
      "inputs": [
        {
          "name": "_walletAddr",
          "type": "address"
        }
      ],
      "name": "getTotalStuck",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526127106000556000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561005857600080fd5b5061068e806100686000396000f300608060405260043610610061576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680624461ca146100665780631525bb471461011b5780638ad6e939146101af578063d60fdc50146101ef575b600080fd5b34801561007257600080fd5b5061009160048036038101908080359060200190929190505050610246565b604051808681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019550505050505060405180910390f35b34801561012757600080fd5b5061016660048036038101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102cb565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390f35b6101ed600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506103b5565b005b3480156101fb57600080fd5b50610230600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610619565b6040518082815260200191505060405180910390f35b60048181548110151561025557fe5b90600052602060002090600502016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040154905085565b6000808273ffffffffffffffffffffffffffffffffffffffff166004858154811015156102f457fe5b906000526020600020906005020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156103ad5760048481548110151561035157fe5b906000526020600020906005020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660048581548110151561039257fe5b906000526020600020906005020160040154915091506103ae565b5b9250929050565b600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414151561061457600460a0604051908101604052808481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200134815260200142815250908060018154018082558091505090600182039060005260206000209060050201600090919290919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015550505081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503490503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610612573d6000803e3d6000fd5b505b505050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a7230582087a11b8bf9376ffd4d87928d1be909ce72c23d28a5009811af0d27733dbef8c00029",
  "deployedBytecode": "0x608060405260043610610061576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680624461ca146100665780631525bb471461011b5780638ad6e939146101af578063d60fdc50146101ef575b600080fd5b34801561007257600080fd5b5061009160048036038101908080359060200190929190505050610246565b604051808681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019550505050505060405180910390f35b34801561012757600080fd5b5061016660048036038101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102cb565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390f35b6101ed600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506103b5565b005b3480156101fb57600080fd5b50610230600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610619565b6040518082815260200191505060405180910390f35b60048181548110151561025557fe5b90600052602060002090600502016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040154905085565b6000808273ffffffffffffffffffffffffffffffffffffffff166004858154811015156102f457fe5b906000526020600020906005020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156103ad5760048481548110151561035157fe5b906000526020600020906005020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660048581548110151561039257fe5b906000526020600020906005020160040154915091506103ae565b5b9250929050565b600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414151561061457600460a0604051908101604052808481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200134815260200142815250908060018154018082558091505090600182039060005260206000209060050201600090919290919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015550505081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503490503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610612573d6000803e3d6000fd5b505b505050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a7230582087a11b8bf9376ffd4d87928d1be909ce72c23d28a5009811af0d27733dbef8c00029",
  "sourceMap": "60:1479:0:-;;;110:5;90:25;;159:1;137:23;;;;;;;;;;;;;;;;;;;;60:1479;8:9:-1;5:2;;;30:1;27;20:12;5:2;60:1479:0;;;;;;;",
  "deployedSourceMap": "60:1479:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;520:29;;8:9:-1;5:2;;;30:1;27;20:12;5:2;520:29:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1156:251;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1156:251:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;592:531;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1413:124;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1413:124:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;520:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1156:251::-;1235:7;1244:4;1297:11;1262:46;;:10;1273:4;1262:16;;;;;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;:46;;;1259:142;;;1330:10;1341:4;1330:16;;;;;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;1363:10;1374:4;1363:16;;;;;;;;;;;;;;;;;;;;:26;;;1323:67;;;;;;1259:142;1156:251;;;;;;:::o;592:531::-;940:12;723:1;690:17;:29;708:10;690:29;;;;;;;;;;;;;;;;:34;;687:430;;;739:10;755:60;;;;;;;;;765:6;755:60;;;;773:10;755:60;;;;;;785:13;755:60;;;;;;800:9;755:60;;;;811:3;755:60;;;739:77;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;739:77:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;863:6;830:17;:29;848:10;830:29;;;;;;;;;;;;;;;;:39;;;;;;;;;;;919:6;883:17;:32;901:13;883:32;;;;;;;;;;;;;;;;:42;;;;;;;;;;;976:9;966:19;;999:10;:19;;:28;1019:7;999:28;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;999:28:0;687:430;592:531;;;:::o;1413:124::-;1478:4;1500:17;:30;1518:11;1500:30;;;;;;;;;;;;;;;;1493:37;;1413:124;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\n//token 초기값 이슈 아직X\n\ncontract GeneralMeeting {\n    uint companyToken = 10000; //회사-주주\n    address companyAddr = 0;\n    //address contractCaller; //거래호출;\n    address[] stockDataIndex;\n\n    mapping (address => uint) addressTotalToken;\n\n    struct stockData{\n        uint token; //from 주주 개개인의 거래한 주식수\n        address walletAddrFrom; //주주\n        address walletAddrTo; //주주\n        uint tradingPrice;\n        uint timestamp;\n    }\n\n    stockData[] public stockDatas;\n\n    //stockData 추가 ==> 거래 =\n    function addStocks(address _walletAddrTo, uint _numTk) payable public { //token 연동\n        if(addressTotalToken[msg.sender] != 0){\n            stockDatas.push(stockData(_numTk, msg.sender, _walletAddrTo, msg.value, now));\n            addressTotalToken[msg.sender] -= _numTk;\n            addressTotalToken[_walletAddrTo] += _numTk;\n\n            uint balance;\n            balance = msg.value;\n            msg.sender.transfer(balance);//양도자 즉 주식을 파는 사람의 eth가 늘어야 함. 즉 msg.sender\n        }\n    }\n\n    //거래 내역 리턴\n    function getProductStruct(uint _idx, address _walletAddr) public view returns (address, uint){\n        if(stockDatas[_idx].walletAddrFrom == _walletAddr){\n            return(stockDatas[_idx].walletAddrFrom, stockDatas[_idx].timestamp);\n        }\n    }\n\n    function getTotalStuck(address _walletAddr) public view returns (uint){\n        return addressTotalToken[_walletAddr];\n    }\n}\n",
  "sourcePath": "/Users/hyun/dev/Fito/fito.ga/contracts/GeneralMeeting.sol",
  "ast": {
    "absolutePath": "/Users/hyun/dev/Fito/fito.ga/contracts/GeneralMeeting.sol",
    "exportedSymbols": {
      "GeneralMeeting": [
        130
      ]
    },
    "id": 131,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 130,
        "linearizedBaseContracts": [
          130
        ],
        "name": "GeneralMeeting",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "companyToken",
            "nodeType": "VariableDeclaration",
            "scope": 130,
            "src": "90:25:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "90:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3130303030",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "110:5:0",
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
            "id": 7,
            "name": "companyAddr",
            "nodeType": "VariableDeclaration",
            "scope": 130,
            "src": "137:23:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 5,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "137:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 6,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "159:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10,
            "name": "stockDataIndex",
            "nodeType": "VariableDeclaration",
            "scope": 130,
            "src": "212:24:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 8,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "212:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 9,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "212:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 14,
            "name": "addressTotalToken",
            "nodeType": "VariableDeclaration",
            "scope": 130,
            "src": "243:43:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 13,
              "keyType": {
                "id": 11,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "252:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "243:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 12,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "263:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "GeneralMeeting.stockData",
            "id": 25,
            "members": [
              {
                "constant": false,
                "id": 16,
                "name": "token",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "319:10:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 15,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "319:4:0",
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
                "id": 18,
                "name": "walletAddrFrom",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "386:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 17,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "386:7:0",
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
                "id": 20,
                "name": "walletAddrTo",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "427:20:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 19,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "427:7:0",
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
                "id": 22,
                "name": "tradingPrice",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "466:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 21,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "466:4:0",
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
                "id": 24,
                "name": "timestamp",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "493:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 23,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "493:4:0",
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
            "scope": 130,
            "src": "293:221:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 28,
            "name": "stockDatas",
            "nodeType": "VariableDeclaration",
            "scope": 130,
            "src": "520:29:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_stockData_$25_storage_$dyn_storage",
              "typeString": "struct GeneralMeeting.stockData[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 26,
                "name": "stockData",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 25,
                "src": "520:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_stockData_$25_storage_ptr",
                  "typeString": "struct GeneralMeeting.stockData"
                }
              },
              "id": 27,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "520:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_stockData_$25_storage_$dyn_storage_ptr",
                "typeString": "struct GeneralMeeting.stockData[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 86,
              "nodeType": "Block",
              "src": "662:461:0",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 40,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 35,
                        "name": "addressTotalToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14,
                        "src": "690:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 38,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 36,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 202,
                          "src": "708:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 37,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "708:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "690:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 39,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "723:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "690:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 85,
                  "nodeType": "IfStatement",
                  "src": "687:430:0",
                  "trueBody": {
                    "id": 84,
                    "nodeType": "Block",
                    "src": "725:392:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 45,
                                  "name": "_numTk",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 32,
                                  "src": "765:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 46,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 202,
                                    "src": "773:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 47,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "773:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 48,
                                  "name": "_walletAddrTo",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 30,
                                  "src": "785:13:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 49,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 202,
                                    "src": "800:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 50,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "800:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 51,
                                  "name": "now",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 204,
                                  "src": "811:3:0",
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
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 44,
                                "name": "stockData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25,
                                "src": "755:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_struct$_stockData_$25_storage_ptr_$",
                                  "typeString": "type(struct GeneralMeeting.stockData storage pointer)"
                                }
                              },
                              "id": 52,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "structConstructorCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "755:60:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_stockData_$25_memory",
                                "typeString": "struct GeneralMeeting.stockData memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_stockData_$25_memory",
                                "typeString": "struct GeneralMeeting.stockData memory"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 41,
                              "name": "stockDatas",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28,
                              "src": "739:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_stockData_$25_storage_$dyn_storage",
                                "typeString": "struct GeneralMeeting.stockData storage ref[] storage ref"
                              }
                            },
                            "id": 43,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "739:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_stockData_$25_storage_$returns$_t_uint256_$",
                              "typeString": "function (struct GeneralMeeting.stockData storage ref) returns (uint256)"
                            }
                          },
                          "id": 53,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "739:77:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 54,
                        "nodeType": "ExpressionStatement",
                        "src": "739:77:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 60,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 55,
                              "name": "addressTotalToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14,
                              "src": "830:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 58,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 56,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 202,
                                "src": "848:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 57,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "848:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "830:29:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 59,
                            "name": "_numTk",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32,
                            "src": "863:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "830:39:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 61,
                        "nodeType": "ExpressionStatement",
                        "src": "830:39:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 62,
                              "name": "addressTotalToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14,
                              "src": "883:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 64,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 63,
                              "name": "_walletAddrTo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 30,
                              "src": "901:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "883:32:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 65,
                            "name": "_numTk",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32,
                            "src": "919:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "883:42:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 67,
                        "nodeType": "ExpressionStatement",
                        "src": "883:42:0"
                      },
                      {
                        "assignments": [],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 69,
                            "name": "balance",
                            "nodeType": "VariableDeclaration",
                            "scope": 87,
                            "src": "940:12:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 68,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "940:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 70,
                        "initialValue": null,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "940:12:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 74,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 71,
                            "name": "balance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 69,
                            "src": "966:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 72,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 202,
                              "src": "976:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 73,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "976:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "966:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 75,
                        "nodeType": "ExpressionStatement",
                        "src": "966:19:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 81,
                              "name": "balance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 69,
                              "src": "1019:7:0",
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
                              "expression": {
                                "argumentTypes": null,
                                "id": 76,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 202,
                                "src": "999:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 79,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "999:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 80,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "999:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 82,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "999:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 83,
                        "nodeType": "ExpressionStatement",
                        "src": "999:28:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 87,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addStocks",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30,
                  "name": "_walletAddrTo",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "611:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "611:7:0",
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
                  "id": 32,
                  "name": "_numTk",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "634:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "634:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "610:36:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 34,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:0:0"
            },
            "scope": 130,
            "src": "592:531:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 116,
              "nodeType": "Block",
              "src": "1249:158:0",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 98,
                          "name": "stockDatas",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28,
                          "src": "1262:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_stockData_$25_storage_$dyn_storage",
                            "typeString": "struct GeneralMeeting.stockData storage ref[] storage ref"
                          }
                        },
                        "id": 100,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 99,
                          "name": "_idx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89,
                          "src": "1273:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1262:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_stockData_$25_storage",
                          "typeString": "struct GeneralMeeting.stockData storage ref"
                        }
                      },
                      "id": 101,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "walletAddrFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 18,
                      "src": "1262:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 102,
                      "name": "_walletAddr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 91,
                      "src": "1297:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1262:46:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 115,
                  "nodeType": "IfStatement",
                  "src": "1259:142:0",
                  "trueBody": {
                    "id": 114,
                    "nodeType": "Block",
                    "src": "1309:92:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "components": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 104,
                                  "name": "stockDatas",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 28,
                                  "src": "1330:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_stockData_$25_storage_$dyn_storage",
                                    "typeString": "struct GeneralMeeting.stockData storage ref[] storage ref"
                                  }
                                },
                                "id": 106,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 105,
                                  "name": "_idx",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 89,
                                  "src": "1341:4:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "1330:16:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_stockData_$25_storage",
                                  "typeString": "struct GeneralMeeting.stockData storage ref"
                                }
                              },
                              "id": 107,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "walletAddrFrom",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 18,
                              "src": "1330:31:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 108,
                                  "name": "stockDatas",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 28,
                                  "src": "1363:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_stockData_$25_storage_$dyn_storage",
                                    "typeString": "struct GeneralMeeting.stockData storage ref[] storage ref"
                                  }
                                },
                                "id": 110,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 109,
                                  "name": "_idx",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 89,
                                  "src": "1374:4:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "1363:16:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_stockData_$25_storage",
                                  "typeString": "struct GeneralMeeting.stockData storage ref"
                                }
                              },
                              "id": 111,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "timestamp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 24,
                              "src": "1363:26:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 112,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1329:61:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                            "typeString": "tuple(address,uint256)"
                          }
                        },
                        "functionReturnParameters": 97,
                        "id": 113,
                        "nodeType": "Return",
                        "src": "1323:67:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 117,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getProductStruct",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89,
                  "name": "_idx",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "1182:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 88,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1182:4:0",
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
                  "id": 91,
                  "name": "_walletAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "1193:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 90,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1193:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1181:32:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 97,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 94,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "1235:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1235:7:0",
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
                  "id": 96,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "1244:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 95,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1244:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1234:15:0"
            },
            "scope": 130,
            "src": "1156:251:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 128,
              "nodeType": "Block",
              "src": "1483:54:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 124,
                      "name": "addressTotalToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14,
                      "src": "1500:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 126,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 125,
                      "name": "_walletAddr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119,
                      "src": "1518:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1500:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 123,
                  "id": 127,
                  "nodeType": "Return",
                  "src": "1493:37:0"
                }
              ]
            },
            "documentation": null,
            "id": 129,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTotalStuck",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 119,
                  "name": "_walletAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 129,
                  "src": "1436:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 118,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1436:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1435:21:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 122,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 129,
                  "src": "1478:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1478:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1477:6:0"
            },
            "scope": 130,
            "src": "1413:124:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 131,
        "src": "60:1479:0"
      }
    ],
    "src": "0:1540:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/hyun/dev/Fito/fito.ga/contracts/GeneralMeeting.sol",
    "exportedSymbols": {
      "GeneralMeeting": [
        130
      ]
    },
    "id": 131,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 130,
        "linearizedBaseContracts": [
          130
        ],
        "name": "GeneralMeeting",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "companyToken",
            "nodeType": "VariableDeclaration",
            "scope": 130,
            "src": "90:25:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "90:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3130303030",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "110:5:0",
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
            "id": 7,
            "name": "companyAddr",
            "nodeType": "VariableDeclaration",
            "scope": 130,
            "src": "137:23:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 5,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "137:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 6,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "159:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10,
            "name": "stockDataIndex",
            "nodeType": "VariableDeclaration",
            "scope": 130,
            "src": "212:24:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 8,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "212:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 9,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "212:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 14,
            "name": "addressTotalToken",
            "nodeType": "VariableDeclaration",
            "scope": 130,
            "src": "243:43:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 13,
              "keyType": {
                "id": 11,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "252:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "243:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 12,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "263:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "GeneralMeeting.stockData",
            "id": 25,
            "members": [
              {
                "constant": false,
                "id": 16,
                "name": "token",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "319:10:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 15,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "319:4:0",
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
                "id": 18,
                "name": "walletAddrFrom",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "386:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 17,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "386:7:0",
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
                "id": 20,
                "name": "walletAddrTo",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "427:20:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 19,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "427:7:0",
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
                "id": 22,
                "name": "tradingPrice",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "466:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 21,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "466:4:0",
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
                "id": 24,
                "name": "timestamp",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "493:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 23,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "493:4:0",
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
            "scope": 130,
            "src": "293:221:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 28,
            "name": "stockDatas",
            "nodeType": "VariableDeclaration",
            "scope": 130,
            "src": "520:29:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_stockData_$25_storage_$dyn_storage",
              "typeString": "struct GeneralMeeting.stockData[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 26,
                "name": "stockData",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 25,
                "src": "520:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_stockData_$25_storage_ptr",
                  "typeString": "struct GeneralMeeting.stockData"
                }
              },
              "id": 27,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "520:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_stockData_$25_storage_$dyn_storage_ptr",
                "typeString": "struct GeneralMeeting.stockData[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 86,
              "nodeType": "Block",
              "src": "662:461:0",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 40,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 35,
                        "name": "addressTotalToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14,
                        "src": "690:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 38,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 36,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 202,
                          "src": "708:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 37,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "708:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "690:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 39,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "723:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "690:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 85,
                  "nodeType": "IfStatement",
                  "src": "687:430:0",
                  "trueBody": {
                    "id": 84,
                    "nodeType": "Block",
                    "src": "725:392:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 45,
                                  "name": "_numTk",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 32,
                                  "src": "765:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 46,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 202,
                                    "src": "773:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 47,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "773:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 48,
                                  "name": "_walletAddrTo",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 30,
                                  "src": "785:13:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 49,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 202,
                                    "src": "800:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 50,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "800:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 51,
                                  "name": "now",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 204,
                                  "src": "811:3:0",
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
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 44,
                                "name": "stockData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25,
                                "src": "755:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_struct$_stockData_$25_storage_ptr_$",
                                  "typeString": "type(struct GeneralMeeting.stockData storage pointer)"
                                }
                              },
                              "id": 52,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "structConstructorCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "755:60:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_stockData_$25_memory",
                                "typeString": "struct GeneralMeeting.stockData memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_stockData_$25_memory",
                                "typeString": "struct GeneralMeeting.stockData memory"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 41,
                              "name": "stockDatas",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28,
                              "src": "739:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_stockData_$25_storage_$dyn_storage",
                                "typeString": "struct GeneralMeeting.stockData storage ref[] storage ref"
                              }
                            },
                            "id": 43,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "739:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_stockData_$25_storage_$returns$_t_uint256_$",
                              "typeString": "function (struct GeneralMeeting.stockData storage ref) returns (uint256)"
                            }
                          },
                          "id": 53,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "739:77:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 54,
                        "nodeType": "ExpressionStatement",
                        "src": "739:77:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 60,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 55,
                              "name": "addressTotalToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14,
                              "src": "830:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 58,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 56,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 202,
                                "src": "848:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 57,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "848:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "830:29:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 59,
                            "name": "_numTk",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32,
                            "src": "863:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "830:39:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 61,
                        "nodeType": "ExpressionStatement",
                        "src": "830:39:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 62,
                              "name": "addressTotalToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14,
                              "src": "883:17:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 64,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 63,
                              "name": "_walletAddrTo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 30,
                              "src": "901:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "883:32:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 65,
                            "name": "_numTk",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32,
                            "src": "919:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "883:42:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 67,
                        "nodeType": "ExpressionStatement",
                        "src": "883:42:0"
                      },
                      {
                        "assignments": [],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 69,
                            "name": "balance",
                            "nodeType": "VariableDeclaration",
                            "scope": 87,
                            "src": "940:12:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 68,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "940:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 70,
                        "initialValue": null,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "940:12:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 74,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 71,
                            "name": "balance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 69,
                            "src": "966:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 72,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 202,
                              "src": "976:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 73,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "976:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "966:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 75,
                        "nodeType": "ExpressionStatement",
                        "src": "966:19:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 81,
                              "name": "balance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 69,
                              "src": "1019:7:0",
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
                              "expression": {
                                "argumentTypes": null,
                                "id": 76,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 202,
                                "src": "999:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 79,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "999:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 80,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "999:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 82,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "999:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 83,
                        "nodeType": "ExpressionStatement",
                        "src": "999:28:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 87,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addStocks",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30,
                  "name": "_walletAddrTo",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "611:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "611:7:0",
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
                  "id": 32,
                  "name": "_numTk",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "634:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "634:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "610:36:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 34,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:0:0"
            },
            "scope": 130,
            "src": "592:531:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 116,
              "nodeType": "Block",
              "src": "1249:158:0",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 98,
                          "name": "stockDatas",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28,
                          "src": "1262:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_stockData_$25_storage_$dyn_storage",
                            "typeString": "struct GeneralMeeting.stockData storage ref[] storage ref"
                          }
                        },
                        "id": 100,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 99,
                          "name": "_idx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89,
                          "src": "1273:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1262:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_stockData_$25_storage",
                          "typeString": "struct GeneralMeeting.stockData storage ref"
                        }
                      },
                      "id": 101,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "walletAddrFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 18,
                      "src": "1262:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 102,
                      "name": "_walletAddr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 91,
                      "src": "1297:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1262:46:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 115,
                  "nodeType": "IfStatement",
                  "src": "1259:142:0",
                  "trueBody": {
                    "id": 114,
                    "nodeType": "Block",
                    "src": "1309:92:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "components": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 104,
                                  "name": "stockDatas",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 28,
                                  "src": "1330:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_stockData_$25_storage_$dyn_storage",
                                    "typeString": "struct GeneralMeeting.stockData storage ref[] storage ref"
                                  }
                                },
                                "id": 106,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 105,
                                  "name": "_idx",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 89,
                                  "src": "1341:4:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "1330:16:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_stockData_$25_storage",
                                  "typeString": "struct GeneralMeeting.stockData storage ref"
                                }
                              },
                              "id": 107,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "walletAddrFrom",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 18,
                              "src": "1330:31:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 108,
                                  "name": "stockDatas",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 28,
                                  "src": "1363:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_stockData_$25_storage_$dyn_storage",
                                    "typeString": "struct GeneralMeeting.stockData storage ref[] storage ref"
                                  }
                                },
                                "id": 110,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 109,
                                  "name": "_idx",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 89,
                                  "src": "1374:4:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "1363:16:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_stockData_$25_storage",
                                  "typeString": "struct GeneralMeeting.stockData storage ref"
                                }
                              },
                              "id": 111,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "timestamp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 24,
                              "src": "1363:26:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 112,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1329:61:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                            "typeString": "tuple(address,uint256)"
                          }
                        },
                        "functionReturnParameters": 97,
                        "id": 113,
                        "nodeType": "Return",
                        "src": "1323:67:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 117,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getProductStruct",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89,
                  "name": "_idx",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "1182:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 88,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1182:4:0",
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
                  "id": 91,
                  "name": "_walletAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "1193:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 90,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1193:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1181:32:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 97,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 94,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "1235:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1235:7:0",
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
                  "id": 96,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "1244:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 95,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1244:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1234:15:0"
            },
            "scope": 130,
            "src": "1156:251:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 128,
              "nodeType": "Block",
              "src": "1483:54:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 124,
                      "name": "addressTotalToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14,
                      "src": "1500:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 126,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 125,
                      "name": "_walletAddr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119,
                      "src": "1518:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1500:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 123,
                  "id": 127,
                  "nodeType": "Return",
                  "src": "1493:37:0"
                }
              ]
            },
            "documentation": null,
            "id": 129,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTotalStuck",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 119,
                  "name": "_walletAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 129,
                  "src": "1436:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 118,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1436:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1435:21:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 122,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 129,
                  "src": "1478:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1478:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1477:6:0"
            },
            "scope": 130,
            "src": "1413:124:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 131,
        "src": "60:1479:0"
      }
    ],
    "src": "0:1540:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x0885dbe18cde0da6b86b77311d1b9c01912e2ef7",
      "transactionHash": "0x5eb6ee1738cad0ffad43740a0e80caf64664a2bcf253403ae2174c1b0fe5d905"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-13T01:54:25.617Z"
}