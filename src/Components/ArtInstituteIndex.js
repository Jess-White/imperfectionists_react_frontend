import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { getArtworks } from '../Services/ArtInstituteAPI.js';
import { Link } from 'react-router-dom';

export default function ArtInstituteIndex() {


  const [artInstituteResults, setArtInstituteResults] = useState([]);
  const [error, setError] = useState([])
  let artInstituteRequest
  
  useEffect(() => 
      {artInstituteRequest = getArtworks() 
        .then(response => {
          setArtInstituteResults(response)
          }).catch(error => {
          setError("Something went wrong.")
          })
      }, []);

  useEffect(() => 
    {setArtInstituteResults(artInstituteRequest)}, [artInstituteRequest]
  );

    if (!artInstituteResults.map) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div>
          {artInstituteResults.map(artInstituteResult => 
            <Card className="dark:bg-blue-500 card">
              <Card.Header>
                <Link
                    to={`/blog_posts/${blogPost.id}`}
                  >
                    {artInstituteResult.title}
                </Link>
              </Card.Header>
              <Card.Body>
                <Image src={blogPost.image_url} style={{maxWidth: "40%", maxHeight: "auto"}} thumbnail fluid />
                <h3>{artInstituteResult.description}</h3>
                <h3>{artInstituteResult.date_start} {(artInstitute.date_start !== artInstitute.date_end) ? 
                    -`${artInstituteResult.date_end}` : null }</h3>
              </Card.Body>
            </Card>
          )}
        </div>
      );