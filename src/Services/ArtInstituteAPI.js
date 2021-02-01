export const getArtworks = () => {
    return axios('https://api.artic.edu/api/v1/artworks?limit=10')
      .then(response => response.data)
  }

export const searchArtworks = (searchQuery) => {
    return axios(`https://api.artic.edu/api/v1/artworks/search?q=${searchQuery}&size=10`)
        .then(response => response.data)
}

export const getShowArtwork = (searchResultId) => {
    return axios (`https://api.artic.edu/api/v1/artworks/${searchResultId}`)
        .then(response => response.data)
}

import { getArtworks, searchArtworks, getShowArtwork } from './services/ArtInstituteAPI';

getArtworks() 
  .then(response => {
    setArtInstituteResults(response)
    }).catch(error => {
    setError("Something went wrong.")
    })

searchArtworks(query)
  .then(response => {
    setArtInstituteSearchResults(response)
  }).catch(error => {
    setError("Something went wrong.")
  })

getShowArtwork(searchResultId)
  .then(response => {
    setArtInstituteShow(response)
  }).catch(error => {
    setError("Something went wrong.")
  })

const [artInstituteResults, setArtInstituteResults] = useState([]);
const [artInstituteSearchResults, setArtInstituteSearchResults] = useState([]);
const [artInstituteShow, setArtInstituteShow] = useState([]);
