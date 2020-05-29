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

    loadSamples = () => {
        this.setState({fishes: sampleFishes})
    }


    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline={"Fresh Seafood Market"}/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map((key) => <Fish fish={this.state.fishes[key]} key={key}/> )}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}


export default App;
