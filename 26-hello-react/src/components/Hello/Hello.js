import './Hello.css';


function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Hello(props) {
    return <>
        <h1 className="hello">Hello, {props.name ? capitalizeFirstLetter(props.name) : 'Stranger'}!</h1>
        <p>You are driving a {props.car?.make ? props.car.make : 'Uknown'} {props.car?.model ? props.car.model : 'Unknown'}</p>
      </>;
}

export default Hello;
