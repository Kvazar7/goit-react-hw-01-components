import PropTypes from "prop-types"; 
import css from '../FriendListItem/FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ name, avatar, isOnline }) => (
    <li className={css.item}>
        <span className={clsx(css.status, !isOnline && css.isOffline)}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li >
)

FriendListItem.prototype = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.string
}