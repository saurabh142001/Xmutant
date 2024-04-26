"use client";import { useState } from 'react';

const CreateCollectionPage: React.FC = () => {
  const [collectionData, setCollectionData] = useState({
    logo: '',
    name: '',
    description: '',
    category: '',
    blockchain: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCollectionData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle image upload logic
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="container mx-auto p-4 rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-center">Create Collection</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="logo">
            Logo Image
          </label>
          <input
            type="file"
            name="logo"
            id="logo"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 p-2 rounded bg-white shadow-lg focus:outline-none focus:border-blue-500 transition duration-300"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={collectionData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition duration-300 hover:border-blue-500 hover:shadow-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={collectionData.description}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition duration-300 hover:border-blue-500 hover:shadow-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="category">
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            value={collectionData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition duration-300 hover:border-blue-500 hover:shadow-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="blockchain">
            Blockchain
          </label>
          <select
            name="blockchain"
            id="blockchain"
            value={collectionData.blockchain}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition duration-300 hover:border-blue-500 hover:shadow-md"
            required
          >
            <option value="">Select Blockchain</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Binance Smart Chain">Binance Smart Chain</option>
            <option value="Solana">Solana</option>
            <option value="Polygon">Polygon</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 shadow-lg rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
        >
          Create Collection
        </button>
      </form>
    </div>
  );
};

export default CreateCollectionPage;
