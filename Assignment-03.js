/*
Create a nested header Element using React.create Element(h1, h2, h3 inside a div with class "title").
*/

import React from "react";
import ReactDOM from "react-dom/client";

/* creating react element by createElement
const header = React.createElement('div', {class:"title"}, [
    React.createElement('h1', {}, 'This is header 1'),
    React.createElement('h2', {}, 'This is header 2'),
    React.createElement('h3', {}, 'This is header 3'),
]);
*/

//creating react element by JSX
/*
const header = (
    <div className="title">
        <h1>This is header 1 JSX</h1>
        <h2>This is header 2 JSX</h2>
        <h3>This is header 3 JSX</h3>
        { 100 + 100} // we can use any features of JS inside this.
    </div>
);
*/
/* functional component
const Title = () => <p>This is paragraph.</p>;
const FunctionComponent = () => (
    <div className="title">
        <h1>This is header 1 FunctionComponent</h1>
        <h2>This is header 2 FunctionComponent</h2>
        <h3>This is header 3 FunctionComponent</h3>
        {<Title />} // composition of component(component inside component)
        {header}
    </div>
    
);
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FunctionComponent />);