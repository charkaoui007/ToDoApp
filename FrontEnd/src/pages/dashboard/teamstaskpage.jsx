import React, { useEffect, useState } from "react";
import "../../styles/bodyTable.css";
import GroupeService from "../../services/groupe-service";
import Task from "./task";


const Teamsdetailpage = () => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await GroupeService.getGroupByid();
        setTasks(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  
  const bodyStyle = {
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    fontSize: "13px",
    color: "#555",
    background: "none",
    marginTop: "100px",
  };

  const noTasksStyle = {
    textAlign: "center",
    fontSize: "18px",
    color: "#888",
    marginTop: "20px",
  };
  
  const columnButton = {
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: 0,
    fontFamily: 'inherit', // Adjust this line based on your specific use case
    cursor: 'pointer',
    outline: 'inherit',
    fontWeight: 'bold'
  };

  return (
    <div style={bodyStyle}>
      <h1 className="text-center text-dark mb-5 font-weight-bold">Teams Tasks</h1>
      <div className="container bootstrap snippets bootdey">
        <div className="table-responsive">
          {loading ? (
            <p>Loading...</p>
          ) : tasks == null || tasks.length === 0 ? (
            <p style={noTasksStyle}>
              No Teams Created... <a href="#">create</a>
            </p>
          ) : (
            <div className="d-flex">
              
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
};

export default Teamsdetailpage;
