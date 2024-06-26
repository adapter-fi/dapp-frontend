export const adapterVaultAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        name: 'adapter_addr',
        type: 'address',
      },
    ],
    name: 'AdapterAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        name: 'afapter_addr',
        type: 'address',
      },
      {
        indexed: false,
        name: 'final_balance',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'forced',
        type: 'bool',
      },
    ],
    name: 'AdapterRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        name: 'receiver',
        type: 'address',
      },
      {
        indexed: false,
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        name: 'assets',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'shares',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        name: 'assets',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'desired_shares',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'actual_shares',
        type: 'uint256',
      },
    ],
    name: 'SlippageDeposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        name: 'receiver',
        type: 'address',
      },
      {
        indexed: true,
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        name: 'assets',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'shares',
        type: 'uint256',
      },
    ],
    name: 'Withdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        name: 'receiver',
        type: 'address',
      },
      {
        indexed: true,
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        name: 'assets',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'shares',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'actual_assets',
        type: 'uint256',
      },
    ],
    name: 'SlippageWithdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            name: 'adapter',
            type: 'address',
          },
          {
            name: 'ratio',
            type: 'uint256',
          },
        ],
        indexed: false,
        name: 'strategy',
        type: 'tuple[5]',
      },
      {
        indexed: false,
        name: 'proposer',
        type: 'address',
      },
    ],
    name: 'StrategyActivation',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'adapter',
        type: 'address',
      },
      {
        indexed: false,
        name: 'last_value',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'current_value',
        type: 'uint256',
      },
    ],
    name: 'AdapterLoss',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'new_governor',
        type: 'address',
      },
      {
        indexed: true,
        name: 'old_governor',
        type: 'address',
      },
    ],
    name: 'GovernanceChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'name',
        type: 'string',
      },
      {
        indexed: true,
        name: 'symbol',
        type: 'string',
      },
      {
        indexed: false,
        name: 'decimals',
        type: 'uint8',
      },
      {
        indexed: true,
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'VaultDeployed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'new_allocator',
        type: 'address',
      },
      {
        indexed: true,
        name: 'old_allocator',
        type: 'address',
      },
    ],
    name: 'FundsAllocatorChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'new_owner',
        type: 'address',
      },
      {
        indexed: true,
        name: 'old_owner',
        type: 'address',
      },
    ],
    name: 'OwnerChanged',
    type: 'event',
  },
  {
    inputs: [
      {
        name: '_new_owner',
        type: 'address',
      },
    ],
    name: 'replaceOwner',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_new_governance',
        type: 'address',
      },
    ],
    name: 'replaceGovernanceContract',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_new_funds_allocator',
        type: 'address',
      },
    ],
    name: 'replaceFundsAllocator',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'adapter_list',
    outputs: [
      {
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_proposer',
        type: 'address',
      },
      {
        components: [
          {
            name: 'adapter',
            type: 'address',
          },
          {
            name: 'ratio',
            type: 'uint256',
          },
        ],
        name: '_strategies',
        type: 'tuple[5]',
      },
      {
        name: '_min_proposer_payout',
        type: 'uint256',
      },
    ],
    name: 'set_strategy',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_proposer',
        type: 'address',
      },
      {
        components: [
          {
            name: 'adapter',
            type: 'address',
          },
          {
            name: 'ratio',
            type: 'uint256',
          },
        ],
        name: '_strategies',
        type: 'tuple[5]',
      },
      {
        name: '_min_proposer_payout',
        type: 'uint256',
      },
      {
        name: 'pregen_info',
        type: 'bytes[]',
      },
    ],
    name: 'set_strategy',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_adapter',
        type: 'address',
      },
    ],
    name: 'add_adapter',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_adapter',
        type: 'address',
      },
    ],
    name: 'remove_adapter',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_adapter',
        type: 'address',
      },
      {
        name: '_rebalance',
        type: 'bool',
      },
    ],
    name: 'remove_adapter',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_adapter',
        type: 'address',
      },
      {
        name: '_rebalance',
        type: 'bool',
      },
      {
        name: '_force',
        type: 'bool',
      },
    ],
    name: 'remove_adapter',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_adapter',
        type: 'address',
      },
      {
        name: '_rebalance',
        type: 'bool',
      },
      {
        name: '_force',
        type: 'bool',
      },
      {
        name: '_min_assets',
        type: 'uint256',
      },
    ],
    name: 'remove_adapter',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_adapter',
        type: 'address',
      },
      {
        name: '_rebalance',
        type: 'bool',
      },
      {
        name: '_force',
        type: 'bool',
      },
      {
        name: '_min_assets',
        type: 'uint256',
      },
      {
        name: 'pregen_info',
        type: 'bytes[]',
      },
    ],
    name: 'remove_adapter',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_adapterOld',
        type: 'address',
      },
      {
        name: '_adapterNew',
        type: 'address',
      },
    ],
    name: 'swap_adapters',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_adapterOld',
        type: 'address',
      },
      {
        name: '_adapterNew',
        type: 'address',
      },
      {
        name: '_force',
        type: 'bool',
      },
    ],
    name: 'swap_adapters',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_adapterOld',
        type: 'address',
      },
      {
        name: '_adapterNew',
        type: 'address',
      },
      {
        name: '_force',
        type: 'bool',
      },
      {
        name: '_min_assets',
        type: 'uint256',
      },
    ],
    name: 'swap_adapters',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalAssetsCached',
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
    inputs: [],
    name: 'totalReturns',
    outputs: [
      {
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'claimable_yield_fees_available',
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
        name: '_current_assets',
        type: 'uint256',
      },
    ],
    name: 'claimable_yield_fees_available',
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
    name: 'claimable_strategy_fees_available',
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
        name: '_current_assets',
        type: 'uint256',
      },
    ],
    name: 'claimable_strategy_fees_available',
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
    name: 'claimable_all_fees_available',
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
        name: '_current_assets',
        type: 'uint256',
      },
    ],
    name: 'claimable_all_fees_available',
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
    name: 'claim_yield_fees',
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
        name: '_asset_request',
        type: 'uint256',
      },
    ],
    name: 'claim_yield_fees',
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
        name: '_asset_request',
        type: 'uint256',
      },
      {
        name: 'pregen_info',
        type: 'bytes[]',
      },
    ],
    name: 'claim_yield_fees',
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
    inputs: [],
    name: 'claim_strategy_fees',
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
        name: '_asset_request',
        type: 'uint256',
      },
    ],
    name: 'claim_strategy_fees',
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
        name: '_asset_request',
        type: 'uint256',
      },
      {
        name: 'pregen_info',
        type: 'bytes[]',
      },
    ],
    name: 'claim_strategy_fees',
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
    inputs: [],
    name: 'claim_all_fees',
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
        name: '_asset_request',
        type: 'uint256',
      },
    ],
    name: 'claim_all_fees',
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
        name: '_asset_request',
        type: 'uint256',
      },
      {
        name: 'pregen_info',
        type: 'bytes[]',
      },
    ],
    name: 'claim_all_fees',
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
        name: '_asset_amount',
        type: 'uint256',
      },
    ],
    name: 'convertToShares',
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
        name: '_share_amount',
        type: 'uint256',
      },
    ],
    name: 'convertToAssets',
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
        name: '_spender',
        type: 'address',
      },
    ],
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
    inputs: [
      {
        name: '_asset_amount',
        type: 'uint256',
      },
    ],
    name: 'previewDeposit',
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
        name: '_receiver',
        type: 'address',
      },
    ],
    name: 'maxMint',
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
        name: '_share_amount',
        type: 'uint256',
      },
    ],
    name: 'previewMint',
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
        name: '_share_amount',
        type: 'uint256',
      },
      {
        name: '_receiver',
        type: 'address',
      },
    ],
    name: 'mint',
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
        name: '_share_amount',
        type: 'uint256',
      },
      {
        name: '_receiver',
        type: 'address',
      },
      {
        name: 'pregen_info',
        type: 'bytes[]',
      },
    ],
    name: 'mint',
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
        name: '_owner',
        type: 'address',
      },
    ],
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
    inputs: [
      {
        name: '_asset_amount',
        type: 'uint256',
      },
    ],
    name: 'previewWithdraw',
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
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'maxRedeem',
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
        name: '_share_amount',
        type: 'uint256',
      },
    ],
    name: 'previewRedeem',
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
        name: '_share_amount',
        type: 'uint256',
      },
      {
        name: '_receiver',
        type: 'address',
      },
      {
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'redeem',
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
        name: '_share_amount',
        type: 'uint256',
      },
      {
        name: '_receiver',
        type: 'address',
      },
      {
        name: '_owner',
        type: 'address',
      },
      {
        name: 'pregen_info',
        type: 'bytes[]',
      },
    ],
    name: 'redeem',
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
    inputs: [],
    name: 'getCurrentBalances',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
      {
        components: [
          {
            name: 'adapter',
            type: 'address',
          },
          {
            name: 'current',
            type: 'uint256',
          },
          {
            name: 'last_value',
            type: 'uint256',
          },
          {
            name: 'max_deposit',
            type: 'int256',
          },
          {
            name: 'max_withdraw',
            type: 'int256',
          },
          {
            name: 'ratio',
            type: 'uint256',
          },
          {
            name: 'target',
            type: 'uint256',
          },
          {
            name: 'delta',
            type: 'int256',
          },
        ],
        name: '',
        type: 'tuple[5]',
      },
      {
        name: '',
        type: 'uint256',
      },
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
        name: '_target_asset_balance',
        type: 'uint256',
      },
    ],
    name: 'balanceAdapters',
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
        name: '_target_asset_balance',
        type: 'uint256',
      },
      {
        name: '_min_tasset_balance',
        type: 'uint256',
      },
    ],
    name: 'balanceAdapters',
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
        name: '_target_asset_balance',
        type: 'uint256',
      },
      {
        name: '_min_tasset_balance',
        type: 'uint256',
      },
      {
        name: '_withdraw_only',
        type: 'bool',
      },
    ],
    name: 'balanceAdapters',
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
        name: '_target_asset_balance',
        type: 'uint256',
      },
      {
        name: '_min_tasset_balance',
        type: 'uint256',
      },
      {
        name: '_withdraw_only',
        type: 'bool',
      },
      {
        name: 'pregen_info',
        type: 'bytes[]',
      },
    ],
    name: 'balanceAdapters',
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
        name: '_asset_amount',
        type: 'uint256',
      },
      {
        name: '_receiver',
        type: 'address',
      },
    ],
    name: 'deposit',
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
        name: '_asset_amount',
        type: 'uint256',
      },
      {
        name: '_receiver',
        type: 'address',
      },
      {
        name: '_min_shares',
        type: 'uint256',
      },
    ],
    name: 'deposit',
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
        name: '_asset_amount',
        type: 'uint256',
      },
      {
        name: '_receiver',
        type: 'address',
      },
      {
        name: '_min_shares',
        type: 'uint256',
      },
      {
        name: 'pregen_info',
        type: 'bytes[]',
      },
    ],
    name: 'deposit',
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
        name: '_asset_amount',
        type: 'uint256',
      },
      {
        name: '_receiver',
        type: 'address',
      },
      {
        name: '_owner',
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
        name: '_asset_amount',
        type: 'uint256',
      },
      {
        name: '_receiver',
        type: 'address',
      },
      {
        name: '_owner',
        type: 'address',
      },
      {
        name: '_min_assets',
        type: 'uint256',
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
        name: '_asset_amount',
        type: 'uint256',
      },
      {
        name: '_receiver',
        type: 'address',
      },
      {
        name: '_owner',
        type: 'address',
      },
      {
        name: '_min_assets',
        type: 'uint256',
      },
      {
        name: 'pregen_info',
        type: 'bytes[]',
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
        name: '_to',
        type: 'address',
      },
      {
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_from',
        type: 'address',
      },
      {
        name: '_to',
        type: 'address',
      },
      {
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_spender',
        type: 'address',
      },
      {
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_adapter',
        type: 'address',
      },
      {
        name: 'reciepent',
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
    name: 'name',
    outputs: [
      {
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'asset',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'governance',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'funds_allocator',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'arg0',
        type: 'uint256',
      },
    ],
    name: 'adapters',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'current_proposer',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'min_proposer_payout',
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
        name: 'arg0',
        type: 'address',
      },
    ],
    name: 'strategy',
    outputs: [
      {
        components: [
          {
            name: 'ratio',
            type: 'uint256',
          },
          {
            name: 'last_asset_value',
            type: 'uint256',
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
    inputs: [],
    name: 'total_assets_deposited',
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
    name: 'total_assets_withdrawn',
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
    name: 'total_yield_fees_claimed',
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
    name: 'total_strategy_fees_claimed',
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
    name: 'totalSupply',
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
        name: 'arg0',
        type: 'address',
      },
    ],
    name: 'balanceOf',
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
        name: 'arg0',
        type: 'address',
      },
      {
        name: 'arg1',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const
