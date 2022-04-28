import React from "react";
import Styles from "./Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Main(props) {
  return (
    <div className={Styles.main}>
      <div className={Styles.userImgContainer}>
        <img className={Styles.userImage} src={props.user.avatar_url}></img>
      </div>

      <div className={Styles.topMain}>
        <div className={Styles.userInfo}>
          <h1 className={Styles.name}>{props.user.login}</h1>

          <h3 className={Styles.user}>
            <a href={props.user.html_url} target="_blank">
              @{props.user.login}
            </a>
          </h3>

          <span className={Styles.joinedDate}>
            Joined{" "}
            {new Date(props.user.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
      <span className={Styles.bio}>
        {props.user.bio != null ? props.user.bio : "This profile has no bio"}
      </span>
      <div className={Styles.stats}>
        <div className={Styles.statsItems}>
          <h4>Repos</h4>
          <h2>{props.user.public_repos}</h2>
        </div>
        <div className={Styles.statsItems}>
          <h4>Followers</h4>
          <h2>{props.user.followers}</h2>
        </div>
        <div className={Styles.statsItems}>
          <h4>Following</h4>
          <h2>{props.user.following}</h2>
        </div>
      </div>
      <div className={Styles.infoContainer}>
        <div className={Styles.firstInfoWrapper}>
          <div className={Styles.info}>
            <FontAwesomeIcon icon={solid("location-dot")} />{" "}
            <span
              style={{
                opacity: props.user.twitter_username === null ? "0.5" : "",
              }}
            >
              {props.user.location != null
                ? props.user.location
                : "Not Available"}
            </span>
          </div>
          <div className={Styles.info}>
            <FontAwesomeIcon icon={brands("twitter")} />{" "}
            {props.user.twitter_username != null ? (
              <a
                href={"https://twitter.com/" + props.user.twitter_username}
                target="_blank"
              >
                <span>{props.user.twitter_username}</span>
              </a>
            ) : (
              <span
                style={{
                  opacity: props.user.twitter_username === null ? "0.5" : "",
                }}
              >
                {props.user.twitter_username != null
                  ? props.user.twitter_username
                  : "Not Available"}
              </span>
            )}
          </div>
        </div>
        <div>
          <div className={Styles.info}>
            <FontAwesomeIcon icon={solid("link")} />{" "}
            {props.user.blog != "" ? (
              <a href={props.user.blog} target="_blank">
                <span>{props.user.blog}</span>
              </a>
            ) : (
              <span
                style={{
                  opacity: props.user.twitter_username === null ? "0.5" : "",
                }}
              >
                {props.user.blog != "" ? props.user.blog : "Not Available"}
              </span>
            )}
          </div>
          <div className={Styles.info}>
            <FontAwesomeIcon icon={solid("building-user")} />{" "}
            <span
              style={{
                opacity: props.user.twitter_username === null ? "0.5" : "",
              }}
            >
              {props.user.company != null
                ? props.user.company
                : "Not Available"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
