import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello/Hello';
import ClsHello from './components/ClsHello/ClsHello';
import Todo from './components/Todo/Todo';

function App() {
  const car = {
    make: 'Dacia',
    model: 'Dokker'
  };
  return (
    <main>
      <div className="App">
        <h1>Test</h1>
        <Hello name="ionel" car={car}></Hello>
        {/* <ClsHello name="ionel"></ClsHello> */}
        <Todo></Todo>
      </div>
      <p>Lorem ipsum</p>
    </main>
  );
}

export default App;
