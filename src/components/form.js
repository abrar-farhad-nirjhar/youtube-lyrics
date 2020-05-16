import React, {useState} from 'react'
import { Form, Col, Button } from 'react-bootstrap'

export default function SearchForm(props) {

    const [artist, set_artist] = useState("")
    const [song, set_song] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.search(artist, song)
    }
      
   




    return (
        <div>

            <Form onSubmit={handleSubmit}>
                <Form.Row >
                    <Form.Group as={Col} md="3" controlId="artist">

                        <Form.Control type="text" placeholder="Artist" name="artist" onChange={(e)=>set_artist(e.target.value)} required />
                        <Form.Control.Feedback type="invalid">
                            Enter the name of the artist...
          </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="song">

                        <Form.Control type="text" placeholder="Song" name="song" onChange={(e)=>set_song(e.target.value)} required />
                        <Form.Control.Feedback type="invalid">
                            Enter the name of the song...
          </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="1" controlId="validationCustom05">
                        <Button type="submit" variant="success">SEARCH</Button>
                    </Form.Group>
                </Form.Row>
            </Form>

        </div>
    )
}
