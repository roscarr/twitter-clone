import { Avatar, Button } from '@mui/material'
import { useState } from 'react'
import './TweetBox.css'
import db from './firebase'
function TweetBox() {
  const [tweetMessage,setTweetMesssage]=useState("")
  const [tweetImage,setTweetImage]=useState("")
  const sendTweet=(e)=>{
     e.preventDefault();
     db.collection('posts').add({
      displayName:"roscar",
      username:"@pechospeludos",
      verified:true,
      text:tweetMessage,
      avatar:"https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
       image:tweetImage
     })
     setTweetImage("")
     setTweetMesssage("")
  }
  
  return (
    <div className='tweetBox'>
      <form action="">
        <div className="tweetBox__input">
         <Avatar src='https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-10-datos-curiosos-sobre-los-gatos.png?itok=88pMyzkl'/>
         <input value={tweetMessage} type="text" placeholder='What is hapening?'
                onChange={e=>setTweetMesssage(e.target.value)}/>
        </div>
        <input value={tweetImage} onChange={e=>setTweetImage(e.target.value)}
        type="text" placeholder='Optional: Enter image url' className="tweetBox__imageInput"/>
        
        <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
