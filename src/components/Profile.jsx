export default function Profile({ username="Someone", tag="Someone`s tag", location="Somewhere", avatar="https://static.chipdip.ru/images/layout/noimage/230px.png", stats={followers: 0, views: 0, likes: 0} }){
  return(
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" width="250px"/>
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Followers: </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
};
