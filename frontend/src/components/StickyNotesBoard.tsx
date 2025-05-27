
import React, { useState } from 'react';
import Draggable from 'react-draggable';

const StickyNotesBoard: React.FC = () => {
  const [notes, setNotes] = useState([{ id: 1, text: 'Nova Nota' }]);

  const addNote = () => setNotes([...notes, { id: Date.now(), text: 'Nota' }]);

  return (
    <div>
      <h2>Post-its Arrastáveis</h2>
      <button onClick={addNote}>Adicionar Nota</button>
      {notes.map(note => (
        <Draggable key={note.id}>
          <div style={{ width: 100, height: 100, backgroundColor: 'yellow', margin: 10, padding: 5 }}>
            {note.text}
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default StickyNotesBoard;
    