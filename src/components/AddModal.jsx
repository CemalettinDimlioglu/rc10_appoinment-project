 import Button from "react-bootstrap/Button";
 import Modal from "react-bootstrap/Modal";
 import Form from "react-bootstrap/Form";
 import { useState } from "react";
 export function AddModal({ show, handleClose, selectedDrName, setAppointment, appointments }) {
   const [patientName, setPatientName] = useState("");
   const [date, setDate] = useState("");
   console.log(selectedDrName);
   console.log(patientName, date);
   const handleSubmit = (e) => {
     e.preventDefault();
     handleClose();
   };
   return (
     <>
       <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
           <Modal.Title className="text-danger">
             Reservation for {selectedDrName}
           </Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Form onSubmit={handleSubmit}>
             <Form.Group className="mb-3" controlId="name">
               <Form.Label>Patient Name</Form.Label>
               <Form.Control
                 type="text"
                 placeholder="Enter your name"
                 onChange={(e) => setPatientName(e.target.value)}
               />
             </Form.Group>
             <Form.Group className="mb-3" controlId="datetime">
               <Form.Label>Day&Time</Form.Label>
               <Form.Control
                 type="datetime-local"
                 onChange={(e) => setDate(e.target.value)}
               />
             </Form.Group>
             <div className="text-center">
               <Button variant="success" type="submit" className="me-2">
                 Submit
               </Button>
               <Button variant="danger" onClick={handleClose}>
                 Close
               </Button>
             </div>
           </Form>
         </Modal.Body>
       </Modal>
     </>
   );
 }