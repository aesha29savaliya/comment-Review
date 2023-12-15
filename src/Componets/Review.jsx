import React, { useState } from "react";

const Review = () => {
     const [data, setdata] = useState({
          name: "",
          text: "",
     });
     const time = new Date().toLocaleTimeString()
     const [final, setfinal] = useState([]);

     const change = (e) => {
          setdata({ ...data, [e.target.name]: e.target.value });
     };
     const submitdata = () => {
          setfinal([...final, data]);
     };

     return (
          <div>
               <section>
                    <div>
                         <div className="card">
                              <div>
                                   <div>
                                        <div>
                                             <label htmlFor="">Name</label>
                                             <input type="text" name="name" onChange={change} />
                                             <br />
                                             <label htmlFor="">Message</label>
                                             <textarea rows="" name="text" onChange={change}></textarea>
                                        </div>
                                   </div>
                                   <div>
                                        <button
                                             type="button"
                                             className="btn btn-outline-primary btn-sm mx-3"
                                             onClick={submitdata}>
                                             Comment
                                        </button>
                                   </div>
                              </div>
                         </div>
                         <div>
                              {final.map((e, index) => {
                                   return (
                                        <div
                                             key={index}>
                                             <div>
                                                  <h6>{e.name}</h6>
                                                  <p>{e.text}</p>
                                                  <p>{time}</p>
                                                  <hr />
                                             </div>
                                        </div>
                                   );
                              })}
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Review;