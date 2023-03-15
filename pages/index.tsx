import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { PostCard, Categories, PostWidget } from '../components';


{/*import { FeaturedPosts } from '../sections/index';
import { getPosts } from '../services';
 */}

 const posts = [
  {title: 'React Testing', excerpt: 'Learn React Testing'},
  {title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'}

 ]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Allanito Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post) => <PostCard key={post.title} post={post} />)}
        </div>
        
      <div className='lg:col-span-4 col-span-1'>
        <div className='lg:staicky relative top-8'>
        <PostWidget />
        <Categories />
        </div>
      </div>

      </div>

    </div>
  )
}

export default Home

{/*<FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div> */}


  {/*// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  }; */}