import React, { Component } from 'react'

export default class MovieRow extends Component {
  viewMovie = () => {
    console.log(this.props);
    const url = "https://www.themoviedb.org/movie/" + this.props.movieUrl.id
    window.location.href = url
  }
    render() {
        return <table key={this.props.movieUrl.id}>
        <tbody>
          <tr>
            <td>
              <img alt="log0"width="120" src={this.props.movieUrl.poster_src}/> 
            </td>
            <td>
              {this.props.movieUrl.title}
              <p>{this.props.movieUrl.overview}</p>
            <input type="button" onClick={()=>{this.viewMovie()}} value="view"/>
            </td>
          </tr>
        </tbody>
        </table>
    }
}
