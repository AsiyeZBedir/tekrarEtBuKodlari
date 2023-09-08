import React, { useState } from 'react';

function App() {
  // Kullanıcının adını saklayacak state'i tanımlayın
  const [userName, setUserName] = useState('');
  
  // Kullanıcının adını güncellemek için bir işlev tanımlayın
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className="App">
      <h1>Ad Girişi Uygulaması</h1>
      <p>Merhaba, {userName !== '' ? userName : 'Misafir'}!</p>
      <input
        type="text"
        placeholder="Adınızı girin"
        value={userName}
        onChange={handleNameChange}
      />
    </div>
  );
}

export default App;
