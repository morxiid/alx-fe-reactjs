import { useQuery } from 'react-query'
import { FaSpinner, FaSync } from 'react-icons/fa'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    'posts',
    fetchPosts,
    {
      staleTime: 10000, // Data stays fresh for 10 seconds
      cacheTime: 60000, // Cache persists for 1 minute
    }
  )

  if (isLoading) {
    return (
      <div className="loading">
        <FaSpinner className="spinner" /> Loading posts...
      </div>
    )
  }

  if (isError) {
    return <div className="error">Error: {error.message}</div>
  }

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h1>Posts</h1>
        <button onClick={() => refetch()} disabled={isFetching}>
          <FaSync className={isFetching ? 'spinner' : ''} />{' '}
          {isFetching ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      
      <div className="posts-list">
        {data.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>Post ID: {post.id}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostsComponent