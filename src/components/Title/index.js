import React from "react";
import "./style.css";

function Title(props) {
  return (<nav className="navbar">
  <ul>
        <li className="brand"><a href="/">Clicky Game</a></li>
        {/* <li className="">{props.message}</li> */}
        <li className="">{props.messageInfo(props.isOver)}</li>
        <li>Score: {props.score} | Top Score: {props.topScore}</li>
  </ul>
</nav>);
}

export default Title;
