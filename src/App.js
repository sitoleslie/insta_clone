import React, {useState} from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Cooper the Pooper",
      caption: "I love to eat my own poop",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5hxFCpNvUCMVMvfN7hD0n6KkuDUAJ2Gg2A&usqp=CAU"
    }, {
      username: "Cooper the Pooper",
      caption: "I love to eat my own poop",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5hxFCpNvUCMVMvfN7hD0n6KkuDUAJ2Gg2A&usqp=CAU"
    }
  ]);
  return (
    <div className="app">
  <div className="app_header">
    <img 
    class="app_headerImage"
    src="data:image/png;base64,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"
    width="100px"
    />
    </div>
    <h1>Hello World</h1>


   {
     posts.map(post => (
       <Post username={post.username} caption={post.caption} imageUrl={post. imageUrl}/>
     ))
   }


 
 

    </div>
  );
}

export default App;
