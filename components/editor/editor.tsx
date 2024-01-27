"use client"
import { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './editor.css'

const TextEditor = () => {

  const [value, setValue] = useState('');
  const quill = new Quill('#editor', {
   
    modules: {
      toolbar: '#toolbar'
    
  }});

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',"color",
    'list', 'bullet', 'link', 'image',
  ];
  console.log("value: ", value);
  return ( <div >
    <div id="toolbar">
 
  <button className="ql-bold"></button>
  <button className="ql-italic"></button>

 
  <button id="custom-button"></button>
</div>
    <div id="editor" className='w-full'></div><ReactQuill  className='custom-editor' formats={formats} theme="snow" value={value} onChange={setValue} /></div> );
}
 
export default TextEditor;