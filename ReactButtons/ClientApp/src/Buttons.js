import React from 'react';
import randomColor from 'randomcolor';

class Buttons extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
            incrementBy: 1,
            color: randomColor()
        };

    }


    increment = () => {
        this.setState({ counter: this.state.counter + this.state.incrementBy })
    }

    incrementBy = () => {
        this.setState({ incrementBy: this.state.incrementBy + 1 })
    }

    changeColor = () => {
        this.setState({ color: randomColor() });
    }

    render() {

        const colorStyle = {
            color: this.state.color
        };

        return (
            <div className='row'>
                <div className='col-md-2 col-md-offset-5 well'>
                    <h2 style={colorStyle}> {this.state.counter}</h2>
                    <button onClick={this.increment} className="btn btn-danger">Increment</button>
                </div>
                <div className='col-md-2 col-md-offset-5 well'>
                    <h2>{this.state.incrementBy}</h2>
                    <button onClick={this.incrementBy} className="btn btn-primary">Increment By</button>
                </div>
                <div className='col-md-2 col-md-offset-5 well'>
                    <button onClick={this.changeColor} className="btn btn-warning">Change Color</button>
                </div>
            </div >

        )
    }


}
export default Buttons;