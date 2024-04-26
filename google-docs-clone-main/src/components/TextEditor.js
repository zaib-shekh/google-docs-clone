import { EditorState } from 'draft-js';
import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import SideBar from './SideBar';
function TextEditor() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange =(editorState)=>{
        setEditorState(editorState);
    }
  return (
    <div className=' bg-[#F8F9FA] pb-16'>
        <SideBar/>
        <Editor 
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName='flex sticky top-0 z-50 !justify-center mx-auto !bg-sky-50 !rounded-full'
        editorClassName='editor mt-5 bg-white shadow-lg 
        max-w-3xl min-h-screen mx-auto mb-12 border'/>
        
    </div>
  )
}

export default TextEditor