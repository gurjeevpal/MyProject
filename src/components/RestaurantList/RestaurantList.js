import React from 'react';
import { connect } from 'react-redux';
import Price from './Price';
//import '../../styles.scss';


let RestaurantList = ({ restaurantDetails  }) => {
    let cards = [];
    let restaurantJson = restaurantDetails.json;
    if(restaurantJson && restaurantJson.length > 0 ){
          restaurantJson.forEach((restaurant) => {
            cards.push(
                <div className='cardMain'>
                    <img src={ restaurant.image_url } alt="restro"/>
                    <div className='info infoMain'>
                        <div className='name'>{ restaurant.name }</div>
                        <Price price={ restaurant.price } />
                        <div className='address'>{ restaurant.address }</div>
                        <div className='area'>{ restaurant.area }</div>
                        <div className='postalCode'>{ restaurant.postal_code }</div>
                    </div>
                </div>
            )
        });
    }
    return (
        <div className='restaurant-list'>
            { cards }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        restaurantDetails: state.data
    };
};

export default connect(mapStateToProps,null)(RestaurantList);
