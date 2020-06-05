import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {

    static propTypes = {
        fishes: PropTypes.object,
        order: PropTypes.object,
        removeFromOrder: PropTypes.func
    }


    renderOrder = (key) => {
        // Make sure the fishes come from firebase before loading the order
        const fish = this.props.fishes[key];

        const isOnOrder = this.props.order[key] != null;

        if (!fish || !isOnOrder) {
            return null;
        }

        const count = this.props.order[key];
        const isAvailable = fish.status === 'available';

        const transitionOptions = {
            classNames: 'order',
            key: key,
            timeout: {enter: 250, exit: 250}
        }



        if (!isAvailable) {
            return(
                <CSSTransition {...transitionOptions} >
                    <li key={key}>
                        Sorry, {fish ? fish.name : 'fish'} is not longer available...
                        <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
                    </li>
                </CSSTransition>
            )
        }

        return (
            <CSSTransition {...transitionOptions} >
                <li key={key}>
                    <span>
                        <TransitionGroup
                            className="count"
                            component="span"
                        >
                            <CSSTransition
                                classNames="count"
                                timeout={{enter: 250, exit: 250}}
                                key={count}
                            >
                                <span>{count} lbs</span>
                            </CSSTransition>
                        </TransitionGroup>

                        {fish.name}

                        {formatPrice(count * fish.price)}
                        <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
                    </span>
                </li>
            </CSSTransition>
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
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                    <div className="total">
                        <strong>{formatPrice(total)}</strong>
                    </div>
            </div>
        )
    }
}

export default Order;
