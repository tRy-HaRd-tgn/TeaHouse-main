import React, { useState } from 'react';
import {Link} from "react-router-dom";
import ModalIcon from './Modal';
    function Register(){

        const [modalActive, setModalActive] = useState(false)
        return(
            
            
            <body className='container'>
                <div className='container_body'>
                    <div className='container_body_div_img'>
                        <img className='container_body_img' src='/img/sign.svg'></img>
                    </div>
                    <form action='' className='container_form' onSubmit={handleSubmit}>
                        <input className='container_form_input'  id='name' placeholder='Имя' type='text' required></input>
                        <input className='container_form_input'  id='surname' placeholder='Фамилия' type='text' required></input>
                        <input className='container_form_input'  id='email' placeholder='Эл. почта' type='email' required></input>
                        <div className='container_form_div_btn'>
                            <button className='container_form_btn' type='submit'>Регистрация</button>
                        </div>
                    </form>
                    <div className='container_body_footer'>
                        <p className='container_footer_p'>Уже есть аккаунт?</p>
                        <Link className="container_footer_a" to='/'>Login</Link>
                    </div>
                    <ModalIcon active={modalActive} setActive={setModalActive}>
                        <div className='modal_container'>
                            <p className='modal_p'>введите одноразовый код отправленный на эл. почту</p>
                            <form onSubmit={handleSubmit}>
                                <div className='modal_form'>
                                    <input id='fs' onChange={checkLen} className='modal_form_input' type='number'></input>
                                    <input id='sc' onChange={checkLen} className='modal_form_input' type='number'></input>
                                    <input id='tr' onChange={checkLen} className='modal_form_input' type='number'></input>
                                    <input id='fr' onChange={checkLen} className='modal_form_input' type='number'></input>
                                </div>
                                <div className='modal_div'>
                                    <button className='modal_btn disable' id='modal_btn'  type='submit'><p className='modal_btn_p'>запросить код повторно</p></button>
                                </div>
                                
                            </form>
                            <p className='modal_p_grey' id='timer_description' >запросить код повторно</p>
                            <h2 className='modal_p_grey timer'  id='taimer'></h2>
                        </div>
                    </ModalIcon >
                </div>
            </body>

            
            
        );
        function checkLen(e) 
        {
            if (e.target.value.length > 1) 
            {
                e.target.value=e.target.value.slice(0,-1)
            }
        }
        function handleSubmit(e)
        {
            e.preventDefault();
            setModalActive(true); 
            document.getElementById('fs').value='';
            document.getElementById('sc').value='';
            document.getElementById('tr').value='';
            document.getElementById('fr').value='';
            
            let num=15;
            let sec = document.querySelector('#taimer')
            sec.textContent=num;
            sec.classList.remove("disable");
            let sec_description = document.querySelector('#timer_description');
            sec_description.classList.remove('disable');
            let btn = document.querySelector('#modal_btn');
            btn.classList.add('disable');
            
            var timer = setInterval(function()
            {
                if(num===-1)
                { 
                    sec.classList.add("disable");
                    sec_description.classList.add('disable');
                    btn.classList.remove('disable');
                }
                if(num < 0 )
                {   
                    clearInterval(timer);
                } 
                else 
                {
                    sec.textContent=num;

                }
                num -= 1;
            }, 1000);
        }

              
    } 

export default Register;