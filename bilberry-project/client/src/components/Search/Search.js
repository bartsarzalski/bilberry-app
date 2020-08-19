import React, { Component } from 'react';

class Search extends Component {
    componentDidMount() {
        if (this.input) {
            this.input.focus();
        }
    }
    render() {
        const {
            searchTerm,
            onSubmit,
            onChange,
            children,
        } = this.props;

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text" 
                value={searchTerm} 
                onChange={onChange}
                ref={el => this.input = el}
            />
            <button type="submit">
                {children}
            </button>
        </form>
        );
    }
}

export default Search;