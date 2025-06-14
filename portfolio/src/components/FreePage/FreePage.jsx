import React, { useState, useEffect } from 'react';
import './FreePage.css';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const FreePage = () => {
  //for framework data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "free"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container working-container'>
      <p className="fw-bold working-title">I also work as...</p>
      <div className="project-card">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((item, index) => (
            <div key={index} className="projects-card">
              <div className="projects-image">
                <img src={`./images/${item.pimage}`} alt={item.prole} className='projects-p' />
              </div>
              <div className="projects-des">
                <p className='projects-name'>{item.prole}</p>
                <p className='projects-desc'>{item.pdescription}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FreePage;
