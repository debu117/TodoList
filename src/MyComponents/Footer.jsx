import React from "react";

const Footer = () => {
  let footerSytle = {
    position: "relative",
    width: "100%",
    top: "70vh",
    border: "2px solid red",
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerSytle}>
      <p className="text-center">Copyright &copy; MyTodoList.com</p>
    </footer>
  );
};

export default Footer;
