import { Component } from 'react';

class ClsHello extends Component {
    constructor() {
        super();
        console.log('ClsHello constructor');
        this.state = {
            age: 10
        }

    }

    increaseAge() {
        this.setState(
            {
                age: this.state.age++
            }
        )
    }
    
    render() {
        console.log('ClsHello render');
        return (
            <div>
                <h1 className="hello">Cls Hello, {this.props.name}!</h1>
                <p>Your age is {this.state.age}</p>
            </div>
        );
    }

    componentDidMount() {
        setInterval(() => {
            this.increaseAge();
        }, 1000);
        console.log('ClsHello mounted');
    }

    componentDidUpdate() {
        console.log('ClsHello updated');
    }
}

export default ClsHello;
