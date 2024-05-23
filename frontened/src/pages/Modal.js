import React from 'react';
import './Register'

const Modal = ({active, setActive, children}) =>{

    function clickHandler(){
        setActive(false);
        document.getElementById('name').value='';
        document.getElementById('surname').value='';
        document.getElementById('email').value='';

        document.getElementById('fs').value='';
        document.getElementById('sc').value='';
        document.getElementById('tr').value='';
        document.getElementById('fr').value='';
        
    }
    
    return(
        <div className = {active ? "modal active" : "modal"} onClick={clickHandler}>
            <div className= {active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
} 
export default Modal;