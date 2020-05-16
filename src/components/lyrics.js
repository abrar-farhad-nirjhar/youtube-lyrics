import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'

function Lyrics(props) {

    
    let display = "Empty"
    try{
    if (props.lyrics.lyrics.length > 0) {
        display = props.lyrics.lyrics.split('\n').map((lyric, index) => {
            return (
                <p key={index}>{lyric}</p>
            )
        })
    }}
    catch(err){
        display = "No Such Lyrics found"
    }



    return (
        <div>
            <Card body>{display}</Card>
        </div>
    )
}

const mapStateToProps = (state) => ({
    lyrics: state.lyrics
})

export default connect(mapStateToProps)(Lyrics)
