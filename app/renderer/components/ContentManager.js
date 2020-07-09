import React, { Component } from 'react';
import axios from 'axios';

import CardManager from './CardManager';
import PlayerContainer from './PlayerContainer';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 1,
      hasMore: true,
      isLoading: false,
      isPlaying: false,
      url: '',
    };
    this.getMovies = this.getMovies.bind(this);
    this.setIsPlaying = this.setIsPlaying.bind(this);
    this.setUrl = this.setUrl.bind(this);
  }

  componentDidMount() {
    this.getMovies(1);
    this.getMovies(2);
    this.setState({
      page: 3,
    });
  }

  setIsPlaying(status) {
    this.setState({
      isPlaying: status,
    });
  }

  setUrl(url) {
    console.log("On set l'url : ", url);
    this.setState({
      url: url,
    });
  }

  API(page) {
    return (
      ' https://api.themoviedb.org/3/movie/popular?api_key=0ec464bc3151bee6274e541b3030fa57&language=en-US&page=' +
      page
    );
  }

  getMovies(pageNumber) {
    this.setState({
      isLoading: true,
    });
    let page = pageNumber ? pageNumber : this.state.page;
    // console.log( 'IXI : ', page )
    axios
      .get(this.API(page))
      .then((response) => {
        let data = response.data.results;
        // console.log( 'On a des desta' )
        // console.log( data )
        this.setState({
          movies: this.state.movies.concat(data),
          hasMore: data.length - 1 > 0,
          page: page + 1,
          isLoading: false,
        });
      })
      .catch((error) =>
        this.setState({
          isLoading: false,
        }),
      );
  }

  render() {
    const isPlaying = this.state.isPlaying;
    const display = isPlaying ? (
      <PlayerContainer
        url={this.state.url}
        driver={this.props.driver}
        setIsPlaying={this.setIsPlaying}
      />
    ) : (
      <CardManager
        getMovies={this.getMovies}
        hasMore={this.state.hasMore}
        movies={this.state.movies}
        myRef={this.props.myRef}
        driver={this.props.driver}
        setIsPlaying={this.setIsPlaying}
        setUrl={this.setUrl}
      />
    );
    // const display2 = <PlayerContainer
    //     url={this.state.url}
    //     driver={this.props.driver}
    //     setIsPlaying={this.setIsPlaying}
    //   />;
    return display;
  }
}
