import React from "react"
import Hero from "./components/hero";
import Link from "next/link";

function Main(){
  return (
    <div>
      <Hero/>
      <div className="box">

        <div className="box1">
          <h1 className="boxp">Project
             </h1>
             <br />
             <p  className="boxp">Project are upload soon..</p>
        </div>
           
           
              <Link className="box2" href={"/pages/about"}>
          <div className="">
          <h1 className="boxp">About</h1>          
          <h2>personal Information:</h2>
          <pre className="pre1" typeof="Email">Name: Syed Ali Raza <br />
            EMail: syedali102005@gmail.com <br />
            nationality: Pakistan
          </pre>
          <h2> Education:</h2>
          <pre className="pre1">Matric: <br />
            school:EABGBSS <br />
            field: C-Science
          </pre>
             
          </div></Link>


            <Link className="box3"  href={"/pages/contact"}>
          <div >
          <h1 className="boxp">Contact</h1>
                 
          <h2>Email:</h2>
         
           <pre className="pre1">EMail: syedali102005@gmail.com </pre>
              <h2> Number:</h2>
          <pre className="pre1">0370-8667427
          </pre>

          <h2> Addres:</h2>
          <pre className="pre1">abc street ,karachi east ,Pakistan
          <br />
          Postal Code:76500
          </pre>
             
          
          </div> 

          </Link>
      </div>
   
    </div>
    
  );
}

export default Main;