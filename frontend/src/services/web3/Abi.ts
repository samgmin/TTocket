import { AbiItem } from "web3-utils";

export const contractABI : AbiItem[] = [
  {
    "inputs": [],
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
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
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
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
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
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
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
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
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
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
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
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_performId",
        "type": "uint16"
      },
      {
        "internalType": "string",
        "name": "_title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "uint16",
        "name": "_maxSeat",
        "type": "uint16"
      },
      {
        "internalType": "string",
        "name": "_location",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minute",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_poster",
        "type": "string"
      },
      {
        "internalType": "uint16",
        "name": "_performYear",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "_performMonth",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "_performDay",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "_performHour",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "_performMinute",
        "type": "uint16"
      }
    ],
    "name": "createPerform",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "performId",
        "type": "uint16"
      },
      {
        "internalType": "string",
        "name": "userName",
        "type": "string"
      },
      {
        "internalType": "uint16",
        "name": "seatNum",
        "type": "uint16"
      }
    ],
    "name": "createTicket",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint16",
        "name": "performId",
        "type": "uint16"
      }
    ],
    "name": "cancleMyTicket",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "performId",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "seatNum",
        "type": "uint16"
      },
      {
        "internalType": "string",
        "name": "userName",
        "type": "string"
      }
    ],
    "name": "buyCanceledTicket",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "performId",
        "type": "uint16"
      }
    ],
    "name": "getNowRefundAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "subtitle",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "content",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "color",
        "type": "string"
      }
    ],
    "name": "insertTicketDiary",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint16",
        "name": "performId",
        "type": "uint16"
      }
    ],
    "name": "getTicketDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string[]",
            "name": "behinds",
            "type": "string[]"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "subtitle",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "content",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "color",
                "type": "string"
              }
            ],
            "internalType": "struct TicketDTO.Diary",
            "name": "diary",
            "type": "tuple"
          }
        ],
        "internalType": "struct TicketDTO.TicketDetailReturn",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "performId",
        "type": "uint16"
      },
      {
        "internalType": "string",
        "name": "behindAddress",
        "type": "string"
      }
    ],
    "name": "insertPerformBehind",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "performId",
        "type": "uint16"
      }
    ],
    "name": "getBehindList",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getBeforeTicketList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "performPoster",
            "type": "string"
          },
          {
            "internalType": "uint16",
            "name": "performId",
            "type": "uint16"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "userName",
            "type": "string"
          },
          {
            "internalType": "uint16",
            "name": "seatNum",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "status",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performYear",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performMonth",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performDay",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performHour",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performMinute",
            "type": "uint16"
          }
        ],
        "internalType": "struct TicketDTO.TicketInfo[]",
        "name": "",
        "type": "tuple[]"
      },
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getAfterTicketList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "performPoster",
            "type": "string"
          },
          {
            "internalType": "uint16",
            "name": "performId",
            "type": "uint16"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "userName",
            "type": "string"
          },
          {
            "internalType": "uint16",
            "name": "seatNum",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "status",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performYear",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performMonth",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performDay",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performHour",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performMinute",
            "type": "uint16"
          }
        ],
        "internalType": "struct TicketDTO.TicketInfo[]",
        "name": "",
        "type": "tuple[]"
      },
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_performId",
        "type": "uint16"
      }
    ],
    "name": "isOwnerOfPerform",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getTokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getTicketInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "performPoster",
            "type": "string"
          },
          {
            "internalType": "uint16",
            "name": "performId",
            "type": "uint16"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "userName",
            "type": "string"
          },
          {
            "internalType": "uint16",
            "name": "seatNum",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "status",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performYear",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performMonth",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performDay",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performHour",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performMinute",
            "type": "uint16"
          }
        ],
        "internalType": "struct TicketDTO.TicketInfo",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getMinter",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "performId",
        "type": "uint16"
      }
    ],
    "name": "getPerformInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint16",
            "name": "id",
            "type": "uint16"
          },
          {
            "internalType": "address",
            "name": "organizer",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "uint16",
            "name": "maxSeat",
            "type": "uint16"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "poster",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "performTime",
            "type": "uint256"
          },
          {
            "internalType": "uint16",
            "name": "performYear",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performMonth",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performDay",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performHour",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "performMinute",
            "type": "uint16"
          }
        ],
        "internalType": "struct TicketDTO.PerformInfo",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "performId",
        "type": "uint256"
      }
    ],
    "name": "getPerformRefundInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "refundTime14",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "refundTime7",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "refundTime3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "refundTime1",
            "type": "uint256"
          }
        ],
        "internalType": "struct TicketDTO.PerformRefundInfo",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "sendEther",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  }
]