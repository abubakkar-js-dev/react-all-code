
const Post = ({post}) => {
    const {userId,title,body:description} = post;
  return (
    <div className="post">
        <h3>User id: {userId}</h3>
        <h2>Title: {title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Post