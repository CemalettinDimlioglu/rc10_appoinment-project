import { useState } from "react"
import Doctors from "../components/Doctors"
import { doctorData } from "../helper/data"
import { appointmentData } from "../helper/data"
import AppointmentList from "../components/AppointmentList"
 
 const Home = () => {

   const [doctors, setDoctors] = useState(doctorData)
   const [appointments, setAppointments] = useState(appointmentData)
   console.log(doctors);
   console.log(appointments);
   return (
     <main className="text-center mt-2 vh-100" >
      <h1 className="display-5 text-danger" >DIMLY HOSPITAL</h1>
      <Doctors doctors={doctors} appointments={appointments} setAppointments={setAppointments}/>
      <AppointmentList/>
     </main>
   )
 }
 
 export default Home;