import axios from "axios";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import '../../styles/dateTimePicker.css';
import { useNavigate } from 'react-router-dom';
import GroupeService from '../../services/groupe-service' 
import UserService from '../../services/user-service' 
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useParams } from "react-router-dom";


dayjs.extend(utc);




function TeamsModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userId, setUserId] = useState(null);
  const [usergroupe , setUsergroupe] = useState([]);
  const { id } = useParams();

 

  const [addeduser, setAddeduser] = useState([]);


    useEffect(() => {
      async function fetchData() {
        try {
          const obtainedUserId = await UserService.getIdByUsername();
  
          // Set the obtained user ID to the state
          setUserId(obtainedUserId);
  
          // Update the task state with the new user ID
          setGroupe((prevTask) => ({
            ...prevTask,
            user: {
              id: obtainedUserId,
            },
          }));
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle error as needed
        }
      }
  
      fetchData();
    }, []); // Empty dependency array to run the effect only once on mount




    

  

  const navigate = useNavigate();

  
  const checkUserExistence = async () => {
    try {
      // Check if the user exists
      const userExistenceResponse = await axios.get(`http://localhost:8080/api/v1/user/get-user/${addeduser}`);
      const userExists = userExistenceResponse.data.exists;

      if (userExists) {
        // If the user exists, add them to the group
        const inviteResponse = await axios.post(`http://localhost:8080/api/groups/invite-users?groupId=${id}&userIds=${[userExistenceResponse.data.id]}`, {
          groupId: id,
          userIds: [userExistenceResponse.data.id],
        });

        setUsergroupe([...usergroupe, inviteResponse.data]);
      } else {
        console.error('User does not exist.');
        // Handle the case where the user does not exist
      }
    } catch (error) {
      console.error('Error checking or inviting users to the group:', error);
    }
  };
  
  
  








  return (
    <>
    <a onClick={handleShow} style={{ cursor: 'pointer' }} className="w-50 pr-3 pb-4 p-2">
                    <div className="card border-0 border-bottom-red shadow-lg shadow-hover ">
                      <div className="card-body text-center ">
                        <div className="text-center">    
                          <i className="fa fa-users  fa-4x my-2"></i>
                        </div>
                        Invite Users
                      </div>
                    </div>
                  </a>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Groupe</Modal.Title>
        </Modal.Header>
        <form onSubmit={checkUserExistence}>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>User username</Form.Label>
        <Form.Control
        name="username"
        value={addeduser.username}
        onChange={(e) => setAddeduser(e.target.value)}
        className=' bg-white'  required type="textbox"/>
      </Form.Group> 
        </Modal.Body>
        <Modal.Footer>

    <Button variant="secondary" onClick={handleClose}>
        Close
       </Button>
     <Button variant="primary" type='sumbit'>Add</Button>
      <div>
      {usergroupe.map((userg) => (
        <div key={userg.members.username}>
            {userg.members.username}
        </div>
      ))}

      </div>
      </Modal.Footer>
</form>  
      </Modal>
    </>
  );
}

export default TeamsModal;