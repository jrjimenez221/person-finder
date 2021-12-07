// import "./payload.json";
// import testimg from "https://robohash.org/facilisinsint.png?size=200x200&set=set1";

import PeopleLoadout from "./people";







export default function Body() {

    


    return(

        <div className="row justify-content-around">
            <div className="col-md-10 col-lg-6 bg-warning"> 


                <div className="row  justify-content-around" style={{height:"10vh"}}>
                    <div className="col-6 "></div>
                </div>

                {/* banner */}
                <div className="row justify-content-around bg-info">
                    <div className="col-md-6">
                        <h1>The Person Finder</h1>
                        <p>If you just can't find someone and need to know what they look like, you've come to the right place! Just type the name of the person you are looking for below into the search box!</p>
                    </div>
                </div>

                {/* Search bar */}
                <div className="row">
                    <input type="text" placeholder="Search..." className="col-5"></input>

                </div>

                {/* people results */}
                <PeopleLoadout/>

            </div>
        </div>
    )
}