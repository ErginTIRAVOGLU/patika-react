import React from "react";
import PropTypes from "prop-types"

function User(props) {
  // function User({isLoggedIn, adi, yasi, friends}) {
  return (
    <div>
      {props.isLoggedIn
        ? `User :Adı : ${props.adi} Yaşı: ${props.yasi} (digerYasi:${props.digerYasi}) IsLoggedIn: ${props.isLoggedIn}`
        : " Giriş Yapılmadı"}
      {props.friends.map((friend, index) => (
        <div key={index}>
          {index}-{friend}
        </div>
      ))}
    <br />
      {props.otherFriends.map((friend) => (
        <div key={friend.id}>
          {friend.id}-{friend.name}
        </div>
      ))}
    <br />
      {props.otherFriends.map((friend) => {
        const x = friend.id * 2;
        return (
          <div key={friend.id}>
            {friend.id}-{x}--{friend.name}
          </div>
        );
      })}
    </div>
  );
}

User.propTypes={
    adi:PropTypes.string,
    yasi:PropTypes.number,
    isLoggedIn:PropTypes.bool
}
export default User;
