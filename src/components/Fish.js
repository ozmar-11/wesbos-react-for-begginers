import React from "react";
import PropTypes from "prop-types";
import {formatPrice} from "../helpers";

class Fish extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }).isRequired,
        addToOrder: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { image, name, desc, status, price } = this.props.details;
        const isAvailable = status === 'available';
        return(
            <li className="menu-fish">
                <img src={image} alt={desc}/>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button
                    onClick={() => this.props.addToOrder(this.props.index)}
                    disabled={!isAvailable}>{isAvailable ? 'Add to cart' : 'Sold Out!'}</button>
            </li>
        );
    }
}

export default Fish;
