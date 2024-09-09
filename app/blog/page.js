import Link from 'next/link';
import BlogCard from '@/components/BlogCard'
export default function Page() {
  const blog = {
    url: "w",
    summary: "url",
    url: "url",
    title: "sda"
  }
  return (
    <div>
      <Link href="/blog/blog2">
        salam
      </Link>
      <BlogCard blog={blog} />
    </div>
  );
}
