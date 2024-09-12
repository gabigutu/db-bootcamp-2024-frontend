import { Component, createElement } from 'react';

class ClsHello extends Component {
    constructor() {
        super();
        console.log('ClsHello constructor');
        this.state = {
            age: 10
        }
    }

    increaseAge() {
        console.log('test');
        this.setState({
            age: ++this.state.age
        }, () => {
            console.log(`Noua varsta este ${this.state.age}`);
        })
    }

    render() {
        console.log('ClsHello render');
        return (
            <>
                <p>Alt paragarf</p>
                <div>
                    <h1 className="hello">Cls Hello, {this.props.name}!</h1>
                    <p>Your age is {this.state.age}</p>
                </div>
            </>
        );
        // const h1Elem = createElement('h1', {
        //     className: 'hello'
        // }, 'Cls Hello, ' + this.props.name);
        // const pElem = createElement('p', {}, 'Your age is ' + this.state.age);
        // return createElement('div', {
        //     id: 'my-div',
        //     className: 'class1 class2'
        // }, [h1Elem, pElem]);
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
