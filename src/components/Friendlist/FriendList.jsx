import friends from '../User/friends.json'
import css from '../Friendlist/FriendList.module.css'
import clsx from 'clsx';

const FriendList = ({ friends }) => (
    <ul className={css.friend_list}>

        {friends.map(friend => (
        <li className={css.item} key={friend.id}>
            <span className={clsx(css.status, !friend.isOnline && css.isOffline)}></span>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
        </li>
        ))}
    
    </ul>
);

export const FriendListApp = () => (
    <FriendList friends={friends} />
);