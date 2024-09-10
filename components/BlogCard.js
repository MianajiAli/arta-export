import React from 'react';

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white p-4 shadow rounded cursor-pointer">
      <h3 className="text-lg font-semibold">{blog.title}</h3>
      <p className="text-gray-600">{blog.summary}</p>
    </div>
  );
}
