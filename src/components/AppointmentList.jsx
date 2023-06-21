 import Container from "react-bootstrap/Container";
 import Col from "react-bootstrap/Col";
 import Row from "react-bootstrap/Row";
 import { FaTimesCircle } from "react-icons/fa";
 const AppointmentList = ({ appointments, setAppointments }) => {
   // const dizi =[]
   // dizi ? x : y
   const handleDelete = (id) => {
     setAppointments(appointments.filter((item) => item.id !== id));
   };
   const handleDoubleClick = (id) => {
     setAppointments(
       appointments.map((item) =>
         item.id === id ? { ...item, consulted: !item.consulted } : item
       )
     );
   };
   return (
     <Container className="p-2">
       <h3 className="display-6 mb-2" style={{ color: "rgb(166,18,189" }}>
         Appointment List
       </h3>
       {appointments.length < 1 && (
         <img src="./img/appointment.jpg" alt="" width="70%" />
       )}
       {appointments.map((item) => {
         const { id, patient, consulted, doctor, day } = item;
         return (
           <div
             key={id}
             className={consulted ? "appointments consulted" : "appointments"}
             onDoubleClick={() => handleDoubleClick(id)}
           >
             <Row>
               <Col>
                 <h4>{patient}</h4>
                 <h5>{doctor}</h5>
               </Col>
               <Col>
                 <h6>{new Date(day).toLocaleDateString()}</h6>
                 <h6>{new Date(day).toLocaleTimeString()}</h6>
               </Col>
               <Col className="">
                 <FaTimesCircle
                   className="text-danger fs-3"
                   type="button"
                   onClick={() => handleDelete(id)}
                 />
               </Col>
             </Row>
           </div>
         );
       })}
     </Container>
   );
 };
 export default AppointmentList;