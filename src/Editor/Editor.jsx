import React, { useState } from 'react'
import { marked } from 'marked';
import './Editor.css'
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaExpandAlt } from "react-icons/fa";

const Editor = () => {
    const [text, setText] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo(https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`);
    const [editorIcon, setEditorIcon] = useState(false);
    const [previewIcon, setPreviewIcon] = useState(false);
    

    const handleEditorClick = () => {
        setEditorIcon((prevIcon) => !prevIcon);
         if(!editorIcon) setPreviewIcon(false);
    };
    const handlePreviewClick = () => {
        setPreviewIcon((prevIcon) => !prevIcon);
        if(!previewIcon)  setEditorIcon(false); 
    }



  return (
    <div id='main'>
      <div id="editor-container" style={{
        height: editorIcon ? '100vh' : '15rem',
        display: previewIcon ? 'none' : 'flex',
        
      }}>
        <div id="editor-header">
        <h3 id='head-text'>Editor</h3> <div onClick={handleEditorClick} id='icons'>{editorIcon ? <FaExpandAlt /> : <FaExpandArrowsAlt  />  }</div>
         </div>
    <textarea name="text" id="editor" placeholder='Type your markdown here...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ height: '100%', overflowY: 'auto', flex: 1 }}
    ></textarea>
      </div>
      
      <div id="preview-container" style={{
        height: previewIcon ? '100vh' : '',
        display: editorIcon ? 'none' : 'flex',
        flexDirection: 'column'
      }}>
        <div id="preview-header">
            <h3 id="head-text">Previewer</h3> <div onClick={handlePreviewClick} id='icons'>{previewIcon ? <FaExpandAlt /> : <FaExpandArrowsAlt  />  }</div>
        </div>

    <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text)}} style={{
        height: '100%', overflowY: 'auto'
    }}></div>
       
      </div>
    </div>
  )
}

export default Editor
