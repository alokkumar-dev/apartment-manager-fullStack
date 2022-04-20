import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Style/HomePage.css"
export const Flat=()=>{
    const {id} =useParams()
  //  console.log(id,"hello")
    const [flat,setFlat] =useState([])
    // const history =useNavigate()
   useEffect(()=>{
    axios.get(`https://apartment-man.herokuapp.com/flat/${id}`).then((res)=>{
        // setFlat([...res.data.residentId])
        console.log(res.data)
    })
   },[])
    return(
        <div >
             <table  className="flat_div">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>gender</th>
                         <th>age</th>
                    </tr>
                </thead>
                <tbody>
                {flat.map((e)=>(
                       
                       //    <Link to={`flat/${e._id}`}>
                           //    <div className="link_div">
                          <tr key={e._id}>
                                <td>{e.name}</td>
                               <td>{e.gender}</td>
                               <td>{e.age}</td>
                             
                                 {/* </div> */}
                         </tr>
                                   // </Link>
                      )
   
                      )}  
                </tbody>
            </table>
        </div>
    )
}