import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts, UserPosts } from "../../dummyData";

export default function Feed({ isUser }) {

  var Posting = Posts;

  if (isUser) Posting = UserPosts

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posting.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
