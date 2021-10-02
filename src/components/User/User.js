import React from "react";
import Player from "../Player/Player";
import Teacher from "../Teacher/Teacher";

const User = (props) => {
  const { familiar } = props;

  // 1. Element Variable
  //   let greeting;
  //   if (familiar) {
  //     greeting = <h5>Hello Bondhu How are you?</h5>;
  //   } else {
  //     greeting = <h5>Who the Hell are you? DGM.</h5>;
  //   }

  let greeting;
  if (familiar) {
    greeting = <h5>Hello Friend How are You?</h5>;
  } else {
    greeting = <h5>Who the Hell are you? </h5>;
  }
  //2. ternary operation
  // condition ? (display this part if condition true): (if condition false)

  return (
    <div>
      <div>
        <h2>Greetings</h2>
        {greeting}
      </div>
      <div>
        <h2>Food</h2>
        {familiar ? (
          <h4>Hot Egg with Vegetables </h4>
        ) : (
          <h4>I have no money.</h4>
        )}
      </div>
      <div>
        <h2>a lot of things</h2>
        {familiar ? (
          <div>
            <h3>My Title : Rasel </h3>
            <p>This is a very interesting story</p>
          </div>
        ) : (
          <div>
            <h3>My title: Nothing</h3>
            <p>Door is close</p>
          </div>
        )}
      </div>
      <div>
        <h2>Profession</h2>
        {familiar ? <Teacher /> : <Player />}
      </div>
      <div>
        <h2>Connection</h2>
        {familiar && (
          <div>
            <h5>Hey Can i get your phone number.</h5>
          </div>
        )}
        {familiar && <Player />}

        <div>
          <h2>Share Drink</h2>
          {familiar || <h4>i can drink coconut water</h4>}
        </div>
      </div>
      <div>
        <h2>Share Drink</h2>
      </div>
    </div>
  );
};

export default User;
