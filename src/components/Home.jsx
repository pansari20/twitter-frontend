import React, { useState } from "react";
import AddTweet from "./AddTweet";
import Search from "./Search";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import {FiEdit} from 'react-icons/fi';
import {RiDeleteBin2Line} from 'react-icons/ri';

export default function Home({
  tweetsData,
  setTweetsData,
  profileData,
  idCount,
  setIdCount,
}) {
  const handleDelete = (tweetId) => {
    const index = tweetsData.findIndex((tweet) => tweet.id === tweetId);

    if (index !== -1) {
      const updatedTweets = [...tweetsData];
      updatedTweets.splice(index, 1);
      setTweetsData(updatedTweets);
    }
  };

  const [tweetBeingEdited, setTweetBeingEdited] = useState(null);

  const handleEdit = (tweetId) => {
    setTweetBeingEdited(tweetId);
  };

  const handleEditSubmit = (e, tweetId) => {
    e.preventDefault();
    const updatedTweets = tweetsData.map((tweet) => {
      if (tweet.id === tweetId) {
        return { ...tweet, tweet: e.target.tweet.value };
      } else {
        return tweet;
      }
    });
    setTweetsData(updatedTweets);
    setTweetBeingEdited(null);
  };

  return (
    <>
      <div className="tweets">
        <h1>Home</h1>
        <AddTweet
          tweetsData={tweetsData}
          setTweetsData={setTweetsData}
          profileData={profileData}
          idCount={idCount}
          setIdCount={setIdCount}
        />
        <hr />
        <h3>Tweets</h3>
        {tweetsData.map((tweet) => {
          return (
            <>
            <div className="tweet-item" key={tweet.id}>
              <strong className="tweet-item-name">{tweet.firstName}</strong>
              <span className="tweet-item-username">@{tweet.userName}</span>
              <div className="tweet-buttons">
                <button onClick={() => handleEdit(tweet.id)}><FiEdit size={16} /></button>
                <button onClick={() => handleDelete(tweet.id)}><RiDeleteBin2Line size={16} /></button>
              </div>
              {tweetBeingEdited === tweet.id ? (
                <form
                  className="tweet-edit-form"
                  onSubmit={(e) => handleEditSubmit(e, tweet.id)}
                >
                  <textarea name="tweet" defaultValue={tweet.tweet} />
                  <button type="submit">Save</button>
                </form>
              ) : (
                <p className="tweet-desc">{tweet.tweet}</p>
              )}
              <p style={{'marginBottom': '0'}}>
                <span className="tweet-item-likes">
                  <AiOutlineHeart /> {tweet.numberOfLikes}
                </span>
                <span className="tweet-item-comments">
                  <BiComment /> {tweet.numberOfComments}
                </span>
              </p>
            </div>
              <hr />
            </>
          );
        })}
      </div>
      <Search tweetsData={tweetsData} />
    </>
  );
}
