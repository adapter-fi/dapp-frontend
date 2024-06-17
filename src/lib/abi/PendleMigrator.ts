export const pendleMigratorAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        name: 'asset',
        type: 'address',
      },
      {
        indexed: true,
        name: 'vault',
        type: 'address',
      },
      {
        indexed: false,
        name: 'vault_shares',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'market',
        type: 'address',
      },
      {
        indexed: false,
        name: 'pt_amount',
        type: 'uint256',
      },
    ],
    name: 'PTMigrated',
    type: 'event',
  },
  {
    inputs: [
      {
        name: '_pendleRouter',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        name: 'market',
        type: 'address',
      },
      {
        name: 'exactPtIn',
        type: 'uint256',
      },
      {
        name: 'asset',
        type: 'address',
      },
      {
        name: 'minTokenOut',
        type: 'uint256',
      },
      {
        components: [
          {
            name: 'limitRouter',
            type: 'address',
          },
          {
            name: 'epsSkipMarket',
            type: 'uint256',
          },
          {
            components: [
              {
                components: [
                  {
                    name: 'salt',
                    type: 'uint256',
                  },
                  {
                    name: 'expiry',
                    type: 'uint256',
                  },
                  {
                    name: 'nonce',
                    type: 'uint256',
                  },
                  {
                    name: 'orderType',
                    type: 'uint8',
                  },
                  {
                    name: 'token',
                    type: 'address',
                  },
                  {
                    name: 'YT',
                    type: 'address',
                  },
                  {
                    name: 'maker',
                    type: 'address',
                  },
                  {
                    name: 'receiver',
                    type: 'address',
                  },
                  {
                    name: 'makingAmount',
                    type: 'uint256',
                  },
                  {
                    name: 'lnImpliedRate',
                    type: 'uint256',
                  },
                  {
                    name: 'failSafeRate',
                    type: 'uint256',
                  },
                  {
                    name: 'permit',
                    type: 'bytes',
                  },
                ],
                name: 'order',
                type: 'tuple',
              },
              {
                name: 'signature',
                type: 'bytes',
              },
              {
                name: 'makingAmount',
                type: 'uint256',
              },
            ],
            name: 'normalFills',
            type: 'tuple[]',
          },
          {
            components: [
              {
                components: [
                  {
                    name: 'salt',
                    type: 'uint256',
                  },
                  {
                    name: 'expiry',
                    type: 'uint256',
                  },
                  {
                    name: 'nonce',
                    type: 'uint256',
                  },
                  {
                    name: 'orderType',
                    type: 'uint8',
                  },
                  {
                    name: 'token',
                    type: 'address',
                  },
                  {
                    name: 'YT',
                    type: 'address',
                  },
                  {
                    name: 'maker',
                    type: 'address',
                  },
                  {
                    name: 'receiver',
                    type: 'address',
                  },
                  {
                    name: 'makingAmount',
                    type: 'uint256',
                  },
                  {
                    name: 'lnImpliedRate',
                    type: 'uint256',
                  },
                  {
                    name: 'failSafeRate',
                    type: 'uint256',
                  },
                  {
                    name: 'permit',
                    type: 'bytes',
                  },
                ],
                name: 'order',
                type: 'tuple',
              },
              {
                name: 'signature',
                type: 'bytes',
              },
              {
                name: 'makingAmount',
                type: 'uint256',
              },
            ],
            name: 'flashFills',
            type: 'tuple[]',
          },
          {
            name: 'optData',
            type: 'bytes',
          },
        ],
        name: 'limit',
        type: 'tuple',
      },
      {
        name: 'vault',
        type: 'address',
      },
      {
        name: 'min_shares',
        type: 'uint256',
      },
      {
        name: 'pregen_info',
        type: 'bytes[]',
      },
    ],
    name: 'migrate',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
