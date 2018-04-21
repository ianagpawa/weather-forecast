import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            error: false
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({ term: event.target.value })
    }

    componentDidMount(){
        this.props.fetchWeather('New York');
    }


    onFormSubmit(event) {
        event.preventDefault(event);

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='col-md-4 col-md-offset-4 input-group'>
                <input
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange}
                    placeholder="City"
                />
                <span className="input-group-btn">
                <button type='submit' className='btn btn-secondary'>
                    Search
                </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { fetchWeather }, dispatch );
}

export default connect(null, mapDispatchToProps)(SearchBar);
