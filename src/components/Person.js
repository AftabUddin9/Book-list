import React, { Component } from 'react';

// function Person() {
//     return (
//         <div>
//             <h1>I am person component.</h1>
//         </div>
//     );
//     // return React.createElement('div', null, React.createElement('h1', null, "I am person component."));
// }

// Arrow function representation
let Person = (props) => {
    return (
        <div>
            <h1>I am person component. Number: {Math.random() * 100}</h1>
            <h3> Name {props.name} and Age {props.age} years</h3>
            <h4>Extra info: {props.children}</h4>
        </div>
    );
}

// class representation
// class Person extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>I am person component. Number: {Math.random() * 100}</h1>
//                 <h3> Name {this.props.name} and Age {this.props.age} years</h3>
//                 <h4>Extra info: {this.props.children}</h4>
//             </div>
//         );
//     }
// }

export default Person;