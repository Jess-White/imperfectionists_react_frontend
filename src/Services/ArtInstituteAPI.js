import create from 'zustand'

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

// getArtworks() 
//   .then(response => {
//     setArtInstituteResults(response)
//     }).catch(error => {
//     setError("Something went wrong.")
//     })

// searchArtworks(query)
//   .then(response => {
//     setArtInstituteSearchResults(response)
//   }).catch(error => {
//     setError("Something went wrong.")
//   })

// getShowArtwork(searchResultId)
//   .then(response => {
//     setArtInstituteShow(response)
//   }).catch(error => {
//     setError("Something went wrong.")
//   })

// const [artInstituteResults, setArtInstituteResults] = useState([]);
// const [artInstituteSearchResults, setArtInstituteSearchResults] = useState([]);
// const [artInstituteShow, setArtInstituteShow] = useState([]);

// (input > 0 < 15) - red
// (input > 15 < 45) - orange
// (input > 45 < 75) - yellow
// (input > 75 < 165) - green
// (input > 165 < 225) - cyan
// (input > 225 < 255) - blue
// (input > 255 < 285) - purple
// (input > 285 < 345) - magenta
// (input > 345 < 360) - red

// (input > 0 < 15) - red
// (input > 15 < 45) - orange
// (input > 45 < 75) - yellow
// (input > 75 < 165) - green
// (input > 165 < 225) - cyan
// (input > 225 < 255) - blue
// (input > 255 < 285) - purple
// (input > 285 < 345) - magenta
// (input > 345 < 360) - red

//red: (0..15)
// redOne: [min: 0, max: 15]
//orange: [min: 16, max: 45]
//yellow: [min: 46, max: 75]
//green: [min: 76, max: 165]
//cyan: [min: 166, max: 225]
//blue: [min: 226, max: 255]
//purple: [min: 256, max: 285]
//magenta: [min: 286, max: 345]
//redTwo: [min: 346, max: 360]

// if input === "red" 

// response.data hook
// filteredData hook {[]}

// tempFilterData []

// const colorFilter = () => {
//     tempFilterData = response.data.filter (painting) {
//         return painting
//     }
// }



// const colorCheck = (inputColor) {
//     if ((response.data.color.s >= 50) {
//         return false
//     } else if (inputColor === "red") {
//         (response.data.color.h > redOne.min && response.data.color.h < redOne.max) || 
//         (response.data.color.h > redTwo.min && response.data.color.h < redTwo.max)) {
//             setFilteredData(..)
//         } 
//     } else if (inputColor === "orange") {
//         (response.data.color.h > orange.min && response.data.color.h < orange.max)) {
//             setFilteredData(..)
//         } 
//     } else if (inputColor === "yellow") {
//         (response.data.color.h > yellow.min && response.data.color.h < yellow.max)) {
//             setFilteredData(..)
//         } 
//     } else if (inputColor === "green") {
//         (response.data.color.h > green.min && response.data.color.h < green.max)) {
//             setFilteredData(..)
//         } 
//     } else if (inputColor === "cyan") {
//         (response.data.color.h > cyan.min && response.data.color.h < cyan.max)) {
//             setFilteredData(..)
//         } 
//     } else if (inputColor === "blue") {
//         (response.data.color.h > blue.min && response.data.color.h < blue.max)) {
//             setFilteredData(..)
//         } 
//     } else if (inputColor === "purple") {
//         (response.data.color.h > purple.min && response.data.color.h < purple.max)) {
//             setFilteredData(..)
//         } 
//     } else if (inputColor === "magenta") {
//         (response.data.color.h > magenta.min && response.data.color.h < magenta.max)) {
//             setFilteredData(..)
//         } 
//     } else {
//         return false
//     } setFilteredData(tempFilterData)
// }

// setFilterData(tempFilterData)



//get response.data.color.h value

//check to see which range h value is in 

//get response.data.color.s value

//check to see if s is > 50%
//if (s >= 50)


//if (s >= 50) && 