import React from "react";

const Hero = () => {
  let handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let user = Object.fromEntries(formData.entries());
    e.target.reset()
    console.log(user);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input type="text" name="fname" />
        <input type="text" name="age" />
        <input type="text" name="name" />
        <button>sumbit</button>
      </form>
    </div>
  );
};

export default Hero;
