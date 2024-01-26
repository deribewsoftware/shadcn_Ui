"use client"
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {

  const [value, setValue] = useState('');
  const modules = {
    toolbar: [
      [{ 'header': [1, 2,3,4,5,6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'link', 'image',
  ];
  console.log("value: ", value);
  return (  <ReactQuill modules={modules} formats={formats} theme="snow" value={value} onChange={setValue} />);
}
 
export default TextEditor;