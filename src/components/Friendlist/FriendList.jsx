import PropTypes from "prop-types"; 
import { FriendListItem } from '../FriendListItem/FriendListItem'
import css from '../Friendlist/FriendList.module.css'

export const FriendList = ({ friendList }) => (
    <ul className={css.friend_list}>
        {friendList.map(friend => (
            <FriendListItem
                name={friend.name}
                avatar={friend.avatar}
                key={friend.id}
                isOnline={friend.isOnline}
            />
        ))}
    </ul>
)

FriendList.prototype = {
  friendList: PropTypes.array
}