/*
 <div id='parent'>
    <div id='child'>
        <h1 id='heading'></h1>
        <h2></h2>  add one more sibling to do this 
    </div>
 </div>
*/

const parent = React.createElement("div",
 {id: "parent"}, 
    React.createElement("div",
    {
        id: "child",
    },
    [
    React.createElement("h1", {id: "heading"}, "Hello I am h1 tag inside child div inside parent div") ,// make it 
    //array of children to add more children
    React.createElement("h2",{id:"heading 2"},"Hello I am h2 tag")
   ] ));

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);