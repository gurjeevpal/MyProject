import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import RestaurantList from './RestaurantList/RestaurantList';
import '../styles.scss';

const Main = () => {
    return (
        <React.Fragment>          
            <SearchBar />
            <RestaurantList />
        </React.Fragment>
    );
}

export default Main;