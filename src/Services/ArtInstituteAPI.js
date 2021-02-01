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
