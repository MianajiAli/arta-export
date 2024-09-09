// app/blog/page.js
"use client";
import React, { useEffect, useState } from 'react';
import BlogCard from '@/components/BlogCard'; // مسیر کامپوننت BlogCard
import { fetchBlogs } from '@/lib/api'; // مسیر تابع fetchBlogs

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const blogData = await fetchBlogs();
        setBlogs(blogData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const handleCardClick = (blog) => {
    // اینجا برای هدایت به صفحه جزئیات بلاگ، تغییر دهید
    window.location.href = `/blog/${blog.id}`;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2 className="text-center text-2xl font-bold py-4">بلاگ‌ها</h2>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {blogs.length === 0 ? (
          <div>No blogs available</div>
        ) : (
          blogs.map((blog) => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              onClick={handleCardClick} 
            />
          ))
        )}
      </div>
    </div>
  );
}
