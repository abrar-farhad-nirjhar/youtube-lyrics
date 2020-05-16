const getLyricsAction = (artist, title) => {



    return (dispatch) => {
      fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`).then((data) => {
        return data.json()
      }).then((data) => {

        dispatch(
          {
            type: "GETLYRICS",
            payload: data.lyrics
          }
        )
      })
  
  
  
    }
  
  }

  export default getLyricsAction

  