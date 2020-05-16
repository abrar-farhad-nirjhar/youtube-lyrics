import React from 'react';
import './App.css';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import youtubeDataReducer from './reducers/youtubeDataReducer'
import lyricsDataReducer from './reducers/lyricsDataReducer'
import setVideoReducer from './reducers/setVideoReducer'
import getLyricsAction from './actions/getLyricsAction'
import getYoutubeDataAction from './actions/getYoutubeDataAction'
import thunk from 'redux-thunk';
import SearchForm from './components/form'
import Lyrics from './components/lyrics'
import {Provider} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Youtube from './components/youtube'
import Video from './components/video'

let reducers = combineReducers({
  youtube: youtubeDataReducer,
  lyrics: lyricsDataReducer,
  videoId: setVideoReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

function App() {

  
  
  const search=(artist, song)=>{
    
    store.dispatch(getLyricsAction(artist, song))
    store.dispatch(getYoutubeDataAction(artist, song))


  }
  
  return (
    <Provider store={store}>
    <div className="App">
      <div className="container">
        <br></br>
        <SearchForm search={search}/>
        <Video />
       
        <Row className="show-grid">
            <Col xs={12} md={4}>
              <Lyrics />
            </Col>
            <Col xs={12} md={8}>
              <Youtube />
            </Col>
          </Row>
        
        
      </div>

    </div>
    </Provider>
  );
}

export default App;
