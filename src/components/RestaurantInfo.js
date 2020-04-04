import React from 'react';
import DisplayInfo from './DisplayInfo'

class RestaurantInfo extends React.Component {
    render(){
        return (
            <div className='card'>
                <img src={ this.props.restaurant.image_url }/>
                <DisplayInfo restaurant={ this.props.restaurant } />
            </div>
        );
    }
}

export default RestaurantInfo;
