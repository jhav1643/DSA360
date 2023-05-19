import React, { useState, useEffect } from 'react';
import './style1.css';

function MainCpp() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);


    useEffect(() => {
        fetch(`http://localhost:3001/api/cppQuestions/a`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data);
                setTotalPage(Math.ceil(data.length / 7));
            })
            .catch(err => console.log(err));
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const startIndex = (currentPage - 1) * 7;
    const endIndex = startIndex + 7;
    const displayQues = data.slice(startIndex, endIndex);


    return (
        <section className='sec'>
            <h1 className="titles">C++ Important Questions</h1>



            <div className="questions-container">
                {displayQues.map(item => (
                    <div key={item._id} className="question">
                        <pre className='containers'>
                            <code className="language-cpp">
                                
                            <div id='ques'>
                                {item.Ques}
                                </div>
                                {/* <i className="fas fa-chevron-down d-arrow"></i> */}
                               
                               
                                <div id='ans'>{item.Ans}
                                </div>

                                {(item.Code1 !== '') ? (
                                <div id="code">
                                    <br />
                                        {item.Code1}
                                    <br />
                                    <br />
                                </div>
                                 ):  null}
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

export default MainCpp;