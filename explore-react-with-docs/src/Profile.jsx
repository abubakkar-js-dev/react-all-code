import './Profile.css'
const Profile = () => {
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
      };
  return (
    <div>
        <h2>{user.name}</h2>
        <img
        style={{
            width: user.imageSize,
            height: user.imageSize,
        }}
        className="avatar"
        src={user.imageUrl}
        alt= {`Photo of ${user.name}`}/>
    </div>
  )
}

export default Profile