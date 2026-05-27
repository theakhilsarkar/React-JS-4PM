import allUsers from '../data/user.js'
import {useState} from "react"

const User = ()=>{
    const [users,setUsers] = useState(allUsers)
    return <div>
        <h1>All Users</h1>
        {
            users.map((user,i)=><div key={i}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <button onClick={()=>{
                    const temp = [...users];
                    temp.splice(i,1);
                    setUsers(temp)
                }}>Remove</button>
                <hr/>
            </div>)
        }
        <button onClick={()=>{
            // const temp = [...users];
            // temp.push({name:"Sahil",email:"sahil@yahoo.com"})
            // setUsers(temp)
            setUsers([...users,{name:"Sahil",email:"sahil@yahoo.com"}])
        }}>Add</button>
        <button onClick={()=>{
            const temp = [...users];
            temp.pop()
            setUsers(temp);
        }}>Delete</button>
    </div>
}

export default User;

// push-pop-last  
// unshift-shift-start 
// splice - remove index 
// slice - new sub array 
// sort 
// filter 
// find 
// find index 
// include
// join 
// split 
// reverse reduce map,foreach
