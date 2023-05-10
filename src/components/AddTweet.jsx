import React from "react";
import { useState } from "react";

export default function AddTweet({tweetsData, setTweetsData, profileData, idCount, setIdCount}) {
  const [newTweet, setNewTweet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let date = new Date();
    const isoDate = date.toISOString();
    const year = isoDate.substring(0, 4);
    const month = isoDate.substring(5, 2);
    const day = isoDate.substring(8, 2);
    date = `${year}-${month}-${day}`;

    const newTweetObject = {
      id: idCount,
      userName: 'user_name',
      tweet: newTweet,
      date: date,
      numberOfLikes: 0,
      numberOfComments: 0,
      firstName: profileData.first_name,
    };
    setTweetsData([newTweetObject, ...tweetsData]);
    setNewTweet('');
    setIdCount(idCount+1)
  };

  return (
    <form className="add-tweet-form" onSubmit={handleSubmit}>
      <input
        className="add-tweet-input"
        type="text"
        value={newTweet}
        onChange={(e) => setNewTweet(e.target.value)}
        placeholder="What's happening?"
        required
      />
      <button type="submit">Add Tweet</button>
    </form>
  );
}
