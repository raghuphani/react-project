import React, { Component } from 'react'
import './App.css';
import MovieRow from './MovieRow';
import $, { error, event } from 'jquery';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
    // const movies = [
    //   {id:0, title:"Avengers Balayya", 
    //   overview:"ashvca asjcvashgcva asghcvas cagsc aksgcas cakgsc aghksc ahgc ahagsc asgc asgcsagcvvasgcvcvacvacvascvgv"},
    //   {id:1, title:"Sahoo", 
    //   overview:"ashvca asjcvashgcva asghcvas cagsc aksgcas cakgsc aghksc ahgc ahagsc asgc asgcsagcvvasgcvcvacvacvascvgv"},

    // ]
    // const moviesRows = []
    // movies.map((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movieUrl={movie}/>
    //   moviesRows.push(movieRow)
    // })

    // this.state = {rows: moviesRows}
    this.performSearch("ant")
  }

  performSearch(searchTerm) {
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query="+ searchTerm 
    $.ajax({
      url: urlString,
      success: (searchResults) =>{
        console.log(searchResults)
        var moviesRows = []
        const results = searchResults.results
        results.map((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movieUrl={movie}/>
          moviesRows.push(movieRow)
        })
        this.setState({rows: moviesRows})
      },
      error: (xhr, status, err) => {
        console.log('error')
      }
    })
  }
  searchHandler(e) {
    const bound = this
    const searchTerm = e.target.value
    bound.performSearch(searchTerm)
  }

  render() {
    return (
      <div className="App">
        <table className="titlebar">
          <tbody>
            <tr>
              <td>
                <img alt="log0"width="50" src="logo192.png"/> 
              </td>
              <td>
               <h1>Movies DB Searcher</h1> 
              </td>
            </tr>
          </tbody>
        </table>
        <input className="searchBar" 
               placeholder="Enter Name"
               onChange={this.searchHandler.bind(this)}/>

        {this.state.rows}
      </div>
    )
  }
}
