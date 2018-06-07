import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';

const API_KEY = 'AIzaSyCkz5KuZN6CrU6zvclF4igDfPuGdZadsgU';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			videos: []
		})
		YTSearch({key: API_KEY, term: 'cats'}, (videos) => {
			this.setState({videos});
		})
		};
	

render () {

return ( <div>
	<SearchBar />
	<VideoList videos={this.state.videos} />
	</div>
)
}
}

ReactDOM.render(<App />, document.querySelector('.container'))

