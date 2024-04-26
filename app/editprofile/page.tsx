"use client";

import React, { useState } from 'react';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    description: '',
    coverImage: '',
    profileImage: '',
    facebookId: '',
    instagramId: '',
    twitterId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!validateForm()) {
      return;
    }
    // Handle form submission here
    console.log(formData);
  };

  const validateForm = () => {
    // Validation rules
    const usernameRegex = /^[a-zA-Z\s]+$/;
    const descriptionRegex = /^[a-zA-Z\s]+$/;
    const linkRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    // Validation checks
    if (!formData.username.match(usernameRegex)) {
      alert('Please enter a valid username (only alphabets allowed)');
      return false;
    }
    if (!formData.description.match(descriptionRegex)) {
      alert('Please enter a valid description (only alphabets allowed)');
      return false;
    }
    if (formData.facebookId && !formData.facebookId.match(linkRegex)) {
      alert('Please enter a valid Facebook link');
      return false;
    }
    if (formData.instagramId && !formData.instagramId.match(linkRegex)) {
      alert('Please enter a valid Instagram link');
      return false;
    }
    if (formData.twitterId && !formData.twitterId.match(linkRegex)) {
      alert('Please enter a valid Twitter link');
      return false;
    }
    return true;
  };

  const handleCoverImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          coverImage: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profileImage: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* Top half */}
      <div className="w-full h-1/2  flex items-center justify-center">
        {/* Cover image */}
        <div className="bg-gray-200 w-full h-full flex justify-center items-center">
          {/* Cover image content */}
          <div className="flex flex-col items-center">
            <img
              src={formData.coverImage || '/placeholder.jpg'} // Placeholder image source
              alt="Cover"
              className="w-full h-auto max-h-48 object-cover"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverImageUpload}
              className="mt-2"
            />
          </div>
        </div>
      </div>
      {/* Bottom half */}
      <div className="w-full h-1/2 flex">
        {/* Left side */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          {/* Profile image */}
          <div className="bg-gray-100 w-44 h-44 rounded-full border-8 flex justify-center items-center relative m-8 p-8">
            {/* Profile image content */}
            
            <label htmlFor="profile-image-upload" className="cursor-pointer">
              <img
                src={formData.profileImage || '/profile.jpg'} // Placeholder profile image source
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="mr-1 h-4 w-4 fill-jacarta-400 group-hover:fill-white"
            >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </label>
            
          </div>
          <input
              type="file"
              accept="image/*"
              onChange={handleProfileImageUpload}
              className="m-8"
              id="profile-image-upload"
            />
        </div>
        
        {/* Right side */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="facebookId"
              value={formData.facebookId}
              onChange={handleChange}
              placeholder="Facebook ID"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="instagramId"
              value={formData.instagramId}
              onChange={handleChange}
              placeholder="Instagram ID"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="twitterId"
              value={formData.twitterId}
              onChange={handleChange}
              placeholder="Twitter ID"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
