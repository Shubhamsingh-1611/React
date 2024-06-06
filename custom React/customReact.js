


function Render(reactElement,maincontainer) {
    // !this is not dyanmic because props are passe manually
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href)

    // maincontainer.appendChild(domElement);
    // ! makin more dynamic using loops
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
  
    for(prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop]) // since prop is string therefore we have used sqare bracket
        console.log(reactElement.props.prop);
    }
    console.log(reactElement.props.prop)
    console.log(domElement)
    maincontainer.appendChild(domElement);
    
}
const reactElement= {
    type:'a',
    props: {
        href:'https://google.com',
        target:'__blank',
    },
    children:"Click me to visit Google",
}
console.log(reactElement.props["href"])
const container = document.getElementById('root');
Render(reactElement,container)