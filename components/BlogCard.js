import React from 'react';

export default function BlogCard({ blog }) {

  return (
    <div className="bg-primary p-4 shadow rounded-lg cursor-pointer mx-auto">
      <img
        src={blog.imageUrl ?? '/images/person/3.jpg'}
        alt={blog.title}

        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg text-white font-semibold">{blog.title}</h3>
      <p className="text-white">{blog.summary}</p>
    </div>
  );
}
