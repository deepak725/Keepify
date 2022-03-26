import React, { useState, useEffect } from 'react'
import "./Todo.css"
//getting local storage data back
const getLocalData = () => {
const lists = localStorage.getItem("mytodolist");//key is passed beacuse we want the key

if(lists)
 {
    return JSON.parse(lists); 
 }
//If the list contains any data we have to pass or add the data
//The data we will get will be in string format and we want it in array because we will store it in items so we will use json.parse
else
 {
    return [];
 } 
 //If there is no data return empty array
}
const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData()); //The data of local storage will be stored here
    //Array created of use state which will store the added items
    const addItems = () => {
        if(!inputdata) //no input is given
        {
            alert("plz enter a value...!")
        }
        else
        {
            const myNewInputData = {
                id : new Date().getTime().toString(),
                //This will give time as an ID to each inputed value and time is always different hence no 2 element will have same ID.
                //To delete an element we need an id
                name : inputdata,
                //This will store the value of data inserted
            }
            setItems([...items, myNewInputData]);
            //baki ki item value as it is and new inputdata will be addes
            setInputData("");
            //change back to original empty state after adding any value
        }
    }
    //How tod delete items
    const deleteItems = (index) => {
        //From index we will get user ne konse item ko click kiya and the wo pass hoga niche deleteItems me 
    const updatedItem = items.filter((curElem)=> {
    //Loop implemented usinf filter. It is ame as map method it will just filter out the stuff 
    return curElem.id !== index; //Jo item choose ki uske alawa sare items return karega.
    })
    setItems(updatedItem);
    }

    const removeAll = () => {
        setItems([]);
    }

    //Adding Local Storage
    useEffect(()=> {
        localStorage.setItem("mytodolist", JSON.stringify(items))
        //Local storage works as a key value pair and we can only assign string to it.
        //Mytodolist is the key name
        //items is in aary and as we can only pass string so we will use json.stringify
    },[items])
//whenever items value will change then only useeffect will work and data will be added on local storage 
    return (
    <>
    <div className='main-div'>
        <div className='child-div'>
            <h1>📝</h1>
            {/*<figure>
              {//  <img src="" alt="todo"></img> 
                <figcaption>Add your List here ✌</figcaption>
                {//div> Emoji - windows + .
            </figure>*/}
            <div className='addItems'>
                <input type="text" placeholder='✍ Add Item' className='form-control'
                value={inputdata}
                onChange={(event)=>setInputData(event.target.value)}
                />
                <i className="fa fa-plus add-btn" onClick={addItems}></i>
                {/*taken from font awesome*/}
            </div>
            {/*Show our items*/}
            <div className='showItems'>
                {items.map((curElem)=> {
                    return (
                        <div className='eachItem' key={curElem.id}>
                            <h3>{curElem.name}</h3>
                             <div className='todo-btn'>
                               <i className="far fa-edit add-btn"></i>
                               <i className="far fa-trash-alt add-btn" onClick={ () => deleteItems(curElem.id) }></i>
                            </div>
                        </div>
                    );
                })}
            
            </div>
            <div className="showItems">
                <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                    {/*data-sm-link-text => to change the text when hovered */}
                    <span>Clear list</span>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Todo