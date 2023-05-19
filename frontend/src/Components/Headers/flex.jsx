import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Flex() {
    return (
        <>
            <div className="flex-container">
                <div className="flex-box">

                    <div className="card" style={{ pointerEvents: "none" }}>
                        <Link to="/coding" style={{ textDecoration: "none", pointerEvents: "auto" }}>
                            <h2 style={{color:"white"}}>Coding</h2>
                        </Link>
                    </div>


                    <div className="card">
                        <Link to="/questions" style={{ textDecoration: "none", pointerEvents: "auto" }}>
                            <h2 style={{color:"white"}}>C++ Basics</h2>
                        </Link>
                    </div>


                    <div className="card">
                        <Link to="/opps" style={{ textDecoration: "none", pointerEvents: "inherit" }}>
                            <h2 style={{color:"white"}}>OOPS</h2>
                        </Link>
                    </div>


                    <div className="card">
                        <Link to="http://www.employmentaptitudetest.com" target='_blank' style={{ textDecoration: "none" }}>
                            <h2 style={{color:"white"}}>Aptitude</h2>
                        </Link>
                    </div>


                    <div className="card">
                        <Link to="/computer-networks" style={{ textDecoration: "none" }} id='card'>
                            <h2 style={{color:"white"}}>Computer Networks</h2>
                        </Link>
                    </div>


                    <div className="card">
                        <Link to="/practice-paper" style={{ textDecoration: "none" }}>
                            <h2 style={{color:"white"}}>Practice Paper</h2>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="Row">
                <div className="image">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="header" />
                </div>
                <div className="content">
                    <h3>Why us?</h3>
                    <p>Unlock your potential with DSA 360 - the ultimate platform for mastering Data Structures and Algorithms, preparing for placements, and upskilling yourself with daily practice and comprehensive study material.</p>
                </div>
            </div>
        </>
    );
}

export default Flex;
