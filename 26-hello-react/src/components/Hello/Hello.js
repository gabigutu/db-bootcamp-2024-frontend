import './Hello.css';


function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Hello(props) {
    return <>
        <h1 className="hello">Hello, {capitalizeFirstLetter(props.name)}!</h1>
        <p>You are driving a {props.car.make} {props.car.model}</p>
      </>;
}

export default Hello;
