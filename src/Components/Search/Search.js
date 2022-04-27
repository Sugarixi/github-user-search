import React from "react";
import Styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Search(props) {
  function submit(e) {
    e.preventDefault();

    props.onSearch(document.getElementById("nameToSearch").value);
  }

  return (
    <form className={Styles.main} onSubmit={submit}>
      <FontAwesomeIcon
        className={Styles.magnifyingGlass}
        icon={solid("magnifying-glass")}
      />
      <input
        className={Styles.input}
        id="nameToSearch"
        type="text"
        placeholder="Search GitHub username..."
      ></input>
      {props.isFound ? (
        ""
      ) : (
        <span className={Styles.noResults}>No results</span>
      )}
      <button className={Styles.button} type="submit">
        Search
      </button>
    </form>
  );
}
