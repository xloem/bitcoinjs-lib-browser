// from https://github.com/bitcoinjs/bitcoinjs-lib/issues/965#issuecomment-363945639 @SuperHenkie

var bitcoin_js = require('bitcoinjs-lib')
//bitcoin_js.bigi = require('bigi') // not available?
bitcoin_js.Buffer = require('safe-buffer').Buffer
module.exports = bitcoin_js
