require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index return stick promote hover praise army gasp'; 
let testAccounts = [
"0x8e0d248b50a36af248ce41f3276b664fcc01ccccc37f2ca2da35b2bb608b9861",
"0x9e976dee83daa66e2bb2c0648173e79c2196518f900e5f36ba0b79f18b76994a",
"0x6e36c2e2d102316e58dd5d19010c3aa68626007c16d8f33a23695171c6824a89",
"0xaa25b47a7defa3a364d0068694ff4c18e93ec7d097d45fcc99304516083af2c6",
"0x6c948414caf822924903f25011c50ba12f59e1f230624db31fedfa6eaa88660f",
"0x42df29c0a04a0b4f90361bb787bf5189548af489d88109589d359d5c1a5c9df0",
"0x569cdb29722e852fb8d3d9e4740b243c03a91ae1383a722e68358b6de67e545c",
"0x6f9b2d392849058da5070913ce337aff33914b89ff41acf6a68d72e403d4f6de",
"0x8e084eb974b6c19fbc2e402be2eb7c33ce7a00edfcacd3606598fc18e92b17f5",
"0x5d3cf7274efefdf5045517346019c981f2ad472bcbf6560ad204e45aba45b93d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


