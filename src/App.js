// eslint-disable react/jsx-pascal-case 
// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './user/Login';
import Home1 from './user/Home1';
import Dashboard from './Admin/Dashboard';
import Register from './user/Register';
import Logout from './user/Logout';
import Department from './user/Department';
import About from './user/About';
import Blog_detail from './user/Blog_detail';
import Blog from './user/Blog';
import Contact from './user/Contact';
import Doctor_detail from './user/Doctor_detail';
import Doctor from './user/Doctor';
import Faq from './user/Faq';
import Galary from './user/Galary';
import Price_list from './user/Price_list';
import Service from './user/Service';
import Add_doctor from './Admin/Add_doctor';
import Add_patient from './Admin/Add_patient';
import Add_payment from './Admin/Add_payment';
import All_appointment2 from './Admin/All_appointment2';
import All_department from './Admin/All_department';
import All_department2 from './Admin/All_department2';
import All_doctor2 from './Admin/All_doctor2';
import All_patient from './Admin/All_patient';
import All_patient2 from './Admin/All_patient2';
import Appointment_contact from './Admin/Appointment_contact';
import Appointment_user from './Admin/Appointment_user';
import Appointment from './Admin/Appointment1';
import Deparment from './Admin/Deparment';
import Doctor_schedule from './Admin/Doctor_schedule';
import Doctor1 from './Admin/Doctor1';
import Invoice from './Admin/Invoice';
import Patient_invoice from './Admin/Patient_invoice';
import Patient_profile from './Admin/Patient_profile';
import Payment from './Admin/Payment';
import Payment2 from './Admin/Payment2';
import Profile from './Admin/Profile';
import Appointment1 from './Admin/Appointment1';
import Add_patient_update from './Admin/Add_patient_update';
import Add_doctor_update from './Admin/Add_doctor_update';
import Add_payment_update from './Admin/Add_payment_update';
import Deparment_update from './Admin/Deparment_update';
import Appointment_update from './Admin/Appointment_update';
import Doctor_details from "./Admin/Doctor_details";


function App() {
  return (
   <>
     <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Register />}> */}
        {/* <Route path="/" element={(window.localStorage.getItem('id')===null)?<Home1/>:<Dashboard/>}> */}
        
        {/* <Route path="/dashboard" element={(window.localStorage.getItem('id')!==null)?</>:<Login/>}></Route> */}
        <Route path="/" element={(window.localStorage.getItem('id')===null)?<Home1/>:<Dashboard/>}></Route>
        <Route path="/dashboard" element={(window.localStorage.getItem('id')!==null)?<Dashboard/>:<Login/>}></Route>
          <Route path="login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="logout" element={<Logout />} />
          <Route path="Home" element={<Home1 />} />
          <Route path="Department" element={<Department />} />
          <Route path="About" element={<About />} />
          <Route path="Blog_detail" element={<Blog_detail />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Doctor_detail" element={<Doctor_detail />} />
          <Route path="Doctor" element={<Doctor />} />
          <Route path="Faq" element={<Faq />} />
          <Route path="Galary" element={<Galary />} />
          <Route path="Price_list" element={<Price_list />} />
          <Route path="Service" element={<Service />} />
          <Route path="Add_doctor" element={<Add_doctor />} />
          <Route path="Add_patient" element={<Add_patient />} />
          <Route path="Add_payment" element={<Add_payment />} />
          <Route path="All_appointment2" element={<All_appointment2 />} />
          <Route path="All_department" element={<All_department />} />
          <Route path="All_department2" element={<All_department2 />} />
          <Route path="All_doctor2" element={<All_doctor2 />} />
          <Route path="All_patient" element={<All_patient />} />
          <Route path="All_patient2" element={<All_patient2 />} />
          <Route path="Appointment_contact" element={<Appointment_contact />} />
          <Route path="Appointment_user" element={<Appointment_user />} />
          <Route path="Appointment" element={<Appointment />} />
          <Route path="Deparment" element={<Deparment />} />
          <Route path="Doctor_schedule" element={<Doctor_schedule />} />
          <Route path="Doctor1" element={<Doctor1 />} />
          <Route path="Invoice" element={<Invoice />} />
          <Route path="Patient_invoice" element={<Patient_invoice />} />
          <Route path="Patient_profile" element={<Patient_profile />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="Payment2" element={<Payment2 />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="book_appointment" element={<Appointment1 />} />
          <Route path="/updateitem" element={<Add_patient_update />} />
          <Route path="/updateitem1" element={<Add_doctor_update />} />
          <Route path="/updateitem2" element={<Add_payment_update />} />
          <Route path="/updateitem3" element={<Deparment_update />} />
          <Route path="/updateitem4" element={<Appointment_update />} />
          <Route path="/Doctor_details" element={<Doctor_details />} />
         
       
          
      



          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App;


