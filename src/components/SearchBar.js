import React from 'react';
import './myStyle.scss';

class SearchBar extends React.Component {

    constructor(props){
        super(props);

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSearchSubmit(){
        this.props.onSearchSubmit(this.state.value);
    }

    handleChange(e){
        this.setState({ value: e.target.value });
    }

    render (){
        return (
            <div className='search-panel'>     
                <div className='search-container'>
                    <div className='search-text'>Enter city name 
                    <input type='text' className='search-bar' placeholder='Toronto' onChange={ this.handleChange }/>
                     <input type='submit' value="Search" className='search-submit' onClick={ this.onSearchSubmit }/>
                     </div>
                </div>
            </div>
        );
    }
}

 export default SearchBar;
