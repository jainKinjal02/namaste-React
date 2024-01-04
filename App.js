import React  from 'react';
import ReactDOM from 'react-dom/client';


const Title = ()=> (
    <h1 className="heading">
        This is title compoennt
    </h1>
    );

// React Component
const HeadingComponent = () => (
    <div>
        <h1>This is react functional component</h1>
        {Title()}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);