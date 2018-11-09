# Connect pet-shop-tutorial to Kaleido geth/PoA private network

 - Reference : https://steemit.com/etherum/@dongshik/ethereum-pet-shop-and-truffle

## Sequences
 1. CMD : `truffle unbox pet-shop`
 2. Create contracts/Adoption.sol
 3. Create migrations/2_deploy_contracts.js
    - _Populate the directories_, https://console.kaleido.io/docs/docs/truffle/
 4. Create test/TestAdoption.sol
 5. Modify App.js web3 contract interaction functions
 6. Modify truffle.js with App Credentials from KALEIDO
    - _Configure for your network_, https://console.kaleido.io/docs/docs/truffle/
 7. Modify App.js Web3.providers with App credentials
    - Same as _Configure for your network_, https://console.kaleido.io/docs/docs/truffle/
 8. Add 6 npm libraries in package.json
    - _Add the web3 modules_, https://console.kaleido.io/docs/docs/truffle/
 9. CMD : `npm install`
    - _Add the web3 modules_, https://console.kaleido.io/docs/docs/truffle/
 10. CMD : `truffle compile`
 11. CMD : `truffle migrate --network dapp_fito_ga`
    - _Deploy the smart contract_, https://console.kaleido.io/docs/docs/truffle/
    - (Optional) create truffle_migrate.sh
 12. CMD : `npm run dev`

## Access to KALEIDO private network via Metamask
  - https://kaleido.io/kaleido-meets-metamask/
  - _Configure for your network_, https://console.kaleido.io/docs/docs/truffle/

## Dockerize
 - dockerfile
```
FROM node:10.13.0-slim
MAINTAINER tooget <tooget@gmailcom>
COPY . /pet-shop-tutorial
WORKDIR /pet-shop-tutorial
RUN npm install
CMD ["npm", "run", "dev"]
EXPOSE 3000
```
 - CMD : `docker build -t <dockerId/images:tag> .`
 - CMD : `docker run -p 80:3000 <dockerId/images:tag>`
 