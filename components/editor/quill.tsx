import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
interface  QuillEditorProps{
  value: string;
  onChange:(value:any) => void;
}
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
    ['formula'], // Formula button for mathematical formulas
    ['indent', 'outdent'], // Increase and decrease indentation
    ['direction'], // Text direction (left-to-right or right-to-left)
    ['size'], // Font size
    ['script'], // Subscript and Superscript
    [{ header: 1 }, { header: 2 }], // Additional header options
    ['font'], // Font family
    ['underline', 'strike', 'sub', 'super'], // Additional text formatting
    ['align', 'color', 'background'], // Additional alignment and color options
    ['image', 'video', 'link'], // Additional media options
    [{ table: [] }], // Table
    [{ memo: 'Memo' }], // Custom Memo button
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};

const QuillEditor:React.FC<QuillEditorProps> = ({ value, onChange }) => {

  return (  <ReactQuill
    theme="snow"
    placeholder="Type here"
    value={value}
    onChange={onChange}
    modules={modules}
  />);
}
 
export default QuillEditor;









