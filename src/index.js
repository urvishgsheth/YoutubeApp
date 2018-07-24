import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';


import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-details';

let API_KEY = "AIzaSyBC9nCn8ceko8w8HrVHpP2_yTV02lO-osY";



//Create component which will return some HTML
class App extends Component {
constructor(props){
    super(props);
    this.state={
        videos:[],
        selectedVideo:null
    }

    this.videoSearch("reactjs");
 
}

videoSearch(term){
    YTSearch({ key: API_KEY, term: term }, videos => {
        console.log(videos);
        this.setState({
            videos:videos, 
            selectedVideo:videos[0] 
        });
        
    })       
}
    render() {
        let videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />            
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
                    videos={this.state.videos} />
            </div>
        );
    }
}

//Render generated HTML to dom
ReactDom.render(<App />, document.getElementById("root"));
