/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState, useEffect} from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostPage from './components/PostsContainer/PostsPage';
import SearchBar from './components/SearchBar/SearchBarContainer';
// import dummydata
import dummyData from "./dummy-data";

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const [data, setData] = useState(() => {
    const newData = dummyData.map((post, i) => {
      post.key = i;
      post.liked = false;
      return post;
    })
    return newData;
  });
  const [search, setSearch] = useState("");

  const changeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const updateLikes = (id, likes, liked) => {
    const newData = data.concat();
    setData(newData.map(post => {
      if(post.key === id){
        post.likes = likes;
        post.liked = liked;
        console.log(post.likes);
      }
      return post;
    }))
  }

  return (
    <div className="App">
      {/* Add components here  and pass props where appropriate */}
      <SearchBar search={search} changeSearch={changeSearch} />
      <PostPage data={data} search={search} updateLikes={updateLikes} />
    </div>
  );
};

export default App;
