 import React ,{useEffect}from 'react';
import './hello.css'



 function Experiance() {
    useEffect(() => {
        document.title = "Bitto Agarwal"
     }, []);
    return (
        <div className='mabu'>
        
            <h1>Experiance</h1>
            <h3>Software Developer at Amazon</h3>
            <p>I work with amazon in transportation team, some more description Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ullam! Maxime officiis consequuntur libero eaque reprehenderit
              quisquam nam ab vitae totam id commodi laborum enim, sint ea odit quasi soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iusto ut praesentium modi. Incidunt atque voluptatem, dignissimos officiis reprehenderit est! </p>
               <hr width='100%' color='black' size="50px"/>
        </div>
    );
}

export default Experiance;
