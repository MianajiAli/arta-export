// components/BlogCard.js
import React from 'react';

export default function BlogCard({ blog, onClick }) {
  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
    // onClick={() => onClick(blog.url)}
    >
      <img
        // src={blog.image}
        alt={blog.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{blog.title}</h3>
        <p className="text-gray-600">{blog.summary}</p>
        <small className="text-gray-400">{blog.date}</small>
      </div>
    </div>
  );
}
