# Fito DApp Prototype

## Prerequsite
 - OS: Linux or Mac OS
 - NPM : https://nodejs.org
 - Git : https://git-scm.com
 - Ganache : https://truffleframework.com/ganache
 - Truffle : https://truffleframework.com/truffle
 - (Optional) Simple Web server with Python : https://python.org
 - **Must not run without Metamask**

 ## Command Line
  - Code clonning
```shell
git clone https://github.com/tooget/Fito.git
```
  - Ganache Execution
  - Move to /fito.ga
```shell
cd Fito/fito.ga
```
  - Solidity Deployment
```shell
truffle compile
truffle migrate --network development
```
  > make sure the port 7545 and `truffle.js` settings.
  - Run Webserver
```shell
python3 -m http.server
```
  - Run Developer Mode in Chrome Browser
  - Initalize a corporate address on a deployed contract
```javascript
FitoContract.setCorporateAddr(web3.eth.accounts[0],{gas:200000})
```
  > There're `invalid address` problems on Chrome
  > - make sure not to run Metamask
  > - press `User1` on a browser and retry it.
  - Initalize to issue shares.
```javascript
FitoContract.initSharesOfCorporate(900000,web3.eth.accounts[0])
```
