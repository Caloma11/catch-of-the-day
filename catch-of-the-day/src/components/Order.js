import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {

    renderOrder = (key) => {
        // Make sure the fishes come from firebase before loading the order
        const fish = this.props.fishes[key];

        const isOnOrder = this.props.order[key] != null;

        if (!fish || !isOnOrder) {
            return null;
        }

        const count = this.props.order[key];
        const isAvailable = fish.status === 'available';

        if (!isAvailable) {
            return(
                <li key={key}>Sorry, {fish ? fish.name : 'fish'} is not longer available...</li>
            )
        }

        return (
            <li key={key}>
                {count} lbs {fish.name}

                {formatPrice(count * fish.price)}
            </li>
        )
    }



    render() {

        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal,key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';

            if (isAvailable) {
                return (prevTotal + (count * fish.price))
            }

            return prevTotal;

        }, 0);

        return(
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                    <div className="total">
                        <strong>{formatPrice(total)}</strong>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Order;
