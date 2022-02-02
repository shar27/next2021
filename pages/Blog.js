import { createClient } from 'contentful'
import Posts from '../components/Posts'
import Nav from '../components/Nav'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const res = await client.getEntries({ content_type: "technology" })

  return {
    props: {
      posts: res.items,
    },
    revalidate: 1
  }
}

export default function Blogs({ posts }) {
  console.log(posts)

  return (
  
    <div>
    
    <Nav/>
    <h1 className='display-5 ft-bold  text-center mb-5 mt-5'>Blogs</h1>
      
    <div className='container'>
    <div className="row  d-flex justify-content-center">
      <div className="col col-sm-12 col-md-6 col-lg-6">
      {posts.map(post => (
        <Posts key={post.sys.id} post={post} />
      ))}
      </div>
</div>
     </div>
    </div>
  )
}