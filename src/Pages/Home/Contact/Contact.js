import React from "react";

const Contact = () => {
  return (
    <div className="bg-black text-white my-10 flex justify-evenly py-16 rounded">
      <div>
        <p>
          <small>We are open monday-friday</small>
        </p>
        <p>7:00 am - 9:00 pm</p>
      </div>
      <div>
        <p>
          <small>Have a question?</small>
        </p>
        <p>+2546 251 2658</p>
      </div>
      <div>
        <p>
          <small>Need a repair? our address</small>
        </p>
        <p>Liza Street, New York</p>
      </div>
    </div>
  );
};

export default Contact;
