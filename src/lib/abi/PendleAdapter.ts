export const pendleAdapterAbi = [
  {
    inputs: [
      {
        name: '_asset',
        type: 'address',
      },
      {
        name: '_pendleRouter',
        type: 'address',
      },
      {
        name: '_pendleRouterStatic',
        type: 'address',
      },
      {
        name: '_pendleMarket',
        type: 'address',
      },
      {
        name: '_pendleOracle',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'maxWithdraw',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxDeposit',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalAssets',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'asset_amount',
        type: 'uint256',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'asset_amount',
        type: 'uint256',
      },
      {
        name: 'pregen_info',
        type: 'bytes',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'asset_amount',
        type: 'uint256',
      },
      {
        name: 'withdraw_to',
        type: 'address',
      },
    ],
    name: 'withdraw',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'asset_amount',
        type: 'uint256',
      },
      {
        name: 'withdraw_to',
        type: 'address',
      },
      {
        name: 'pregen_info',
        type: 'bytes',
      },
    ],
    name: 'withdraw',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'claimant',
        type: 'address',
      },
    ],
    name: 'claimRewards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'abi_helper',
    outputs: [
      {
        components: [
          {
            name: 'assumed_asset_amount',
            type: 'uint256',
          },
          {
            name: 'mint_returns',
            type: 'uint256',
          },
          {
            name: 'spot_returns',
            type: 'uint256',
          },
          {
            components: [
              {
                name: 'guessMin',
                type: 'uint256',
              },
              {
                name: 'guessMax',
                type: 'uint256',
              },
              {
                name: 'guessOffchain',
                type: 'uint256',
              },
              {
                name: 'maxIteration',
                type: 'uint256',
              },
              {
                name: 'eps',
                type: 'uint256',
              },
            ],
            name: 'approx_params_swapExactYtForPt',
            type: 'tuple',
          },
          {
            components: [
              {
                name: 'guessMin',
                type: 'uint256',
              },
              {
                name: 'guessMax',
                type: 'uint256',
              },
              {
                name: 'guessOffchain',
                type: 'uint256',
              },
              {
                name: 'maxIteration',
                type: 'uint256',
              },
              {
                name: 'eps',
                type: 'uint256',
              },
            ],
            name: 'approx_params_swapExactTokenForPt',
            type: 'tuple',
          },
        ],
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'asset_amount',
        type: 'uint256',
      },
    ],
    name: 'generate_pregen_info',
    outputs: [
      {
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'managed_tokens',
    outputs: [
      {
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const
