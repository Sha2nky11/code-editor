import {memo, useState} from 'react'
// import Iframe from 'react-iframe'
import { Button, Divider, Grid } from 'semantic-ui-react';
import './App.scss';
import AceEditor from 'react-ace'
import 'ace-builds/webpack-resolver'
import "ace-builds/src-noconflict/ext-language_tools";
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-html'


function App() {

  const [isFrame,setFrame] = useState(false);
  const [html,setHtml] = useState("");
  

  const isIframe = () => {
    setFrame(true);
  }
 
  
return (
    <div className="App">
      
    <Grid container columns={2} padded="vertically">
      <Grid.Column>  
         <div>
          <h2> CODE EDITOR </h2>
           <Button onClick={isIframe} color="orange" > Submit </Button>
         </div>  
         <Divider horizontal/>
            <AceEditor
                    style={{
                      height: '585px',
                      width: '100%',
                  }}
                    mode="html"
                    theme="monokai"
                    value = {html}
                    onChange={setHtml}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{
                        $blockScrolling: true
                    }}
                    fontSize={18}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    setOptions={{
                      enableBasicAutocompletion: true,
                      enableLiveAutocompletion: true,
                      enableSnippets: true,
                      showLineNumbers: true,
                      tabSize: 4,
                  }}
      /> 
      </Grid.Column>
    
    <Grid.Column>

    {isFrame && 
     <iframe className="Iframe" height= "578px" width="500px" srcdoc={html} title="Output">
    </iframe>}
      </Grid.Column>
    </Grid>        
    </div>

  );
}

export default memo(App);
