import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'
import setVideoAction from '../actions/setVideoAction'
function Youtube(props) {

    let display = <Card body>Search Results</Card>


    const selectVideo=(id)=>{
        
        props.dispatch(setVideoAction(id))
    }
    

    try {

        display = props.youtube.youtube.items.map((item, index) => {
           
            return (

                <Card key={index}  onClick={()=>selectVideo(item.id.videoId)}>
                    <Card.Img variant="top" src={item.snippet.thumbnails.high.url} />
                    <Card.Body>
            <Card.Title>{item.snippet.title}</Card.Title>
                        <Card.Text>
                            {item.snippet.description}
      </Card.Text>
                    </Card.Body>
                    
                </Card>
                




            )
        })


    }
    catch (err) {
    }




    return (
        <div>
            {display}
        </div>
    )
}

const mapStateToProps = (state) => ({
    youtube: state.youtube
})

export default connect(mapStateToProps)(Youtube)


