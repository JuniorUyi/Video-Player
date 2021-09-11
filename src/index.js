import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';
import fastVideo from './videos/react_video-fast.mp4';
import slowVideo from './videos/react_video-slow.mp4';
import cuteVideo from './videos/react_video-cute.mp4';
import eekVideo from './videos/react_video-eek.mp4';

const VIDEOS = {
    fast: fastVideo,
    slow: slowVideo,
    cute: cuteVideo,
    eek: eekVideo
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { src: VIDEOS.fast};

        this.chooseVideo = this.chooseVideo.bind(this);
    }

    chooseVideo(newVideo) {
        this.setState({
            src: VIDEOS[newVideo]
        }) 
    }

    render() {
        return ( 
            <div>
                <h1>Video Player</h1>
                <Menu chooseVideo={this.chooseVideo}/>
                <Video src={this.state.src}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);