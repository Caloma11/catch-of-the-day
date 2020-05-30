import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    myInput = React.createRef();

    goToStore = (e) => {
        e.preventDefault();
        this.props.history.push(`/store/${this.myInput.current.value}`)
    }

    // handleChange = (e) = {
    //     this.myInput.value = e.currentTarget.value;
    // }


    render() {
        return(
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store:</h2>
                <input type="text"
                 required placeholder="Store Name"
                  defaultValue={getFunName()}
                    onChange={this.handleChange}
                    ref={this.myInput}
                  />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;
