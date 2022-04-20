import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { addFlat } from "../Redux/action";
import "./Style/HomePage.css"
// import { SearchBar } from "./search";
export const HomePage =()=>{
 // const [flat,setFlat] =useState([])
 const {flat} = useSelector((store) => store.flat);
 const dispatch = useDispatch();
    const history =useNavigate()
    // const data1 = useSelector((store) => store.filterData)
    // console.log(data1)
    //      let data =[]
    // data1.slice([startIndex], [endIndex]).map((item, i) => {
    //     data.push(item);
    //   });
    // console.log(data1)

   useEffect(()=>{
    axios.get("https://apartment-letter.herokuapp.com/block").then((res)=>{
       // setFlat([...res.data])
        dispatch(addFlat(res.data))
        console.log(res.data)
    })
   },[])
   const handleLink=(e)=>{
      history(`flat/${e.flatId[0]._id}`)
   }

   const handleSort=(e)=>{
       const {id,value} = e.target
           if(id == "sort_function" && value == "low"){
             //  console.log("low")
            let x=   flat.sort((a,b)=>a.flatId[0].flatNo-b.flatId[0].flatNo)
            
            dispatch(addFlat(x))
           }
           if(id == "sort_function" && value == "high"){
           // console.log("low")
         let x=   flat.sort((a,b)=>b.flatId[0].flatNo-a.flatId[0].flatNo)
         //    setFlat([...x])
         dispatch(addFlat(x))
        }

   }
    return (
        <div >
            <div>
                {/* <input type="text" placeholder="search by block name" /> */}
                {/* <SearchBar /> */}
                <select name="" id="sort_function" onChange={handleSort} >
                    <option value="">---sort by---</option>
                    <option value="low">low to high</option>
                    <option value="high">high to low</option>
                </select>
                
            </div>
            <table className="table_head">
                <thead>
                    <tr>
                        <th>Flat No.</th>
                        <th>Flat Type</th>
                         <th>Block</th>
                    </tr>
                </thead>
                <tbody>
                   {flat.map((e)=>(
                       
                    //    <Link to={`flat/${e._id}`}>
                        //    <div className="link_div">
                       <tr onClick={()=>handleLink(e)} key={e._id}>
                             <td>{e.flatId[0].flatNo}</td>
                            <td>{e.flatId[0].flatType}</td>
                            <td>{e.blockName}</td>
                          
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