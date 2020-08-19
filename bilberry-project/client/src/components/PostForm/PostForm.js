import React, { Component } from 'react';
import axios from 'axios';

import './PostForm.css';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            language: '',
            description: '',
            initRelease: '2020',
            error: null
        }
    }

    onChangeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmitHandler = event => {
        event.preventDefault();
        axios.post("http://localhost:3000/bilberryAPI/courses", this.state)
            .then(res => {
                this.props.updateAfterPost(res.data);
            })
            .catch(err => {
                this.setState({ error: err })
            });
    }

    render() {
        const { 
            name,
            language, 
            description, 
            initRelease 
        } = this.state;
        
        return (
            <div className="post-form">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="row">
                        <div className="col-25">
                            <label>Name: </label>
                            <input 
                                type="text" 
                                name="name"
                                value={name}
                                onChange={this.onChangeHandler} 
                                required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <label>Language: </label>
                            <input 
                                type="text" 
                                name="language"
                                value={language}
                                onChange={this.onChangeHandler}
                                required />
                        </div>
                    </div>
                    <div className="row"> 
                        <label>Description: </label>
                        <textarea 
                            style={{ height: '200px' }}
                            type="text" 
                            name="description"
                            value={description}
                            onChange={this.onChangeHandler} 
                            required/>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Date of release: </label>
                            <select 
                                type="text" 
                                name="initRelease"
                                value={initRelease}
                                onChange={this.onChangeHandler}>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PostForm;