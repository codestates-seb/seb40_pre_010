import React from 'react';
const UserCard = (props) => {
  return (
    <div className="as-end s-user-card s-user-card__highlighted">
      <time className="s-user-card--time">{props.variation} min ago</time>
      <a href="..." className="s-avatar s-avatar__32 s-user-card--avatar">
        <img className="s-avatar--image" src={props.pic} alt="profile" />
      </a>
      <div className="s-user-card--info">
        <a href="…" className="s-user-card--link">
          {props.author}
        </a>
        <ul className="s-user-card--awards">
          <li className="s-user-card--rep">
            {Number.isInteger(props.variation) ? props.variation * 500 : null}
          </li>
          <li className="s-award-bling s-award-bling__gold">
            {props.variation}
          </li>
          <li className="s-award-bling s-award-bling__silver">
            {props.variation}
          </li>
          <li className="s-award-bling s-award-bling__bronze">
            {props.variation}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default UserCard;
