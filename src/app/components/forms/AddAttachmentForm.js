"use client";

import React, { useState } from 'react';

const AddAttachmentForm = ({ onSubmit }) => {
  const [attachmentTitle, setAttachmentTitle] = useState('');
  const [attachmentFile, setAttachmentFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', attachmentTitle);
    formData.append('file', attachmentFile);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="attachmentTitle" className="block text-gray-700 font-bold mb-2">
          Attachment Title
        </label>
        <input 
          type="text" 
          id="attachmentTitle" 
          name="attachmentTitle" 
          value={attachmentTitle} 
          onChange={(e) => setAttachmentTitle(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="attachmentFile" className="block text-gray-700 font-bold mb-2">
          Upload Attachment
        </label>
        <input 
          type="file" 
          id="attachmentFile" 
          name="attachmentFile" 
          onChange={(e) => setAttachmentFile(e.target.files[0])} 
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required 
        />
      </div>
      <button 
        type="submit" 
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add Attachment
      </button>
    </form>
  );
};

export default AddAttachmentForm;
