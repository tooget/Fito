module.exports = {
  networks: {
    development: {              // Ganache
      host: "localhost",
      port: 7545,
      network_id: "*",
      // gas: 0,               // gas limit. https://truffleframework.com/docs/truffle/reference/configuration
      gasPrice : 0,            // gas price when transactions occured. https://truffleframework.com/docs/truffle/reference/configuration
    }
  }
};
