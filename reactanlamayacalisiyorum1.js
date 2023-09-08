import React from 'react';

function App() {
  // Başlık ve liste öğeleri için verileri tanımlayın
  const pageTitle = "React Örnek Uygulama";
  const listItems = [
    "Öğe 1",
    "Öğe 2",
    "Öğe 3",
    "Öğe 4",
    "Öğe 5"
  ];

  return (
    <div className="App">
      {/* Başlık */}
      <h1>{pageTitle}</h1>

      {/* Liste */}
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
