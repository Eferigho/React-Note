import React, {useState} from 'react';
import AddNote from './AddNote';
import SearchNote from './SearchNote';

function Note() {

    const [display, setDisplay] = useState({
        addComponent :false,
        searchComponent:false
    })

    const onClickHandler = (display)=>{
        setDisplay({
            ...display,
            [display] : true
        })
    }
  return (
    <div className="App">
        {display.addComponent?<AddNote/>:null}
        {display.searchComponent?<SearchNote/>:null}
        <button onClick={()=>onClickHandler('addComponent')}>Add Note</button>
    </div>
  );
}

export default Note;
