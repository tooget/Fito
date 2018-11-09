var Web3 = require('web3');

module.exports = {
networks: {
    dapp_fito_ga: {
      provider: () => {
        return new Web3.providers.HttpProvider('https://<your-network-node>.kaleido.io', 0, '<your-app-id>', '<your-app-password>');
      },
      network_id: "*",
      gasPrice: 0,
      gas: 4500000
    }
  }
};