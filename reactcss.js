import './App.css';

function App() {
  return (
    <div className="App">
      {/* JSX içinde CSS sınıfını kullanabilirsiniz */}
      <h1 className="title">Merhaba, React!</h1>
    </div>
  );
}

export default App;
//////////////////////////////////////
function App() {
  const titleStyle = {
    fontSize: '24px',
    color: 'blue',
  };

  return (
    <div>
      <h1 style={titleStyle}>Merhaba, React!</h1>
    </div>
  );
}
/////////////////////////////////
// App.module.css
.title {
  font-size: 24px;
  color: blue;
}

// App.js
import styles from './App.module.css';

function App() {
  return (
    <div>
      <h1 className={styles.title}>Merhaba, React!</h1>
    </div>
  );
}

export default App;
