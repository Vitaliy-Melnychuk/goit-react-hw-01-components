import { Component } from "react";
import ReactPlayer from "react-player";
import { VideoList } from "./VideoList";
import videos from "./video.json";

export class MyApp extends Component {
  state = {
    selectedVideo: null,
  };
  selectVideo = (link) => {
    this.setState({ selectedVideo: link });
  };
  render() {
    const { selectedVideo } = this.state;
    return (
      <div>
        <h1>Selected video: {selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />

        {selectedVideo && <ReactPlayer url={selectedVideo} controls />}
      </div>
    );
  }
}
