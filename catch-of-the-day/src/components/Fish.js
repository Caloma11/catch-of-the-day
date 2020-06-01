import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {

    handleClick = () => {
        this.props.addToOrder(this.props.index);
    }

    render() {

        const { image, name, price, status, desc } = this.props.fish;

        const isAvailable = status === 'available';

        const isOnCart = this.props.order[this.props.index] != null;

        return(
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">
                        {formatPrice(price)}
                    </span>
                </h3>
                <p>{desc}</p>

                {isOnCart
                    ?<button  onClick={() => this.props.removeFromOrder(this.props.index)} >Remove From Cart</button>
                    :<button  onClick={this.handleClick} disabled={!isAvailable}>{isAvailable ? 'Add To Cart' : 'Sold Out'}</button>
                }

            </li>
        )
    }
}

export default Fish;
