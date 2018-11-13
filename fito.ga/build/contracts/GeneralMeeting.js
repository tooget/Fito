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
      "name": "tradingDatas",
      "outputs": [
        {
          "name": "tradingShares",
          "type": "uint256"
        },
        {
          "name": "sellerAddr",
          "type": "address"
        },
        {
          "name": "buyerAddr",
          "type": "address"
        },
        {
          "name": "tradingPrice",
          "type": "uint256"
        },
        {
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "name": "isTradingComplete",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_balance",
          "type": "uint256"
        }
      ],
      "name": "Sended",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_corpAddr",
          "type": "address"
        }
      ],
      "name": "initShares",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "sending",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "transfer",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_sellerAddr",
          "type": "address"
        },
        {
          "name": "_tradingShares",
          "type": "uint256"
        }
      ],
      "name": "addTradingData",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_ownerAddr",
          "type": "address"
        }
      ],
      "name": "getOwnedShares",
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
      "constant": true,
      "inputs": [],
      "name": "getShareOfCompany",
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
      "inputs": [],
      "name": "sendEth",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405261271060005534801561001657600080fd5b50610817806100266000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306e99fef1461009357806308e6eabc1461009d5780631290a838146100a7578063433c381e146100fb578063610495ef146101525780638a4068dd146101955780639839b4ba1461019f578063c3e53c51146101ca575b600080fd5b61009b61028a565b005b6100a561028c565b005b6100e5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506102d6565b6040518082815260200191505060405180910390f35b34801561010757600080fd5b5061013c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610597565b6040518082815260200191505060405180910390f35b34801561015e57600080fd5b50610193600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105e0565b005b61019d610636565b005b3480156101ab57600080fd5b506101b46106a1565b6040518082815260200191505060405180910390f35b3480156101d657600080fd5b506101f5600480360381019080803590602001909291905050506106aa565b604051808781526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182151515158152602001965050505050505060405180910390f35b565b346002819055507f8af68a55d4ee2bb2549f41a62e9a9ff1288d3a581c8960e3ecf22e9fa4b4691634600254604051808381526020018281526020019250505060405180910390a1565b60006102e0610786565b600083600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610332575060008414155b151561033d57600080fd5b60c0604051908101604052808581526020018673ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff168152602001348152602001428152602001600015158152509150600482908060018154018082558091505090600182039060005260206000209060060201600090919290919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff021916908315150217905550505090506104a385610742565b6104ab61028c565b83600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555083600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555061054d610636565b600160046001830381548110151561056157fe5b906000526020600020906006020160050160006101000a81548160ff021916908315150217905550600181039250505092915050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000819050600054600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080819055505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561069e573d6000803e3d6000fd5b50565b60008054905090565b6004818154811015156106b957fe5b90600052602060002090600602016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040154908060050160009054906101000a900460ff16905086565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60c06040519081016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160001515815250905600a165627a7a72305820f43bb06c4b8e472a398155c901be9452772081a6e7e7b0dec3aa36815aa9595e0029",
  "deployedBytecode": "0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306e99fef1461009357806308e6eabc1461009d5780631290a838146100a7578063433c381e146100fb578063610495ef146101525780638a4068dd146101955780639839b4ba1461019f578063c3e53c51146101ca575b600080fd5b61009b61028a565b005b6100a561028c565b005b6100e5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506102d6565b6040518082815260200191505060405180910390f35b34801561010757600080fd5b5061013c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610597565b6040518082815260200191505060405180910390f35b34801561015e57600080fd5b50610193600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105e0565b005b61019d610636565b005b3480156101ab57600080fd5b506101b46106a1565b6040518082815260200191505060405180910390f35b3480156101d657600080fd5b506101f5600480360381019080803590602001909291905050506106aa565b604051808781526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182151515158152602001965050505050505060405180910390f35b565b346002819055507f8af68a55d4ee2bb2549f41a62e9a9ff1288d3a581c8960e3ecf22e9fa4b4691634600254604051808381526020018281526020019250505060405180910390a1565b60006102e0610786565b600083600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610332575060008414155b151561033d57600080fd5b60c0604051908101604052808581526020018673ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff168152602001348152602001428152602001600015158152509150600482908060018154018082558091505090600182039060005260206000209060060201600090919290919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff021916908315150217905550505090506104a385610742565b6104ab61028c565b83600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555083600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555061054d610636565b600160046001830381548110151561056157fe5b906000526020600020906006020160050160006101000a81548160ff021916908315150217905550600181039250505092915050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000819050600054600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080819055505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561069e573d6000803e3d6000fd5b50565b60008054905090565b6004818154811015156106b957fe5b90600052602060002090600602016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040154908060050160009054906101000a900460ff16905086565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60c06040519081016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160001515815250905600a165627a7a72305820f43bb06c4b8e472a398155c901be9452772081a6e7e7b0dec3aa36815aa9595e0029",
  "sourceMap": "60:2452:0:-;;;221:5;199:27;;60:2452;8:9:-1;5:2;;;30:1;27;20:12;5:2;60:2452:0;;;;;;;",
  "deployedSourceMap": "60:2452:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2474:36;;;;;;965:111;;;;;;1298:634;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2252:117;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2252:117:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;656:167;;8:9:-1;5:2;;;30:1;27;20:12;5:2;656:167:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;1158:80;;;;;;2375:93;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2375:93:0;;;;;;;;;;;;;;;;;;;;;;;616:33;;8:9:-1;5:2;;;30:1;27;20:12;5:2;616:33:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2474:36;:::o;965:111::-;1019:9;1009:7;:19;;;;1043:26;1050:9;1061:7;;1043:26;;;;;;;;;;;;;;;;;;;;;;;;965:111::o;1298:634::-;1387:4;1487:33;;:::i;:::-;1608:15;1439:14;1411:11;:24;1423:11;1411:24;;;;;;;;;;;;;;;;:42;;:65;;;;;1475:1;1457:14;:19;;1411:65;1403:74;;;;;;;;1523:75;;;;;;;;;1535:14;1523:75;;;;1551:11;1523:75;;;;;;1564:10;1523:75;;;;;;1576:9;1523:75;;;;1587:3;1523:75;;;;1592:5;1523:75;;;;;1487:111;;1626:12;1644:14;1626:33;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1626:33:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1608:51;;1669:24;1681:11;1669;:24::i;:::-;1703:9;:7;:9::i;:::-;1750:14;1722:11;:24;1734:11;1722:24;;;;;;;;;;;;;;;;:42;;;;;;;;;;;1801:14;1774:11;:23;1786:10;1774:23;;;;;;;;;;;;;;;;:41;;;;;;;;;;;1825:10;:8;:10::i;:::-;1892:4;1845:12;1869:1;1858:10;:12;1845:26;;;;;;;;;;;;;;;;;;;;:44;;;:51;;;;;;;;;;;;;;;;;;1924:1;1913:10;:12;1906:19;;1298:634;;;;;;:::o;2252:117::-;2317:4;2339:11;:23;2351:10;2339:23;;;;;;;;;;;;;;;;2332:30;;2252:117;;;:::o;656:167::-;712:16;731:9;712:28;;774:14;;750:11;:21;762:8;750:21;;;;;;;;;;;;;;;:38;;;;815:1;798:14;:18;;;;656:167;;:::o;1158:80::-;1203:8;;;;;;;;;;;:17;;:28;1221:9;1203:28;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1203:28:0;1158:80::o;2375:93::-;2424:4;2447:14;;2440:21;;2375:93;:::o;616:33::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;829:85::-;898:9;887:8;;:20;;;;;;;;;;;;;;;;;;829:85;:::o;60:2452::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\n//token 초기값 이슈 아직X\n\ncontract GeneralMeeting {\n\n    //로깅을 위한 이벤트\n    event Sended(\n        uint256 _value,\n        uint256 _balance\n    );\n\n    uint shareOfCompany = 10000; //회사-주주\n    address ethTaker;\n    uint balance;\n\n    mapping (address => uint) ownedShares;\n\n    struct tradingData {\n        uint tradingShares; //from 주주 개개인의 거래한 주식수\n        address sellerAddr; //주식 양도자\n        address buyerAddr; //주식 양수자\n        uint tradingPrice;\n        uint timestamp;\n        bool isTradingComplete;\n    }\n\n    tradingData[] public tradingDatas;\n\n    function initShares(address _corpAddr) public {\n        address corpAddr = _corpAddr;\n        ownedShares[corpAddr] = shareOfCompany;\n        shareOfCompany = 0;\n    }\n\n    function setEthTaker(address _ethTaker) private {\n        ethTaker = _ethTaker;\n    }\n\n    //호출자가 CA에게 이더를 전송\n    function sending() payable public {\n        balance = msg.value;\n        emit Sended(msg.value, balance);\n    }\n\n    //set함수를 통해 저장한 주소에 이더를 전송하는 함수\n    function transfer() payable public {\n        ethTaker.transfer(msg.value);\n    }\n\n    //stockData 추가 ==> 양수자가 거래 요청\n    function addTradingData(address _sellerAddr, uint _tradingShares) payable public returns(uint) {\n        require(ownedShares[_sellerAddr] >= _tradingShares && _tradingShares != 0);\n        tradingData memory newTradingData = tradingData(_tradingShares, _sellerAddr, msg.sender, msg.value, now, false);\n        uint tradingIdx = tradingDatas.push(newTradingData);\n        setEthTaker(_sellerAddr);\n        sending();\n        ownedShares[_sellerAddr] -= _tradingShares;\n        ownedShares[msg.sender] += _tradingShares;\n        transfer();\n        tradingDatas[tradingIdx-1].isTradingComplete = true;\n        return tradingIdx-1;\n    }\n\n    //총 거래 내역 수 리턴\n    // function getLengthOftradingDatas() public view returns (uint) {\n    //     return tradingDatas.length();\n    // }\n\n    //거래 내역 리턴\n    // function getProductStruct(uint _idx) public view returns (tradingData[]) {\n    //     return tradingDatas[_idx];\n    // }\n\n    function getOwnedShares(address _ownerAddr) public view returns (uint){\n        return ownedShares[_ownerAddr];\n    }\n\n    function getShareOfCompany() public view returns(uint) {\n        return shareOfCompany;\n    }\n\n    function sendEth() public payable {}\n}\n",
  "sourcePath": "/Users/hyun/dev/Fito/fito.ga/contracts/GeneralMeeting.sol",
  "ast": {
    "absolutePath": "/Users/hyun/dev/Fito/fito.ga/contracts/GeneralMeeting.sol",
    "exportedSymbols": {
      "GeneralMeeting": [
        193
      ]
    },
    "id": 194,
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
        "id": 193,
        "linearizedBaseContracts": [
          193
        ],
        "name": "GeneralMeeting",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 7,
            "name": "Sended",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 7,
                  "src": "146:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "146:7:0",
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
                  "id": 5,
                  "indexed": false,
                  "name": "_balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 7,
                  "src": "170:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "170:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "136:56:0"
            },
            "src": "124:69:0"
          },
          {
            "constant": false,
            "id": 10,
            "name": "shareOfCompany",
            "nodeType": "VariableDeclaration",
            "scope": 193,
            "src": "199:27:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 8,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "199:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3130303030",
              "id": 9,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "221:5:0",
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
            "id": 12,
            "name": "ethTaker",
            "nodeType": "VariableDeclaration",
            "scope": 193,
            "src": "248:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 11,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "248:7:0",
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
            "id": 14,
            "name": "balance",
            "nodeType": "VariableDeclaration",
            "scope": 193,
            "src": "270:12:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "270:4:0",
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
            "name": "ownedShares",
            "nodeType": "VariableDeclaration",
            "scope": 193,
            "src": "289:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 17,
              "keyType": {
                "id": 15,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "298:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "289:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 16,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "309:4:0",
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
            "canonicalName": "GeneralMeeting.tradingData",
            "id": 31,
            "members": [
              {
                "constant": false,
                "id": 20,
                "name": "tradingShares",
                "nodeType": "VariableDeclaration",
                "scope": 31,
                "src": "362:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 19,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "362:4:0",
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
                "id": 22,
                "name": "sellerAddr",
                "nodeType": "VariableDeclaration",
                "scope": 31,
                "src": "437:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 21,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "437:7:0",
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
                "id": 24,
                "name": "buyerAddr",
                "nodeType": "VariableDeclaration",
                "scope": 31,
                "src": "484:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 23,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "484:7:0",
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
                "id": 26,
                "name": "tradingPrice",
                "nodeType": "VariableDeclaration",
                "scope": 31,
                "src": "530:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 25,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "530:4:0",
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
                "id": 28,
                "name": "timestamp",
                "nodeType": "VariableDeclaration",
                "scope": 31,
                "src": "557:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 27,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "557:4:0",
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
                "id": 30,
                "name": "isTradingComplete",
                "nodeType": "VariableDeclaration",
                "scope": 31,
                "src": "581:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 29,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "581:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "tradingData",
            "nodeType": "StructDefinition",
            "scope": 193,
            "src": "333:277:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 34,
            "name": "tradingDatas",
            "nodeType": "VariableDeclaration",
            "scope": 193,
            "src": "616:33:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_tradingData_$31_storage_$dyn_storage",
              "typeString": "struct GeneralMeeting.tradingData[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 32,
                "name": "tradingData",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 31,
                "src": "616:11:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_tradingData_$31_storage_ptr",
                  "typeString": "struct GeneralMeeting.tradingData"
                }
              },
              "id": 33,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "616:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_tradingData_$31_storage_$dyn_storage_ptr",
                "typeString": "struct GeneralMeeting.tradingData[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 53,
              "nodeType": "Block",
              "src": "702:121:0",
              "statements": [
                {
                  "assignments": [
                    40
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 40,
                      "name": "corpAddr",
                      "nodeType": "VariableDeclaration",
                      "scope": 54,
                      "src": "712:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 39,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "712:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 42,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 41,
                    "name": "_corpAddr",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 36,
                    "src": "731:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "712:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 47,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 43,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "750:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 45,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 44,
                        "name": "corpAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40,
                        "src": "762:8:0",
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
                      "src": "750:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 46,
                      "name": "shareOfCompany",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "774:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "750:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 48,
                  "nodeType": "ExpressionStatement",
                  "src": "750:38:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 51,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 49,
                      "name": "shareOfCompany",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "798:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 50,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "815:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "798:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 52,
                  "nodeType": "ExpressionStatement",
                  "src": "798:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 54,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "initShares",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 37,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36,
                  "name": "_corpAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "676:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "676:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "675:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 38,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "702:0:0"
            },
            "scope": 193,
            "src": "656:167:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 63,
              "nodeType": "Block",
              "src": "877:37:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 61,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 59,
                      "name": "ethTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12,
                      "src": "887:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 60,
                      "name": "_ethTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "898:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "887:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 62,
                  "nodeType": "ExpressionStatement",
                  "src": "887:20:0"
                }
              ]
            },
            "documentation": null,
            "id": 64,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setEthTaker",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56,
                  "name": "_ethTaker",
                  "nodeType": "VariableDeclaration",
                  "scope": 64,
                  "src": "850:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "850:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "849:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "877:0:0"
            },
            "scope": 193,
            "src": "829:85:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 78,
              "nodeType": "Block",
              "src": "999:77:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 70,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 67,
                      "name": "balance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14,
                      "src": "1009:7:0",
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
                        "id": 68,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 265,
                        "src": "1019:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 69,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1019:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1009:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 71,
                  "nodeType": "ExpressionStatement",
                  "src": "1009:19:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 73,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 265,
                          "src": "1050:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 74,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1050:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 75,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14,
                        "src": "1061:7:0",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 72,
                      "name": "Sended",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "1043:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 76,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1043:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77,
                  "nodeType": "EmitStatement",
                  "src": "1038:31:0"
                }
              ]
            },
            "documentation": null,
            "id": 79,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "sending",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "981:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "999:0:0"
            },
            "scope": 193,
            "src": "965:111:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 89,
              "nodeType": "Block",
              "src": "1193:45:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 85,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 265,
                          "src": "1221:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 86,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1221:9:0",
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
                        "id": 82,
                        "name": "ethTaker",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12,
                        "src": "1203:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 84,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1203:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 87,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1203:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 88,
                  "nodeType": "ExpressionStatement",
                  "src": "1203:28:0"
                }
              ]
            },
            "documentation": null,
            "id": 90,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1175:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 81,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1193:0:0"
            },
            "scope": 193,
            "src": "1158:80:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 167,
              "nodeType": "Block",
              "src": "1393:539:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 100,
                              "name": "ownedShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "1411:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 102,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 101,
                              "name": "_sellerAddr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 92,
                              "src": "1423:11:0",
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
                            "src": "1411:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 103,
                            "name": "_tradingShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 94,
                            "src": "1439:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1411:42:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 107,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 105,
                            "name": "_tradingShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 94,
                            "src": "1457:14:0",
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
                            "id": 106,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1475:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1457:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1411:65:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 99,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        268,
                        269
                      ],
                      "referencedDeclaration": 268,
                      "src": "1403:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1403:74:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110,
                  "nodeType": "ExpressionStatement",
                  "src": "1403:74:0"
                },
                {
                  "assignments": [
                    112
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 112,
                      "name": "newTradingData",
                      "nodeType": "VariableDeclaration",
                      "scope": 168,
                      "src": "1487:33:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_tradingData_$31_memory_ptr",
                        "typeString": "struct GeneralMeeting.tradingData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 111,
                        "name": "tradingData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 31,
                        "src": "1487:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$31_storage_ptr",
                          "typeString": "struct GeneralMeeting.tradingData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 123,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "_tradingShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 94,
                        "src": "1535:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 115,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "1551:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 116,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 265,
                          "src": "1564:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 117,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1564:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 118,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 265,
                          "src": "1576:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 119,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1576:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 120,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 267,
                        "src": "1587:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1592:5:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
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
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 113,
                      "name": "tradingData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31,
                      "src": "1523:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_tradingData_$31_storage_ptr_$",
                        "typeString": "type(struct GeneralMeeting.tradingData storage pointer)"
                      }
                    },
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1523:75:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_tradingData_$31_memory",
                      "typeString": "struct GeneralMeeting.tradingData memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1487:111:0"
                },
                {
                  "assignments": [
                    125
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125,
                      "name": "tradingIdx",
                      "nodeType": "VariableDeclaration",
                      "scope": 168,
                      "src": "1608:15:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 124,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1608:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 130,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 128,
                        "name": "newTradingData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 112,
                        "src": "1644:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$31_memory_ptr",
                          "typeString": "struct GeneralMeeting.tradingData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_tradingData_$31_memory_ptr",
                          "typeString": "struct GeneralMeeting.tradingData memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 126,
                        "name": "tradingDatas",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34,
                        "src": "1626:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_tradingData_$31_storage_$dyn_storage",
                          "typeString": "struct GeneralMeeting.tradingData storage ref[] storage ref"
                        }
                      },
                      "id": 127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1626:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_tradingData_$31_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct GeneralMeeting.tradingData storage ref) returns (uint256)"
                      }
                    },
                    "id": 129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1626:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1608:51:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 132,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "1681:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 131,
                      "name": "setEthTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 64,
                      "src": "1669:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1669:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 134,
                  "nodeType": "ExpressionStatement",
                  "src": "1669:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 135,
                      "name": "sending",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "1703:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1703:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "1703:9:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 138,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "1722:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 140,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 139,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "1734:11:0",
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
                      "src": "1722:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 141,
                      "name": "_tradingShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 94,
                      "src": "1750:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1722:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 143,
                  "nodeType": "ExpressionStatement",
                  "src": "1722:42:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 149,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 144,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "1774:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 147,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 145,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 265,
                          "src": "1786:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1786:10:0",
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
                      "src": "1774:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 148,
                      "name": "_tradingShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 94,
                      "src": "1801:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1774:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 150,
                  "nodeType": "ExpressionStatement",
                  "src": "1774:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 151,
                      "name": "transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "1825:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 152,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1825:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 153,
                  "nodeType": "ExpressionStatement",
                  "src": "1825:10:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 154,
                          "name": "tradingDatas",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34,
                          "src": "1845:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_tradingData_$31_storage_$dyn_storage",
                            "typeString": "struct GeneralMeeting.tradingData storage ref[] storage ref"
                          }
                        },
                        "id": 158,
                        "indexExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 157,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 155,
                            "name": "tradingIdx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 125,
                            "src": "1858:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 156,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1869:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "1858:12:0",
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
                        "src": "1845:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$31_storage",
                          "typeString": "struct GeneralMeeting.tradingData storage ref"
                        }
                      },
                      "id": 159,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "isTradingComplete",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 30,
                      "src": "1845:44:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 160,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1892:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1845:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 162,
                  "nodeType": "ExpressionStatement",
                  "src": "1845:51:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 163,
                      "name": "tradingIdx",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125,
                      "src": "1913:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 164,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1924:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1913:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 98,
                  "id": 166,
                  "nodeType": "Return",
                  "src": "1906:19:0"
                }
              ]
            },
            "documentation": null,
            "id": 168,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addTradingData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 95,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92,
                  "name": "_sellerAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "1322:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 91,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1322:7:0",
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
                  "id": 94,
                  "name": "_tradingShares",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "1343:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1343:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1321:42:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 98,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 97,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "1387:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 96,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1387:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1386:6:0"
            },
            "scope": 193,
            "src": "1298:634:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 179,
              "nodeType": "Block",
              "src": "2322:47:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 175,
                      "name": "ownedShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "2339:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 177,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 176,
                      "name": "_ownerAddr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 170,
                      "src": "2351:10:0",
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
                    "src": "2339:23:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 174,
                  "id": 178,
                  "nodeType": "Return",
                  "src": "2332:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 180,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwnedShares",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 170,
                  "name": "_ownerAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 180,
                  "src": "2276:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 169,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2276:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2275:20:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 174,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 173,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 180,
                  "src": "2317:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 172,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2317:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2316:6:0"
            },
            "scope": 193,
            "src": "2252:117:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 187,
              "nodeType": "Block",
              "src": "2430:38:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 185,
                    "name": "shareOfCompany",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 10,
                    "src": "2447:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 184,
                  "id": 186,
                  "nodeType": "Return",
                  "src": "2440:21:0"
                }
              ]
            },
            "documentation": null,
            "id": 188,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getShareOfCompany",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 181,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2401:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 183,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 188,
                  "src": "2424:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 182,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2424:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2423:6:0"
            },
            "scope": 193,
            "src": "2375:93:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 191,
              "nodeType": "Block",
              "src": "2508:2:0",
              "statements": []
            },
            "documentation": null,
            "id": 192,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "sendEth",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 189,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2490:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 190,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2508:0:0"
            },
            "scope": 193,
            "src": "2474:36:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 194,
        "src": "60:2452:0"
      }
    ],
    "src": "0:2513:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/hyun/dev/Fito/fito.ga/contracts/GeneralMeeting.sol",
    "exportedSymbols": {
      "GeneralMeeting": [
        193
      ]
    },
    "id": 194,
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
        "id": 193,
        "linearizedBaseContracts": [
          193
        ],
        "name": "GeneralMeeting",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 7,
            "name": "Sended",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 7,
                  "src": "146:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "146:7:0",
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
                  "id": 5,
                  "indexed": false,
                  "name": "_balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 7,
                  "src": "170:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "170:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "136:56:0"
            },
            "src": "124:69:0"
          },
          {
            "constant": false,
            "id": 10,
            "name": "shareOfCompany",
            "nodeType": "VariableDeclaration",
            "scope": 193,
            "src": "199:27:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 8,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "199:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3130303030",
              "id": 9,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "221:5:0",
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
            "id": 12,
            "name": "ethTaker",
            "nodeType": "VariableDeclaration",
            "scope": 193,
            "src": "248:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 11,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "248:7:0",
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
            "id": 14,
            "name": "balance",
            "nodeType": "VariableDeclaration",
            "scope": 193,
            "src": "270:12:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "270:4:0",
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
            "name": "ownedShares",
            "nodeType": "VariableDeclaration",
            "scope": 193,
            "src": "289:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 17,
              "keyType": {
                "id": 15,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "298:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "289:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 16,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "309:4:0",
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
            "canonicalName": "GeneralMeeting.tradingData",
            "id": 31,
            "members": [
              {
                "constant": false,
                "id": 20,
                "name": "tradingShares",
                "nodeType": "VariableDeclaration",
                "scope": 31,
                "src": "362:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 19,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "362:4:0",
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
                "id": 22,
                "name": "sellerAddr",
                "nodeType": "VariableDeclaration",
                "scope": 31,
                "src": "437:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 21,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "437:7:0",
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
                "id": 24,
                "name": "buyerAddr",
                "nodeType": "VariableDeclaration",
                "scope": 31,
                "src": "484:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 23,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "484:7:0",
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
                "id": 26,
                "name": "tradingPrice",
                "nodeType": "VariableDeclaration",
                "scope": 31,
                "src": "530:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 25,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "530:4:0",
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
                "id": 28,
                "name": "timestamp",
                "nodeType": "VariableDeclaration",
                "scope": 31,
                "src": "557:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 27,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "557:4:0",
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
                "id": 30,
                "name": "isTradingComplete",
                "nodeType": "VariableDeclaration",
                "scope": 31,
                "src": "581:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 29,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "581:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "tradingData",
            "nodeType": "StructDefinition",
            "scope": 193,
            "src": "333:277:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 34,
            "name": "tradingDatas",
            "nodeType": "VariableDeclaration",
            "scope": 193,
            "src": "616:33:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_tradingData_$31_storage_$dyn_storage",
              "typeString": "struct GeneralMeeting.tradingData[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 32,
                "name": "tradingData",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 31,
                "src": "616:11:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_tradingData_$31_storage_ptr",
                  "typeString": "struct GeneralMeeting.tradingData"
                }
              },
              "id": 33,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "616:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_tradingData_$31_storage_$dyn_storage_ptr",
                "typeString": "struct GeneralMeeting.tradingData[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 53,
              "nodeType": "Block",
              "src": "702:121:0",
              "statements": [
                {
                  "assignments": [
                    40
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 40,
                      "name": "corpAddr",
                      "nodeType": "VariableDeclaration",
                      "scope": 54,
                      "src": "712:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 39,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "712:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 42,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 41,
                    "name": "_corpAddr",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 36,
                    "src": "731:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "712:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 47,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 43,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "750:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 45,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 44,
                        "name": "corpAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40,
                        "src": "762:8:0",
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
                      "src": "750:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 46,
                      "name": "shareOfCompany",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "774:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "750:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 48,
                  "nodeType": "ExpressionStatement",
                  "src": "750:38:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 51,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 49,
                      "name": "shareOfCompany",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "798:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 50,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "815:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "798:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 52,
                  "nodeType": "ExpressionStatement",
                  "src": "798:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 54,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "initShares",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 37,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36,
                  "name": "_corpAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "676:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "676:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "675:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 38,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "702:0:0"
            },
            "scope": 193,
            "src": "656:167:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 63,
              "nodeType": "Block",
              "src": "877:37:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 61,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 59,
                      "name": "ethTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12,
                      "src": "887:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 60,
                      "name": "_ethTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "898:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "887:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 62,
                  "nodeType": "ExpressionStatement",
                  "src": "887:20:0"
                }
              ]
            },
            "documentation": null,
            "id": 64,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setEthTaker",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56,
                  "name": "_ethTaker",
                  "nodeType": "VariableDeclaration",
                  "scope": 64,
                  "src": "850:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "850:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "849:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "877:0:0"
            },
            "scope": 193,
            "src": "829:85:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 78,
              "nodeType": "Block",
              "src": "999:77:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 70,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 67,
                      "name": "balance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14,
                      "src": "1009:7:0",
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
                        "id": 68,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 265,
                        "src": "1019:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 69,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1019:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1009:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 71,
                  "nodeType": "ExpressionStatement",
                  "src": "1009:19:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 73,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 265,
                          "src": "1050:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 74,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1050:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 75,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14,
                        "src": "1061:7:0",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 72,
                      "name": "Sended",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "1043:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 76,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1043:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77,
                  "nodeType": "EmitStatement",
                  "src": "1038:31:0"
                }
              ]
            },
            "documentation": null,
            "id": 79,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "sending",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "981:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "999:0:0"
            },
            "scope": 193,
            "src": "965:111:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 89,
              "nodeType": "Block",
              "src": "1193:45:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 85,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 265,
                          "src": "1221:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 86,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1221:9:0",
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
                        "id": 82,
                        "name": "ethTaker",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12,
                        "src": "1203:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 84,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1203:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 87,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1203:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 88,
                  "nodeType": "ExpressionStatement",
                  "src": "1203:28:0"
                }
              ]
            },
            "documentation": null,
            "id": 90,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1175:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 81,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1193:0:0"
            },
            "scope": 193,
            "src": "1158:80:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 167,
              "nodeType": "Block",
              "src": "1393:539:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 100,
                              "name": "ownedShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "1411:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 102,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 101,
                              "name": "_sellerAddr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 92,
                              "src": "1423:11:0",
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
                            "src": "1411:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 103,
                            "name": "_tradingShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 94,
                            "src": "1439:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1411:42:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 107,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 105,
                            "name": "_tradingShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 94,
                            "src": "1457:14:0",
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
                            "id": 106,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1475:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1457:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1411:65:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 99,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        268,
                        269
                      ],
                      "referencedDeclaration": 268,
                      "src": "1403:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1403:74:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110,
                  "nodeType": "ExpressionStatement",
                  "src": "1403:74:0"
                },
                {
                  "assignments": [
                    112
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 112,
                      "name": "newTradingData",
                      "nodeType": "VariableDeclaration",
                      "scope": 168,
                      "src": "1487:33:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_tradingData_$31_memory_ptr",
                        "typeString": "struct GeneralMeeting.tradingData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 111,
                        "name": "tradingData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 31,
                        "src": "1487:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$31_storage_ptr",
                          "typeString": "struct GeneralMeeting.tradingData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 123,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "_tradingShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 94,
                        "src": "1535:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 115,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "1551:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 116,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 265,
                          "src": "1564:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 117,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1564:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 118,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 265,
                          "src": "1576:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 119,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1576:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 120,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 267,
                        "src": "1587:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1592:5:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
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
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 113,
                      "name": "tradingData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31,
                      "src": "1523:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_tradingData_$31_storage_ptr_$",
                        "typeString": "type(struct GeneralMeeting.tradingData storage pointer)"
                      }
                    },
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1523:75:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_tradingData_$31_memory",
                      "typeString": "struct GeneralMeeting.tradingData memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1487:111:0"
                },
                {
                  "assignments": [
                    125
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125,
                      "name": "tradingIdx",
                      "nodeType": "VariableDeclaration",
                      "scope": 168,
                      "src": "1608:15:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 124,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1608:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 130,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 128,
                        "name": "newTradingData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 112,
                        "src": "1644:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$31_memory_ptr",
                          "typeString": "struct GeneralMeeting.tradingData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_tradingData_$31_memory_ptr",
                          "typeString": "struct GeneralMeeting.tradingData memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 126,
                        "name": "tradingDatas",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34,
                        "src": "1626:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_tradingData_$31_storage_$dyn_storage",
                          "typeString": "struct GeneralMeeting.tradingData storage ref[] storage ref"
                        }
                      },
                      "id": 127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1626:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_tradingData_$31_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct GeneralMeeting.tradingData storage ref) returns (uint256)"
                      }
                    },
                    "id": 129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1626:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1608:51:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 132,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "1681:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 131,
                      "name": "setEthTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 64,
                      "src": "1669:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1669:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 134,
                  "nodeType": "ExpressionStatement",
                  "src": "1669:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 135,
                      "name": "sending",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "1703:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1703:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "1703:9:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 138,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "1722:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 140,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 139,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "1734:11:0",
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
                      "src": "1722:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 141,
                      "name": "_tradingShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 94,
                      "src": "1750:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1722:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 143,
                  "nodeType": "ExpressionStatement",
                  "src": "1722:42:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 149,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 144,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "1774:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 147,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 145,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 265,
                          "src": "1786:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1786:10:0",
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
                      "src": "1774:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 148,
                      "name": "_tradingShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 94,
                      "src": "1801:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1774:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 150,
                  "nodeType": "ExpressionStatement",
                  "src": "1774:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 151,
                      "name": "transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "1825:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 152,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1825:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 153,
                  "nodeType": "ExpressionStatement",
                  "src": "1825:10:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 154,
                          "name": "tradingDatas",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34,
                          "src": "1845:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_tradingData_$31_storage_$dyn_storage",
                            "typeString": "struct GeneralMeeting.tradingData storage ref[] storage ref"
                          }
                        },
                        "id": 158,
                        "indexExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 157,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 155,
                            "name": "tradingIdx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 125,
                            "src": "1858:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 156,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1869:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "1858:12:0",
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
                        "src": "1845:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$31_storage",
                          "typeString": "struct GeneralMeeting.tradingData storage ref"
                        }
                      },
                      "id": 159,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "isTradingComplete",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 30,
                      "src": "1845:44:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 160,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1892:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1845:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 162,
                  "nodeType": "ExpressionStatement",
                  "src": "1845:51:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 163,
                      "name": "tradingIdx",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125,
                      "src": "1913:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 164,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1924:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1913:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 98,
                  "id": 166,
                  "nodeType": "Return",
                  "src": "1906:19:0"
                }
              ]
            },
            "documentation": null,
            "id": 168,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addTradingData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 95,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92,
                  "name": "_sellerAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "1322:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 91,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1322:7:0",
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
                  "id": 94,
                  "name": "_tradingShares",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "1343:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1343:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1321:42:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 98,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 97,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "1387:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 96,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1387:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1386:6:0"
            },
            "scope": 193,
            "src": "1298:634:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 179,
              "nodeType": "Block",
              "src": "2322:47:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 175,
                      "name": "ownedShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "2339:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 177,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 176,
                      "name": "_ownerAddr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 170,
                      "src": "2351:10:0",
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
                    "src": "2339:23:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 174,
                  "id": 178,
                  "nodeType": "Return",
                  "src": "2332:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 180,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwnedShares",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 170,
                  "name": "_ownerAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 180,
                  "src": "2276:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 169,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2276:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2275:20:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 174,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 173,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 180,
                  "src": "2317:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 172,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2317:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2316:6:0"
            },
            "scope": 193,
            "src": "2252:117:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 187,
              "nodeType": "Block",
              "src": "2430:38:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 185,
                    "name": "shareOfCompany",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 10,
                    "src": "2447:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 184,
                  "id": 186,
                  "nodeType": "Return",
                  "src": "2440:21:0"
                }
              ]
            },
            "documentation": null,
            "id": 188,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getShareOfCompany",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 181,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2401:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 183,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 188,
                  "src": "2424:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 182,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2424:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2423:6:0"
            },
            "scope": 193,
            "src": "2375:93:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 191,
              "nodeType": "Block",
              "src": "2508:2:0",
              "statements": []
            },
            "documentation": null,
            "id": 192,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "sendEth",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 189,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2490:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 190,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2508:0:0"
            },
            "scope": 193,
            "src": "2474:36:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 194,
        "src": "60:2452:0"
      }
    ],
    "src": "0:2513:0"
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
      "transactionHash": "0x86bcc59beb465e9b80091daa36fc042d67ee2c86c1d638373b66a1113ce2a9f8"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-13T07:02:23.077Z"
}