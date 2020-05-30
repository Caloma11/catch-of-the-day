import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }

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


    addToOrder = (key) => {
        console.log(key)
        // Take a copy of state
        const order = {...this.state.order};
        // Either add to the list or update it's value
        order[key] = order[key] + 1 || 1
        // Call setstate to update our state object
        this.setState({order});

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
                        {Object.keys(this.state.fishes).map((key) => <Fish addToOrder={this.addToOrder} fish={this.state.fishes[key]} key={key} index={key} /> )}
                    </ul>
                </div>
                <Order order={this.state.order} fishes={this.state.fishes}/>
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}


export default App;
