import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

let dropzoneRef1;
let dropzoneRef2;

class App extends Component {

  render() {
    return (
      <div>
        <Dropzone ref={(node) => { dropzoneRef1 = node; }} onDrop={(accepted, rejected) => { alert(accepted) }}>
          <p>Drop files here.</p>
        </Dropzone>
        <button type="button" onClick={() => { console.log('this will execute twice'); dropzoneRef1.open() }}>
          Open File Dialog
      </button>
      <Dropzone ref={(node) => { dropzoneRef2 = node; }} onDrop={(accepted, rejected) => { alert(accepted) }}>
        <p>Drop files here.</p>
      </Dropzone>
      <button type="button" onClick={() => { console.log('this will execute once');}}>
        Open File Dialog
      </button>
    </div>
    );
  }
}

export default App;
