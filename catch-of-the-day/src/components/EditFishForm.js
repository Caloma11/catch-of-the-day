import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class EditFishForm extends React.Component {

    static propTypes = {
        editFish: PropTypes.func,
        deleteFish: PropTypes.func,
        fish: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.string,
            desc: PropTypes.string
        }),
        fishKey: PropTypes.string
    }



    handleChange = (e) => {
        // Take a copy of the current fish
        const updatedFish = {
            ...this.props.fish,
            [e.currentTarget.name]: e.currentTarget.value };

        this.props.editFish(this.props.fishKey, updatedFish);
    }


    render(){
        const {name, price, status, desc, image} = this.props.fish;

        return(
            <div className="fish-edit">
            <input type="text" name="name" onChange={this.handleChange} value={name}/>
            <input type="text" name="price" onChange={this.handleChange} value={formatPrice(price)} />
            <select type="text" name="status" onChange={this.handleChange} value={status}>
                <option onChange={this.handleChange} value="available">Fresh!</option>
                <option onChange={this.handleChange} value="unavailable">Sold Out</option>
            </select>
            <input type="textarea" name="desc" onChange={this.handleChange} value={desc}/>
            <input type="text" name="image" onChange={this.handleChange} value={image}/>
            <button onClick={() =>  this.props.deleteFish(this.props.fishKey)}>Remove Fish</button>

            </div>
        )
    }
}

export default EditFishForm;
