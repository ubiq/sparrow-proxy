'use strict';

var Web3 = require('web3');
var BigNumber = require('bignumber.js');

var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8588'));

var Response = function() {};

Response.web3 = web3;

Response.getBalance = function(params) {
  return web3.toHex(web3.eth.getBalance(params, 'pending'));
};

Response.gasPrice = function() {
  return web3.toHex(web3.eth.gasPrice);
};

Response.ethCall = function(params) {
  return web3.eth.call(params, 'pending');
};

Response.sendRawTransaction = function(params) {
  return web3.eth.sendRawTransaction(params);
};

Response.sendTransaction = function(params) {
  return web3.eth.sendTransaction();
}

Response.getTransactionCount = function(params) {
  return web3.eth.getTransactionCount(params.data, params.quantity);
};

Response.getTransactionByHash = function(params) {
  return web3.eth.getTransactionByHash(params);
}

Response.getCode = function(params) {
  return web3.eth.getCode(params.data, params.quantity);
}

Response.getEstimatedGas = function(params) {
  return web3.eth.estimateGas(params);
};

Response.blockNumber = function() {
  return web3.toHex(web3.eth.blockNumber);
};

Response.getBlockByNumber = function(params) {
  return web3.eth.getBlock(params.quantity, params.fullTransaction);
};

Response.netVersion = function() {
  return web3.version.network;
};

module.exports = Response;