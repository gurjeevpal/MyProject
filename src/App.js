import React from 'react';

import SearchBar from './components/SearchBar'
import RestaurantList from './components/RestaurantList'


class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
            restaurants: [],
            showScroll: true,
            pagination: {   
                total_entries: 0,
                per_page: 0,
                current_page: 1
            }
        };
        this.baseUrl = `http:\/\/opentable.herokuapp.com\/api\/restaurants?`;

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.toggleScroll = this.toggleScroll.bind(this);
        this.onPageTurn = this.onPageTurn.bind(this);
        this.fetchResults = this.fetchResults.bind(this);
      

        // default search
        this.onSearchSubmit('Toronto');
    }



    onSearchSubmit(value){
        // using the city param for more interesting results to play with
        this.url = this.baseUrl + `city=${value}`;

        this.fetchResults(this.url);
    }

    toggleScroll(){
        fetch(this.url)
            .then(data => data.json())
            .then((data) => {
                this.setState((prev, props) => ({
                    showScroll: !prev.showScroll,
                    restaurants: data.restaurants
                }));
            });
    }

    onPageTurn(pageNum, toggle){
        let pageTurnUrl = `${this.url}&page=${pageNum}`;

        fetch(pageTurnUrl)
            .then(data => data.json())
            .then((data) => {
                this.setState((prev, props) => ({
                    restaurants: prev.showScroll ? prev.restaurants.concat(data.restaurants) : data.restaurants,
                    pagination: {
                        current_page: data.current_page
                    }
                }));
            });
    }

    fetchResults(url){
        fetch(url)
            .then(data => data.json())            
            .then((data) => {
                console.log("data"+JSON.stringify({data}));
                this.setState((prev, props) => ({
                    restaurants: data.restaurants,
                    pagination: {
                        total_entries: data.total_entries,
                        per_page: data.per_page,
                        current_page: data.current_page
                    }
                }));
            });
    }

    render() {
            
        return (
            <div>
              
                <SearchBar onSearchSubmit={ this.onSearchSubmit }/>

                <div className='results-content'>
                         {<RestaurantList
                        results={ this.state.restaurants }
                        onScroll={ this.onPageTurn }
                        currentPage={ this.state.pagination.current_page }
                         showScroll={ this.state.showScroll }
                    /> }
                </div>
            </div>
        );
    }
}

export default App;
