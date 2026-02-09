import React from "react";
import "../../App.css";
import ReactDOM from 'react-dom';
import { PDFViewer} from '@react-pdf/renderer';
import Example from "./Example";



export default function Example() {
  return (
    <div className="example">
       <PDFViewer>
            <Example />
        </PDFViewer>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
