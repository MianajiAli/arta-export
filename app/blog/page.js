import Link from 'next/link';
import BlogCard from '@/components/BlogCard';

export default function Page() {
  const blogs = [
    {
      url: "blog1-url",
      summary: "This is the first blog summary.",
      title: "First Blog"
    },
    {
      url: "/blog/blog2",
      summary: "This is the second blog summary.",
      title: "Second Blog"
    },
    {
      url: "blog3-url",
      summary: "This is the third blog summary.",
      title: "Third Blog"
    },
    {
      url: "blog4-url",
      summary: "This is the fourth blog summary.",
      title: "Fourth Blog"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-10/12 pt-10 mx-auto">
      {blogs.map((blog, index) => (
        <div key={index}>
          <Link href={blog.url}>
            <BlogCard blog={blog} />
          </Link>
        </div>
      ))}
    </div>
  );
}
