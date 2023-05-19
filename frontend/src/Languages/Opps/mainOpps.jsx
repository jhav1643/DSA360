import React, { useState, useEffect } from 'react';
import './style2.css';

function Mainopps() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);


    useEffect(() => {
        fetch(`http://localhost:3001/api/opps/a`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data);
                setTotalPage(Math.ceil(data.length / 4));
            })
            .catch(err => console.log(err));
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const startIndex = (currentPage - 1) * 4;
    const endIndex = startIndex + 4;
    const displayQues = data.slice(startIndex, endIndex);


    return (
        <section className='sec'>
            <h1 className="titles">OOPS Important Questions</h1>



            <div className="questions-container">
                {displayQues.map(item => (
                    <div key={item._id} className="question">
                        <pre className='containers'>
                            <code className="language-cpp">
                                
                            <div id='ques'>
                                {item.Ques}
                                </div>
                               
                               
                                <div id='ans'>{item.Ans}
                                </div>
                            </code>

                        </pre>
                        <br />
                    </div>

                ))}

                <div className='pagination'>
                    {Array.from({ length: totalPage }).map((_, i) => (
                        <button key={i} className={`page-button ${i + 1 === currentPage ? 'active' : ''}`} onClick={() => handlePageChange(i + 1)}>
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Mainopps;