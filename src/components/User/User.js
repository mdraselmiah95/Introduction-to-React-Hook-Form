import React from "react";

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
      </div>
      <div>
        <h2>a lot of things</h2>
      </div>
      <div>
        <h2>Profession</h2>
      </div>
      <div>
        <h2>Connection</h2>
      </div>
      <div>
        <h2>Share Drink</h2>
      </div>
    </div>
  );
};

export default User;
