const getYoutubeDataAction = (artist, title) => {



    return (dispatch) => {
        const options = {

            key: "AIzaSyASU5iHfwLBXKJFeWg7EW67SSx7_3KA4nU",
            part: 'snippet',
            q: artist + " " + title
        };

        let url = 'https://www.googleapis.com/youtube/v3/search'
        url += '?' + Object.keys(options).map((k) => k + '=' + encodeURIComponent(options[k])).join('&');
        fetch(url).then((data) => {
            return data.json()
        }).then((data) => {




            dispatch(
                {
                    type: "GETDATA",
                    payload: data
                }
            )
        })



    }

}

export default getYoutubeDataAction

