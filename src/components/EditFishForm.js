import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
    static propTypes = {
        fish: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number}),
        index: PropTypes.string,
        updateFish: PropTypes.func
    };

    handleChange = event => {
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish);
    };

    render() {
        return <div className="fish-edit">
            <input onChange={this.handleChange}
                   type="text" name="name"
                   defaultValue={this.props.fish.name}
            />
            <input onChange={this.handleChange}
                   type="text"
                   name="price"
                   defaultValue={this.props.fish.price}
            />
            <select onChange={this.handleChange}
                    name="status"
                    value={this.props.fish.status}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea onChange={this.handleChange}
                      name="desc"
                      defaultValue={this.props.fish.desc}
            />
            <input onChange={this.handleChange}
                   type="text"
                   name="image"
                   defaultValue={this.props.fish.image}
            />
            <button onClick={() => this.props.removeFish(this.props.index)}>Remove Fish</button>
        </div>;
    }
}

export default EditFishForm;
