import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";

export default function Search({ tweetsData }) {
  const [searchText, setSearchText] = useState("");

  const arr = tweetsData.filter((item) => {
    const lowercaseSearchText = searchText.toLowerCase();
    const lowercaseTweet = item.tweet.toLowerCase();
    const lowercaseFirstname = item.firstName.toLowerCase();
    const lowercaseUsername = item.userName.toLowerCase();

    return (
      lowercaseTweet.includes(lowercaseSearchText) ||
      lowercaseFirstname.includes(lowercaseSearchText) ||
      lowercaseUsername.includes(lowercaseSearchText)
    );
  });

  return (
    <div className="search-section">
      <h1>Search</h1>
      <input
        placeholder="Search Twitter!"
        className="search-input"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {!searchText
        ? ""
        : arr.map((tweet) => {
            return (
              <div className="tweet-item" key={tweet.id}>
                <strong className="tweet-item-name">{tweet.firstName}</strong>
                <span className="tweet-item-username">@{tweet.userName}</span>
                <p>{tweet.tweet}</p>
                <p>
                  <span className="tweet-item-likes">
                    <AiOutlineHeart /> {tweet.numberOfLikes}
                  </span>
                  <span className="tweet-item-comments">
                    <BiComment /> {tweet.numberOfComments}
                  </span>
                </p>
              </div>
            );
          })}
    </div>
  );
}
