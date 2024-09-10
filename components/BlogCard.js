import React from 'react';

export default function BlogCard({ blog }) {

  return (
    <div className="bg-white p-4 shadow rounded-lg cursor-pointer mx-auto">
      <img
        src={blog.imageUrl ?? '/images/default.png'}
        alt={blog.title}

        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg text-text1 font-semibold">{blog.title}</h3>
      <p className="text-text2">{blog.summary}</p>
    </div>
  );
}
