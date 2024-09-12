import { useState } from 'react';
import ChildHello from '../ChildHello/ChildHello';
import './Hello.css';


function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Hello(props) {
  const [user, setUser] = useState({
    name: 'Vasilica',
    age: 24
  });
  const [arr, setArr] = useState([8, 2, 3]);
  
  let [ nrLoto, setNrLoto] = useState(9);

  const incrementeazaNrLoto = () => {
    setNrLoto(++nrLoto);
    console.log(`NrLoto: ${nrLoto}`);
  }

  // setInterval(() => {
  //   incrementeazaNrLoto();
  // }, 1000);

  const incrementeazaVarsta = () => {
    user.age++;
    setUser({
      name: user.name,
      age: user.age
    });
    console.log(user);
  };

  const adaugaNumar = () => {
    // arr.push(Math.round(Math.random() * 10));
    console.log(arr, typeof arr);
    // setArr([...arr]);

    const altArr = arr.concat(Math.round(Math.random() * 10));
    setArr(altArr);
  }


  return <>
    <h1 className="hello">Hello, {props.name ? capitalizeFirstLetter(props.name) : 'Stranger'}!</h1>
    <p>You are driving a {props.car?.make ? props.car.make : 'Uknown'} {props.car?.model ? props.car.model : 'Unknown'}</p>
    <ul>
      <li>User name: {user.name}</li>
      <li>User age: {user.age}</li>
    </ul>
    <p>
      Numbers are:
      {arr.map((number) => number + ', ')}
    </p>
    <button onClick={incrementeazaVarsta}>Incrementeaza varsta</button>
    <button onClick={adaugaNumar}>Adauga numar</button>

    <br /><br />
    <ChildHello numar={nrLoto} actiuneDinParinte={incrementeazaNrLoto} />
  </>;
}

export default Hello;
