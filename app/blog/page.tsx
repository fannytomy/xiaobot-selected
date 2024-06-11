import { BlogPosts } from '@/components/posts'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: '小报童专栏精选导航站 | Blog',
  description: '小报童专栏精选导航站 blog.',
  keywords: '小报童, 小报童精选, 小报童专栏, 小报童导航, 小报童导航站, 小报童专栏精选导航站'
}

export default function Page() {
  return (
    <section className="bg-gray-100 h-screen">
      <Nav />
      <h1 className="flex mx-auto lg:max-w-3xl md:max-w-xl text-3xl font-extrabold text-black mb-12 mt-12">Blog</h1>
      <BlogPosts />
      <Footer />
    </section>
  )
}
