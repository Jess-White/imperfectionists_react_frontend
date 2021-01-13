import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import { getBlogPosts } from '../Services/DatabaseCalls.js';
import Button from 'react-bootstrap/Button';

export default function BlogPostIndex() {
  const [blogPosts, setBlogPosts] = useState(getBlogPosts())
    return (
      <div>
        {blogPosts.map(blogPost => 
          <Card>
                <Card.Header>{blogPost.title}</Card.Header>
          </Card>
        )}
      </div>
    );
  };


// export default class VoteIndex extends React.Component {
//   render() {
//     console.log(this.props.votes, "crepe")
//     return (
//         <div>
//         {this.props.votes.map(vote =>
//           <div>
//             <h1>{vote.name}</h1>
//             <h2>{vote.framework}</h2>
//           </div>
//           )}
//         </div>
//       );
//     }
//   }