import 'regenerator-runtime/runtime';
import Web3 from "web3";
import BigNumber from "bignumber.js";

const api = require('etherscan-api').init('SH7KH1W76UYTXUJ2WJZQIYKEDB2BNSGXSY');

async function loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
  }
}

async function loadContract() {
  return await new window.web3.eth.Contract([
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ], '0xc03841b5135600312707d39eb2af0d2ad5d51a91');
}

async function printTotalSupply() {
  const totalSupplyToken = await window.contract.methods.totalSupply().call();
  document.getElementById('supply').innerHTML = uint256ToToInt(totalSupplyToken).toFixed(0);
}

async function currentMonthAPY() {
  // last month burned

  var lastMonthBurn = 90924;
  document.getElementById('currentPool').innerHTML = lastMonthBurn;
  // current staked
  // https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xc03841b5135600312707d39eb2af0d2ad5d51a91&address=0x3c1738eb90405c9806b49a01c14d220b1e61657c&tag=latest&apikey=SH7KH1W76UYTXUJ2WJZQIYKEDB2BNSGXSY
  var currentStaked = api.account.tokenbalance(
    '0x3c1738eb90405c9806b49a01c14d220b1e61657c',
    '',
    '0xc03841b5135600312707d39eb2af0d2ad5d51a91' // bskt contract address
  );
  var currentBurned = api.account.tokenbalance(
    '0x9eabec9576a82036540988eb67407de15aa66d31',
    '',
    '0xc03841b5135600312707d39eb2af0d2ad5d51a91' // bskt contract address
  );

  Promise.all([currentStaked,currentBurned]).then(function (valArray) {
    let currentPayback = lastMonthBurn;
    let currentStacking = uint256ToToInt(valArray[0].result);
    const futureApy = (currentPayback / currentStacking / daysInCurrentMonth()) * 365;
    const futureApyPercentage = Number(futureApy * 100).toFixed(2);
    document.getElementById('current').innerHTML = '~ ' + futureApyPercentage + '%';
    document.getElementById('payback').innerHTML = uint256ToToInt(valArray[1].result).plus(50000).toFixed(0).toLocaleString();
  });


  // ((last month burned / current staked) / 30) * 365 = estimated next month APY
}

async function lpApy() {

  // lp pool size
  var lpPool = api.account.tokenbalance(
    '0x9fa6bd7c0250231b746c7adbfd039ce73c847a6d',
    '',
    '0x1d470e0e3dffbba05e4f56541416a69574675889' // bskt/eth lp contract address
  );

  Promise.all([lpPool]).then(function (valArray) {
    let dailyReward = 10000;
    let currentLp = uint256ToToInt(valArray[0].result);
    const lpApy = (dailyReward / currentLp) * 365;
    const futureLpApyPercentage = Number(lpApy * 100).toFixed(2);
    document.getElementById('lppool').innerHTML = currentLp;
    document.getElementById('lpapy').innerHTML = '10000 bskt';
  });


  // ((last month burned / current staked) / 30) * 365 = estimated next month APY
}

function daysInCurrentMonth() {
  var dt = new Date();
  var month = dt.getMonth();
  var year = dt.getFullYear();
  return new Date(year, month, 0).getDate();
}

async function nextMonthAPY() {
  var currentBurned = api.account.tokenbalance(
    '0x9eabec9576a82036540988eb67407de15aa66d31',
    '',
    '0xc03841b5135600312707d39eb2af0d2ad5d51a91' // bskt contract address
  );
  // current burned
  // https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xc03841b5135600312707d39eb2af0d2ad5d51a91&address=0x9eabec9576a82036540988eb67407de15aa66d31&tag=latest&apikey=SH7KH1W76UYTXUJ2WJZQIYKEDB2BNSGXSY

  var currentStaked = api.account.tokenbalance(
    '0x3c1738eb90405c9806b49a01c14d220b1e61657c',
    '',
    '0xc03841b5135600312707d39eb2af0d2ad5d51a91' // bskt contract address
  );
  // current staked
  // https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xc03841b5135600312707d39eb2af0d2ad5d51a91&address=0x3c1738eb90405c9806b49a01c14d220b1e61657c&tag=latest&apikey=SH7KH1W76UYTXUJ2WJZQIYKEDB2BNSGXSY

  Promise.all([currentBurned, currentStaked]).then(function (valArray) {
    let currentPayback = uint256ToToInt(valArray[0].result);
    let currentStacking = uint256ToToInt(valArray[1].result);
    var a = new Date();
    var r = a.getDate();
    var relativePayback = ((currentPayback / r) * daysInCurrentMonth()) + 50000;

    document.getElementById('relativeEstimated').innerHTML = '~ ' + calculate(relativePayback, currentStacking) + '%';
  });
  // ((current burned / current staked) / 30) * 365 = estimated next month APY
}

function calculate(currentPayback, currentStacking) {
  const futureApy = (currentPayback / currentStacking / daysInCurrentMonth()) * 365;
  return Number(futureApy * 100).toFixed(2);
}

async function getCurrentAccount() {
  const accounts = await window.web3.eth.getAccounts();
  document.getElementById('connect').innerHTML = accounts[0].substring(0,19);
  var supply = api.account.tokenbalance(
    accounts[0],
    '',
    '0xc03841b5135600312707d39eb2af0d2ad5d51a91' // bskt contract address
    //'0x7777777777697cfeecf846a76326da79cc606517' // xsigma contract address
  );
  supply.then(function (result) {
    let tokens = uint256ToToInt(result.result);
    if (tokens.gt(0)) {
      document.getElementById('tokens').innerHTML = tokens.toFixed(2) + ' BSKT';
      nextMonthAPY();
    }else{
      document.getElementById('relativeEstimated').innerHTML = 'add BSKT to unlock';
      //nextMonthAPY();
    }
  })
}


async function load() {
  //await loadWeb3();
  //window.contract = await loadContract();
  //await printTotalSupply();
  await currentMonthAPY();
  await lpApy()
  document.getElementById("connect").onclick = function () {
    loadWeb3();
    window.contract = loadContract();
    getCurrentAccount();
  };
}

function uint256ToToInt(token) {
  return new BigNumber(token).shiftedBy(-18);
}

load();
