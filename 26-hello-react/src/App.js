import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ClsHello from './components/ClsHello/ClsHello';
import Hello from './components/Hello/Hello';
import TodoDetails from './components/TodoDetails/TodoDetails';
import TodoWithNavigate from './components/TodoWithNavigate';

function App() {
  const car = {
    make: 'Dacia',
    model: 'Dokker'
  };
  return (
    <Router>
      <main>
        <div className="App">
          <h1>Test</h1>
          {/* <Hello name="ionel" car={car}></Hello> */}
          {/* <ClsHello name="ionel"></ClsHello> */}
          {/* <Todo></Todo> */}
        </div>
        <p>Lorem ipsum</p>
      </main>
      <nav>
        <ul>
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/hello">ClsHello</Link></li>
          <li><Link to="/todo">Todo</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Hello />} />
        <Route path='/hello' element={<ClsHello />} />
        <Route path='/todo' element={<TodoWithNavigate test='Stefan' />} />
        <Route path='/todo/:id' element={<TodoDetails />} />
      </Routes>


    </Router>
  );
}

export default App;
