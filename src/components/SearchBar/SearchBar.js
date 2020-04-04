import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cityName: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({ cityName: e.target.value });
    }

    render (){
        const { getRestaurants } = this.props;
        const { cityName } = this.state;
        return (
            <div className='search-panel'>
                <div className='search-container'>
                    <div className='search-text'>Enter city name 
                        <input type='text' className='search-bar' placeholder='Toronto' onChange={ this.handleChange } />
                        <input type='submit' value="Search" className='search-submit' onClick={() => getRestaurants(cityName) } />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRestaurants: (cityName) => dispatch(fetchPosts(cityName)),
    }
}

export default connect(null,mapDispatchToProps)(SearchBar);