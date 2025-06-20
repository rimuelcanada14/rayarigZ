import React, { useState, useEffect } from 'react';
import './ProjectsPage.css';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ProjectsPage = () => {
  //for framework data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "broadass"));
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
    <div className='container projects-container'>
      <p className="fw-bold projects-title">UP Broadcasting Association</p>
      <div className="project-card">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((item, index) => (
            <div key={index} className="projects-card">
              <div className="projects-image">
                <img src={`./images/${item.image}`} alt={item.name} className='projects-p' />
              </div>
              <div className="projects-des">
                <p className='projects-name'>{item.name}</p>
                <p className="projects-tech">{item.role}</p>
                <p className='projects-desc'>{item.description}</p>
              </div>
              <div className="project-btn">
                <a className="btn border-white table-btn" href={item.link} target="_blank">
                  View Now!
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
