import React from "react";
import PropTypes from "prop-types";

function User(props) {
  // function User({isLoggedIn, adi, yasi, friends}) {
if(!props.isLoggedIn)
{
    return(
        <div>Giriş yapılmadı hızlı return</div>
    )
}
  return (
    <div>
      {props.address.title} - {props.address.zip}
      <br />
      <br />
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

User.propTypes = {
  adi: PropTypes.string.isRequired,
  yasi: PropTypes.number,
  isLoggedIn: PropTypes.bool,
  friends: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

User.defaultProps ={
    isLoggedIn: true,
    adi:"İsimsiz"
}
export default User;
