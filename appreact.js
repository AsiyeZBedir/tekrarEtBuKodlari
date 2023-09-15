import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]); // Yapılacaklar listesi için state
  const [taskText, setTaskText] = useState(''); // Eklenecek yeni görev metni

  // Yeni görev ekleme fonksiyonu
  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  // Görevi silme fonksiyonu
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Yapılacaklar Listesi</h1>
      <div>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Yeni görev ekleyin"
        />
        <button onClick={addTask}>Ekle</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
