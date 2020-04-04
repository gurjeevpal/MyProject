import React from 'react';

import RestaurantInfo from './RestaurantInfo'

class RestaurantList extends React.Component {
    constructor(props){
        super(props);

        this.checkScroll = this.checkScroll.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.checkScroll);
    }

    checkScroll(){
        if(this.props.showScroll){
            let currScroll = document.body.scrollTop,
                totalHeight = document.body.scrollHeight,
                visibleHeight = document.body.clientHeight,
                scrollHeight = currScroll + visibleHeight;

            if (totalHeight <= scrollHeight) {
                if(this.props.currentPage !== this.props.numPages){
                    this.props.onScroll(this.props.currentPage + 1);
                }
            }
        }
    }

    render() {
        let cards = [];

        this.props.results.forEach((restaurant) => {
            cards.push(
                <RestaurantInfo restaurant={ restaurant } />
            )
        });

        return (
            <div className='restaurant-list'>
                { cards }
            </div>
        )
    }
}
 export default RestaurantList;
