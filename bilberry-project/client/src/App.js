import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Table from './components/Table/Table';
//import Search from './components/Search/Search';
import Loading from './components/Loading/Loading';
import PostForm from './components/PostForm/PostForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      database: null,
      searchTerm: '',
      isLoading: false,
      error: null
    };

  }

    getAPI = () => {
    this.setState({ isLoading: true });
    axios.get("http://localhost:3000/bilberryAPI/courses")
      .then(res => {
        if (!res.ok) {
          //throw new Error(res.statusText);
        }
        return res.data;
      })
      .then(res => this.setState({ database: res, isLoading: false }))
      .catch(err => this.setState({ error: err }));
  }

  searchChange = event => {
    this.setState({ searchTerm: event.target.value });
  }

  searchSubmit = event => {
    const { searchTerm } = this.state;
    this.setState({ searchTerm: searchTerm });
    event.preventDefault();
  }

  updateAfterPost = (course) => {
    this.setState({
      database: {...this.state.database, course}
    });
  }

  onDelete = (id) => {
    const isNotId = course => course.id !== id;
    const updatedDatabase = this.state.database.filter(isNotId);
    axios.delete(`http://localhost:3000/bilberryAPI/courses/${id}`)
      .then(res => console.log(res))
      .catch(err => this.setState({ error: err }));
    this.setState({ database: updatedDatabase });
  }

  componentDidMount() {
    this.getAPI();
  }

  render() {
    const { 
      database,
      //searchTerm,
      isLoading
     } = this.state

    return (
      <div className="App">
        {/* <Search
          searchTerm={searchTerm}
          onChange={this.searchChange}
          onSubmit={this.searchSubmit}
         >
           Search
        </Search> */}
        { isLoading
          ? <Loading />
          : <Table 
            results={database}
            onDelete={this.onDelete}
            refresh={this.getAPI} />
        }
        <PostForm updateAfterPost={this.updateAfterPost} />
      </div>
  )};
}

export default App;
