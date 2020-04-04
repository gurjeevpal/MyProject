import React from 'react';
import Price from './Price'

class DisplayInfo extends React.Component {
    constructor(props){
        super(props);

        this.address = `${this.props.restaurant.address}
            ${this.props.restaurant.city}, ${this.props.restaurant.state}
            ${this.props.restaurant.postal_code}`;
    }

    render(){
        return (
            <div className='info'>
                <div className='name'>{ this.props.restaurant.name }</div>
                <Price price={ this.props.restaurant.price } />
                  <div className='address'>{ this.props.restaurant.address }</div>
                  <div className='address'>{ this.props.restaurant.area }</div>
                  <div className='address'>{ this.props.restaurant.postal_code }</div>
            </div>
        )
    }
}
export default DisplayInfo;
