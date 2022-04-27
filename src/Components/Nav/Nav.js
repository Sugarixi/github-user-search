import React from "react";
import Styles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Nav(props) {
  return (
    <div className={Styles.main}>
      <h1 className={Styles.title}>devfinder</h1>
      <h4 className={Styles.mode} onClick={props.onModeChange}>
        {props.isDarkTheme === true ? (
          <div>
            DARK&nbsp;
            <FontAwesomeIcon icon={solid("moon")} />
          </div>
        ) : (
          <div>
            LIGHT&nbsp;
            <FontAwesomeIcon icon={solid("sun")} />
          </div>
        )}
      </h4>
    </div>
  );
}
