# Connection Guide : Truffle project and KALEIDO.io private network
 - truffle tutorial `pet-shop-tutorial`
   - https://steemit.com/etherum/@dongshik/ethereum-pet-shop-and-truffle
 - KALEIDO.io Ethereum/PoA Private Network

## Sequences
```
You should have KALEIDO App Credentials to preceed.
```
 1. CMD : `truffle unbox pet-shop`
 2. Create `contracts/Adoption.sol`
 3. Create `migrations/2_deploy_contracts.js`
    - _**Populate the directories**_, https://console.kaleido.io/docs/docs/truffle/
 4. Create `test/TestAdoption.sol`
 5. Modify `truffle.js` with App Credentials from KALEIDO
    - _**Configure for your network**_, https://console.kaleido.io/docs/docs/truffle/
 6. Modify `App.js` Web3.providers with App credentials
    - Same as _**Configure for your network**_, https://console.kaleido.io/docs/docs/truffle/
 7. Add 6 npm libraries in `package.json`
    - _**Add the web3 modules**_, https://console.kaleido.io/docs/docs/truffle/
 8. CMD : `npm install`
    - _**Add the web3 modules**_, https://console.kaleido.io/docs/docs/truffle/
 9. CMD : `truffle compile`
 10. CMD : `truffle migrate --network dapp_fito_ga`
     - _**Deploy the smart contract**_, https://console.kaleido.io/docs/docs/truffle/
     - (Optional) create `truffle_migrate.sh`
 11. CMD : `npm run dev`

## Access to KALEIDO private network via Metamask
```
New EOA created when metamask connected.
```
Reference : https://kaleido.io/kaleido-meets-metamask/
 - _**Configure for your network**_, https://console.kaleido.io/docs/docs/truffle/

## Dockerize
 - dockerfile
```dockerfile
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
 
## KALEIDO API
```
There might be no ways to access the KALEIDO node directly.
You should use KALEIDO API via curl/jq command cm to control geth or environments.
```
Reference : https://console.kaleido.io/docs/docs/api/
 - Check Region
   ```sh
   curl -X GET -H "$HDR_AUTH" -H "$HDR_CT" "$APIURL/regions" | jq
   ```
 - Check Consortia
   ```sh
   curl -X GET -H "$HDR_AUTH" -H "$HDR_CT" "$APIURL/consortia" | jq
   ```
 - Check All Environments(# of nodes, concensus algorithm etc.,) of a Consortia
   ```sh
   curl -X GET -H "$HDR_AUTH" -H "$HDR_CT" "$APIURL/consortia/{consortia_id}/environments" | jq
   ```
 - Check a network environment of a Consortia
   ```sh
   curl -X GET -H "$HDR_AUTH" -H "$HDR_CT" "$APIURL/consortia/{consortia_id}/environments/{environment_id}" | jq
   ```
 - Check App credentials
   ```sh
   curl -X GET -H "$HDR_AUTH" -H "$HDR_CT" "$APIURL/consortia/{consortia_id}/environments/{environment_id}/appcreds" | jq
   ```
 - Check all deployed Smart Contracts of a Consortia/network
   ```sh
   curl -X GET -H "$HDR_AUTH" -H "$HDR_CT" "$APIURL/ledger/{consortia_id}/{environment_id}/contracts" | jq
   ```
 - Check all EOA of a Consortia/network
   ```sh
   curl -X GET -H "$HDR_AUTH" -H "$HDR_CT" "$APIURL/ledger/{consortia_id}/{environment_id}/addresses/{account_address}" | jq
   ```
 - Add pre-fund ETH to a EOA of a Consortia/network
   ```sh
   curl -X POST -d '{"account":"0x51D91D3128252728a37131713c8d98724BDF744E", "amount":"1000000"}' -H "$HDR_AUTH" -H "$HDR_CT" "$APIURL/consortia/{consortia_id}/environments/{environment_id}/eth/fundaccount" | jq
   ```
