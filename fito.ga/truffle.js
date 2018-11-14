var Web3 = require('web3');

module.exports = {
networks: {
    dapp_fito_ga: {
      provider: () => {
        return new Web3.providers.HttpProvider('https://k0k0j8s4h0:0UhNW5Fl82OSkrx-S2-nmgqg8kdSMVhgOuRrZu-pCX0@k0idprbzja-k0dsk7yusm-rpc.ap-northeast-2.kaleido.io');
      },
      network_id: "*",
      gasPrice: 0,
      gas: 4500000
    }
  }
};