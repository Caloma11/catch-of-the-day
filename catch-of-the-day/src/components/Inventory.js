import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {

    static propTypes = {
        fishes: PropTypes.object,
        addFish: PropTypes.func,
        loadSamples: PropTypes.func,
        editFish: PropTypes.func,
        deleteFish: PropTypes.func
    }


    render() {
        return(
            <div className="inventory">
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map((key) => <EditFishForm key={key} fishKey={key} editFish={this.props.editFish} fish={this.props.fishes[key]} deleteFish={this.props.deleteFish} />)}
                <AddFishForm addFish={this.props.addFish} loadSamples={this.props.loadSamples}/>
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
            </div>
        );
    }
}

export default Inventory;
