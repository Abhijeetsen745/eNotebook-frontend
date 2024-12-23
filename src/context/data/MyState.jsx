import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import toast from 'react-hot-toast'

function MyState(props) {

  //* Loading state
  const [loading, setLoading] = useState(false);

  //* get Notes
  const [allNotes, setAllNotes] = useState([]);
  
  //* Get All Notes Functions
    const getAllNotes = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_HOST_URL}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
        const notesData = await res.json();
        console.log(notesData)
        setAllNotes(notesData);
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');

    const addNote = async () => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_HOST_URL}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      });
  
      //* response
      const noteData = await res.json();
      // console.log(noteData)
      getAllNotes();
  
      if (noteData.error) {
        toast.error(noteData.error)
        // console.log(noteData.error)
      } else {
        toast.success(noteData.success);
        // console.log(noteData.success)
      }
  
      //* after submit data all fields empty
      setTitle("");
      setDescription("");
      setTag("");
  
    }

    //delete note
    const deleteNote = async (id) => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_HOST_URL}/api/notes/deletenote/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
          }
        });
  
      //* response
      const noteData = await res.json();
      getAllNotes();
      // console.log(noteData)
      toast.success(noteData.success)
    }
  

  return (
    <MyContext.Provider value={{ allNotes, getAllNotes,loading, title, setTitle, description, 
      setDescription, tag, setTag,
      addNote,deleteNote}} >
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState