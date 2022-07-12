import AppLayout from '@/components/Layouts/AppLayout'
import { useAuth } from '@/hooks/auth'
import Head from 'next/head'

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://51.83.130.70:3000/api/posts`)
    const posts = await res.json()
  
    // Pass data to the page via props
    return { props: { posts } }
}

const Post = ( { posts } ) => {
    useAuth({ middleware: 'guest' })
    
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Poczta
                </h2>
            }>

            <Head>
                <title>Social Swing Manager</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                          Poczta
                          <div className="posts">
                            { posts.map((post) => (
                                <div key={post.id} className='mb-10'>
                                    <h3>{post.author}</h3>
                                    <p>{post.content}</p>
                                </div>
                            )) }
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Post
