import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

const Inventory = (props) => {
    return(
        <div className="inventory">
            <h2>Inventory</h2>
            {Object.keys(props.fishes).map((key) => <EditFishForm key={key} fishKey={key} editFish={props.editFish} fish={props.fishes[key]} deleteFish={props.deleteFish} />)}
            <AddFishForm addFish={props.addFish} loadSamples={props.loadSamples}/>
            <button onClick={props.loadSamples}>Load Sample Fishes</button>
        </div>
    );
}

export default Inventory;
