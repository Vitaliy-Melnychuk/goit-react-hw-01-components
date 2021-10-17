import PropTypes from "prop-types";
import s from "./Friends.module.css";

export const FriendList = ({ title, friends }) => {
  return (
    <section className={s.friends}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.friendList}>
        {friends.map(({ id, name, avatar, isOnline }) => (
          <li key={id} className={s.item}>
            <span className={isOnline ? s.trueColor : s.falseColor}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  title: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
