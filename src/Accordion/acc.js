import React, { useState } from 'react';
import "./acc.css";
import {FaMinus, FaPlus } from "react-icons/fa6";

const Acc = () => {

    const data = [
        { que: "What is HTML?",hide:false, answer: "HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser" },
        { que: "What is Css?",hide:false, answer: "CSS is a computer language for laying out and structuring web pages,This language contains coding elements" },
        { que: "What is Javascript?",hide:false, answer: "JavaScript is a programming language used to create dynamic content for websites. It achieves this  " },
        { que: "What is React?",hide:false, answer: "React is a free and open-source front-end JavaScript library for building user interfaces based on component" },
        { que: "What is Git?",hide:false, answer: "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers" },
    ]

    

    const [list,setList ] = useState(data)

    const handleClick = (i)=>{
          setList(list.map((ele,ind)=>{
             if(i===ind){
                return {...ele,hide:ele.hide==true?false:true}
             }
             else{
                return {...ele,hide:false}
             }
          }))       
    }

    return (
        <div className='acc-container'>
            {
                list.map((ele, ind) => {
                    return <div className='main-container'>
                        <div className='que' onClick={()=>handleClick(ind)}><div>{ele.que}</div> 
                        {
                            ele.hide ? <FaMinus /> :<FaPlus />
                        } </div>
                        {
                            ele.hide && <div className='answer'>{ele.answer}</div>
                        }
                        {
                            ind<list.length-1 ? <hr/> :<></>
                        }
                    </div>
                })   
            }
        </div>
    )
}

export default Acc