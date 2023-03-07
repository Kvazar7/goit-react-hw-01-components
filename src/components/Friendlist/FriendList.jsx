import friends from '../User/friends.json'

const FriendList = ({ friends }) => (
    <ul className="friend-list">

        {friends.map(friend => (
        <li className="item" key={friend.id}>
            <span className={friend.isOnline.toString()}></span>
        <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
        </li>
        ))}
    
    </ul>
);

export const FriendListApp = () => (
    <FriendList friends={friends} />
);