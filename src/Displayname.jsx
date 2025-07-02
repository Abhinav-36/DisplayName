import { useState } from "react";   

export default  function Displayname(){
    const [fullName,setFullName] = useState({
        firstname: "",
        lastname: "",
        isNameSet: false 
    })
     return (
        <div style={{padding: "10px", fontFamily: "Times New Roman, Times, serif"}}>
            <form onSubmit={(e)=> { 
                e.preventDefault();
                setFullName({...fullName,isNameSet: true})
                 }}>
            <h1>Full Name Display</h1>
            <p style={{display: "inline"}}>First Name:</p> 
            <input type="text" required value = {fullName.firstname} onChange={(e) => {setFullName({...fullName,firstname: e.target.value,isNameSet:false})}} /> <br/>
            <p style={{display: "inline"}}  >Last Name:</p> 
            <input type="text" required value={fullName.lastname}  onChange={(e) => {setFullName({...fullName,lastname: e.target.value,isNameSet:false})}}/><br/>
            <button type="submit" >Submit</button>
        </form>
            {
                fullName.isNameSet ? <p>Full Name: {`${fullName.firstname} ${fullName.lastname}`}</p> : <p></p>
            }
        </div>
        
    );
}