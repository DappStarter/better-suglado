require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet rifle stereo unique gesture casino slot genuine'; 
let testAccounts = [
"0x071cb23ce143ab190ebedbe8ef50df9dd4502d83eaa1a25bef6ecbb4994007da",
"0xcc21c9325e2c932059abede62323bcd34d5cf58da196d9e8f173d0458f24d588",
"0x454d3ebb8eab674b60e91a08d6ad955f0e54d6dec148116c83e8795689bd62a9",
"0x1c6cf139954a8c1e75b1fc9722d86defbe21f39661e444fba6bfaae80daea682",
"0x78695682f23ff07de98452838465a34a56f5440a3ccd49a2e3e80bfa3dc5ef83",
"0x3a42434aaf9fe2c47bb8eed768645e7403b9239792e4d7e8cb1ec34248545e0a",
"0x46f0e08d51966e149216ad8b5baf92ed7953b0a1618ad7d3a0608a2f4591b658",
"0x9f9dd12d046c71f318c70fa69b4bcaf09119cbb2fc4572d6fd29bab4b5185417",
"0x98900411dea998dab2fb6ddd5dafd2e9068e3ad1739d5a9a82839d0778d1a1f3",
"0x3b34e6d52c77be25dd3d504b9cca7a524a4c197993ff8219f5351467377f5ce9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
