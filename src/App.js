import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [idCount, setIdCount] = useState(10);
  // const [tweets, setTweets] = useState([]);
  // const [profile, setProfile] = useState({});n

  // useEffect(() => {
  //   const fetchTweets = async () => {
  //     await axios
  //       .get("https://tweets.free.beeceptor.com/tweets/all")
  //       .then((response) => {
  //         setTweets(response.data);
  //       })
  //       .catch((err) => console.log("err:", err));
  //   };

  //   fetchTweets();
  // }, []);

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     await axios
  //       .get("https://tweets.free.beeceptor.com/profile")
  //       .then((response) => {
  //         setProfile(response.data);
  //       })
  //       .catch((err) => console.log("err:", err));
  //   };

  //   fetchProfile();
  // }, []);
  
  const profile = {
    id: 1,
    first_name: "Jolie",
    last_name: "Ferne",
    email: "jferne0@website.com",
    gender: "Female",
    country: "Sweden",
  };

  const [tweets, setTweets] = useState([
    {
      id: 0,
      userName: "tech_geek",
      date: "2023-02-08",
      tweet:
        "Just got my hands on the latest smartphone and I am blown away by its features and performance! #techlove",
      numberOfLikes: 250,
      numberOfComments: 60,
      firstName: "John",
    },
    {
      id: 1,
      userName: "foodie_gal",
      date: "2023-02-08",
      tweet:
        "Had the most amazing meal at the new restaurant in town. The flavors were out of this world! #foodie #yum",
      numberOfLikes: 170,
      numberOfComments: 40,
      firstName: "Jane",
    },
    {
      id: 2,
      userName: "bookworm",
      date: "2023-02-09",
      tweet:
        "Just finished reading the latest bestseller and I can't wait to discuss it with my book club next week! #booknerd #booklover",
      numberOfLikes: 200,
      numberOfComments: 50,
      firstName: "Jack",
    },
    {
      id: 3,
      userName: "fitness_fanatic",
      date: "2023-02-09",
      tweet:
        "Had an intense workout at the gym this morning and feeling great! #fitnessmotivation #fitlife",
      numberOfLikes: 140,
      numberOfComments: 30,
      firstName: "Jessica",
    },
    {
      id: 4,
      userName: "nature_lover",
      date: "2023-02-10",
      tweet:
        "Just took a hike in the mountains and it was breathtaking! The beauty of nature never ceases to amaze me. #outdooradventures #hiking",
      numberOfLikes: 180,
      numberOfComments: 40,
      firstName: "Sarah",
    },
    {
      id: 5,
      userName: "coffee_lover",
      date: "2023-02-10",
      tweet: "My twitter anniversary today!",
      numberOfLikes: 180,
      numberOfComments: 40,
      firstName: "Gill",
    },
    {
      id: 6,
      userName: "cool_dude",
      date: "2023-02-10",
      tweet: "Monday blues ;/",
      numberOfLikes: 180,
      numberOfComments: 40,
      firstName: "Stella",
    },
    {
      id: 7,
      userName: "the_perfectionist",
      date: "2023-02-10",
      tweet: "Good things come to those who wait",
      numberOfLikes: 18,
      numberOfComments: 40,
      firstName: "Adam",
    },
    {
      id: 8,
      userName: "unknown000",
      date: "2023-02-10",
      tweet: "Today is my Birthday :)",
      numberOfLikes: 10,
      numberOfComments: 4,
      firstName: "Justin",
    },
    {
      id: 9,
      userName: "jamesbond",
      date: "2023-02-10",
      tweet: "You need to fight for you want. #hustle #life",
      numberOfLikes: 120,
      numberOfComments: 47,
      firstName: "Elon",
    },
  ]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home
            tweetsData={tweets}
            setTweetsData={setTweets}
            profileData={profile}
            idCount={idCount}
            setIdCount={setIdCount}
          />
        </>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/profile",
      element: (
        <>
          <Navbar />
          <Profile profileData={profile} />
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
