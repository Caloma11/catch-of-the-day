import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base'

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }

    componentDidMount() {

        const localStorageRef = localStorage.getItem(this.props.match.params.storeId)

        if (localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)})
        }

        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }


    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
    }

    // Done automatically by firebase
    // componentWillMount() {
    //     base.removeBinding(this.ref);
    // }


    addFish = (fish) => {
       // Take a copy of the fishes
       const fishes = {...this.state.fishes };
       // Add new fish
       fishes[`fish${Date.now()}`] = fish;
       // Update state
       this.setState({
            fishes: fishes
        });

    }


    editFish = (key, editedFish) => {
        // Take a copy of the fishes
        const fishes = {...this.state.fishes };
        //Update fish
        fishes[key] = editedFish;

        //Update state
        this.setState({
            fishes: fishes
        })

    }


    addToOrder = (key) => {
        // Take a copy of state
        const order = {...this.state.order};
        // Either add to the list or update it's value
        order[key] = order[key] + 1 || 1
        // Call setstate to update our state object
        this.setState({ order });

    }

    removeFromOrder = (key) => {
        // Take a copy of state
        const order = {...this.state.order};
        // Set the fish we don't want to null (for firebase)
        order[key] = null;
        // Update state
        this.setState({ order })
    }



    deleteFish = (key) => {
        // Take a copy of state
        const fishes = {...this.state.fishes};
        // Set the fish we don't want to null (for firebase)
        fishes[key] = null;
        // Update state
        this.setState({ fishes })
    }




    loadSamples = () => {
        this.setState({fishes: sampleFishes})
    }


    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline={"Fresh Seafood Market"}/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map((key) => <Fish addToOrder={this.addToOrder} fish={this.state.fishes[key]} key={key} index={key} order={this.state.order} removeFromOrder={this.removeFromOrder} /> )}
                    </ul>
                </div>
                <Order order={this.state.order} fishes={this.state.fishes}/>
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} fishes={this.state.fishes} editFish={this.editFish} deleteFish={this.deleteFish} />
            </div>
        )
    }
}


export default App;
