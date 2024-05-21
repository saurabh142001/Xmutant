// pages/api/leaderboardusers.js

export default function handler(req, res) {
    // Sample data
    const users = [
      {
        id: 1,
        name: 'User1',
        walletAddress: '0x1234567890abcdef',
        rewards: '10.5 ETH',
        imgUrl: 'img/nft-aggregator/item-1.jpg',
      },
      {
        id: 2,
        name: 'User2',
        walletAddress: '0xabcdef1234567890',
        rewards: '8.3 ETH',
        imgUrl: 'img/nft-aggregator/item-2.jpg',
      },
      {
        id: 3,
        name: 'User3',
        walletAddress: '0xa1b2c3d4e5f67890',
        rewards: '7.2 ETH',
        imgUrl: 'img/nft-aggregator/item-3.jpg',
      },
      {
        id: 4,
        name: 'User4',
        walletAddress: '0x0987654321fedcba',
        rewards: '5.1 ETH',
        imgUrl: 'img/nft-aggregator/item-4.jpg',
      },
      {
        id: 5,
        name: 'User5',
        walletAddress: '0xfedcba0987654321',
        rewards: '3.8 ETH',
        imgUrl: 'img/nft-aggregator/item-5.jpg',
      },
    ];
  
    res.status(200).json(users);
  }
  