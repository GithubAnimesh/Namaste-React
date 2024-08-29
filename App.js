import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement('h1', {}, 'This is React form Akshay');
// const jsxHeading = <h1 id="heading">This is JSX</h1>

// react element inside react component.
const Header2 = (
     <h1 className="Header2">This is header2</h1>
);

const Header = () =>(
    <div>
    {Header2}
     <h1 className="heading">This is React Funcational Component</h1>
     </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>);