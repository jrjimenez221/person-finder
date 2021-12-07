// import "./payload.json";
// import testimg from "https://robohash.org/facilisinsint.png?size=200x200&set=set1";
import React, {useState} from 'react';

import Person from './person';
import Loadout from "./payload.json";







export default function Body() {

    
    const [ searchTerm, setSearchTerm] = useState('')

    return(

        <div className="row justify-content-around">
            <div className="col-md-10 col-lg-5"> 


                <div className="row  justify-content-around" style={{height:"10vh"}}>
                    <div className="col-6 "></div>
                </div>

                {/* banner */}
                <div className="row justify-content-around bg-info">
                    <div className="col-md-12">
                        <h1>The Person Finder</h1>
                        <p>If you just can't find someone and need to know what they look like, you've come to the right place! Just type the name of the person you are looking for below into the search box!</p>
                    </div>
                </div>

                {/* Search bar */}
                <div className="row justify-content-around">
                    <input type="text" placeholder="Search in Air HQ" style={{backgroundColor:"#eeeeee"}} className="col-12 rounded border-0" onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} />
                    
                        {Loadout.filter((val)=> {
                            if (searchTerm == "") {
                                return val
                            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                        }).map((val, key)=> {
                            return (




                                <div key={key}>

                                    
                                    <div className="row bg-info mt-2" style={{maxHeight:"15vh", minHeight:"15vh"}}>
                            {/* the img */}
                            <div className="col-md-3 bg-secondary rounded" style={{maxHeight:"inherit"}}>
                                <img alt="test" src={val.avatar} height="100%" width="100%" style={{objectFit:"contain"}}/>

                            </div>
                            
                            {/* the info */}
                            <div className="col-8 m-2">
                                <div className="row">
                                    <h4>{val.name}</h4>
                                </div>
                                <div className="row">{val.description}</div>
                            </div>
                        </div>
                                </div>
                                );
                        })}
                    

                </div>

                {/* people results */}
                <Person/>
                

            </div>
        </div>
    )
}