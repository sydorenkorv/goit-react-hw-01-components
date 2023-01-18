import PropTypes from 'prop-types';
import friends from 'assets/friends';
import FriendListItem from './FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
    const { avatar, name, isOnline, id } = friends;
    
    return (
    <ul className={styles.friendList}>
      {friends.map(item => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </ul>
        )
}


export default FriendList;