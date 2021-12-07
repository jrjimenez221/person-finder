import React, {useState} from 'react';
import Loadout from './payload.json';


export default function Person() {

    // const [currentNPC, setCurrentNPC] = useState(0)
    const [person, setPerson] = useState(Loadout[2].name)
    const [description, setDescription] = useState(Loadout[2].description)
    const [avatar, setavatar] = useState(Loadout[2].avatar)
    console.log(Loadout[0].name)

    return(
        <div className="row bg-info mt-2" style={{maxHeight:"20vh", minHeight:"20vh"}}>
                            {/* the img */}
                            <div className="col-md-2 col-2 bg-success" style={{maxHeight:"inherit"}}>
                                <img alt="test" src={avatar} height="100%" width="100%" style={{objectFit:"contain"}}/>

                            </div>
                            
                            {/* the info */}
                            <div className="col-8 m-2">
                                <div className="row">
                                    <h4>{person}</h4>
                                </div>
                                <div className="row">{description}</div>
                            </div>
                        </div>
    )
}