import React, { useEffect, useState } from 'react'
import './Pay.css'
import Modal from 'react-modal';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import Razorpay from '../../../Razorpay';
import planimg from '../plan_page.png'
import { db, authentication } from '../../../firebase';
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import axios from 'axios';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    minWidth: "80%",
    maxWidth: "80%",
    boxShadow: " 0px 4px 30px rgba(0, 0, 0, 0.12)",
    borderRadius: "8px",
    overflowY: "scroll",
    height: "max-content"

  },
};

const element = document.getElementById("dashboard-tab")

Modal.setAppElement(element);

const handlesubmit = (e) => {
  e.preventDefault();
  console.log("payment clicked")

}





function Pay({ amount, plan_duration,subscription_days }) {

  useEffect(() => {
    document.querySelector('.header').style.position = 'initial';

  })

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal(e) {
    // references are now sync'd and can be accessed.
    e.preventDefault()
    console.log("modal open")
  }

  function closeModal() {
    setIsOpen(false);
  }

    
  //register yourself : 
  const INITIAL_STATE = {
    name: "",
    phone_number: "+91",
    email: "",
    preparing_for: window.plan,
    subscription_days:subscription_days,
    amount: amount,
    course_duration: plan_duration,
    other_pref: ""
  }

  const [registractionData, setRegistractionData] = useState(INITIAL_STATE);

  const { name, email, phone_number, preparing_for, other_pref } = registractionData;


  const handleInput = (e) => {
    const { value, name } = e.target;
    setRegistractionData({ ...registractionData, [name]: value });
  };


  const [registercheck, setregistercheck] = useState(false)
  const [checked, setchecked] = useState(false)

 

  const requestOTP = async (e) => {


    const q = query(collection(db, "User"), where("phone_number", "==", phone_number));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data())
    })
    console.log(registercheck)
    if (querySnapshot.empty === true) {

      generateRecaptcha();
      const appVerifier = window.recaptchaVerifier;

      signInWithPhoneNumber(authentication, phone_number, appVerifier)
        .then(confirmationResult => {
          window.confirmationResult = confirmationResult;
          setotpsent(true)
          toast.success("OTP sent to your device")
          // alert("otp sent to your device ")
        }).catch((error) => {
          console.log(error)
          toast.error("Fill Credentials Correctly Try Again!")
          navigate("/courses")
        })

      setregistercheck(true)
      setchecked(true)


    } else {
      toast.error("Number already registered")
      setregistercheck(false)
      setchecked(false)

      // alert("number")
    }




    e.preventDefault();
    console.log("requesting otp")

    // setexpandForm(true)

    console.log("phonenumber matched verified")
  }

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        //   onSignInSubmit();
      }
    }, authentication);

  }


  const [OTP, setOTP] = useState()
  const [otpsent, setotpsent] = useState(false)

  const verifyOTP = (e) => {

    console.log(OTP)
    if (OTP.length === 6) {
      let confirmationResult = window.confirmationResult;

      confirmationResult.confirm(OTP).then((result) => {
        // User signed in successfully.
        setverified(true)
        const user = result.user;
        console.log(user)

        // toast.success("Otp verified")
        // dispatch({type:"LOGIN",payload : user});

        // alert("user logged succesfully ")
        // navigate("/dashboard")

        // ...
      }).catch((err) => {
        toast.error(err)
        // alert(error)
        // User couldn't sign in (bad verification code?)
        // ...
      });
    }
  }

  const [verified, setverified] = useState(false)
  const navigate = useNavigate();

  const [order, setorder] = useState("")
  const [showpay, setshowpay] = useState(false)

  const createorder = (amount)=>{
    const res = axios.post(process.env.REACT_APP_ORDER_URL,{
        "amount": amount*100})
    
        res.then((response)=>{
          console.log(response.data.id)
            setorder(response.data.id)
        })

        setshowpay(true)
    
    }

  return (
    <div id='assignTask'>
      <button className='pay_btn' onClick={openModal}>
        Enroll Now
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button onClick={closeModal} className='modal-close-btn'>✖</button>
        <div className='modal-top'>
          <strong style={{ textAlign: "center" }}>Get yourself enrolled with us now ! </strong>
          {phone_number.length >= 14 ? <span style={{ color: "red" }}> fill correct number</span> : null}

        </div>

        <img src={planimg} alt="" className='buy-plan-img' />
        <form action="" onSubmit={e => e.preventDefault()} className="pay-form">

          {registercheck === false ? <>
            <div className="modal-input">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder='Enter full name ' required onChange={handleInput} value={name} name="name" disabled={checked} />
            </div>
            <div className="modal-input">
              <label htmlFor="phone">Phone Number </label>
              <input type="text" placeholder='Enter your phone number +91789****** ' required onChange={handleInput} value={phone_number} name="phone_number" disabled={checked} />
            </div>

            <div className="modal-input">
              <label htmlFor="phone">Email </label>
              <input type="email" placeholder='Enter your email ' required onChange={handleInput} value={email} name="email" disabled={checked} />
            </div>

            <div className="modal-input">
              <label htmlFor="phone">Preparing for  </label>
              <input type="text" name="" id="" value={window.plan} disabled />
            </div>

            <div className="modal-input">
              <label htmlFor="phone"> Amount  </label>
              <input type="number" value={amount} name="amount" required disabled />
            </div>

            <div className="modal-input">
              <label htmlFor="phone"> Plan duration  </label>
              <input type="text" value={plan_duration} required disabled />
            </div>

            <div className="modal-input">
              <label htmlFor="phone"> Any other preferences  </label>
              <input type="text" value={other_pref} onChange={handleInput} name="other_pref" />
            </div>

            <div className="modal-input" style={{ marginTop: "20px" }}></div>
          </> : null}

          {/* <button onClick={()=>console.log(registractionData)}>get state</button> */}

          {name != "" && phone_number != "" && email != "" && preparing_for != "" ?
            <>


              {registercheck === true ? <>



                {verified === true ? <>
                  <div className="modal-input">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Enter full name ' required onChange={handleInput} value={name} name="name" disabled={checked} />
                  </div>
                  <div className="modal-input">
                    <label htmlFor="phone">Phone Number </label>
                    <input type="text" placeholder='Enter your phone number  ' required onChange={handleInput} value={phone_number} name="phone_number" disabled={checked} />
                  </div>

                  <div className="modal-input">
                    <label htmlFor="phone">Email </label>
                    <input type="email" placeholder='Enter your email ' required onChange={handleInput} value={email} name="email" disabled={checked} />
                  </div>

                  <div className="modal-input">
                    <label htmlFor="phone">Preparing for  </label>
                    <input name="preparing_for" id="" required onChange={handleInput} value={preparing_for} disabled />
                  </div>

                  <div className="modal-input">
                    <label htmlFor="phone"> Amount  </label>
                    <input type="number" value={amount} name="amount" required disabled />
                  </div>

                  <div className="modal-input">
                    <label htmlFor="phone"> Plan duration  </label>
                    <input type="text" value={plan_duration} required disabled />
                  </div>

                  <div className="modal-input">
              <label htmlFor="phone"> Any other preferences  </label>
              <input type="text" value={other_pref}  name="other_pref" disabled />
            </div>

                  <div className="modal-input" style={{ marginTop: "20px" }}></div>


                  <div className="pay-btns">
                  <button onClick={() => navigate("/")} style={{ display: "inline", float: "left", width: "100px", padding: "3%", borderRadius: "8px", background: "linear-gradient(91.97deg, #6770FF 0%, #6A73FF 100%)", border: "none", fontSize: "18px", color: "#ffff" }}>Back</button>
                {showpay === true ?<Razorpay registerState={registractionData} order={order} onClick={() => { closeModal(); console.log("razorpay clicked!!!!!") }} /> :  <button onClick={() =>  createorder(amount)} style={{ display: "inline", width: "max-content", padding: "3%", borderRadius: "8px",float:"right", background: "linear-gradient(91.97deg, #6770FF 0%, #6A73FF 100%)", border: "none", fontSize: "18px", color: "#ffff" }}>Proceed to pay</button>}  

                    

                  </div>

                </> : <>

                  <div className="verify">
                    {otpsent === true ? <span style={{ fontSize: "18px", margin: "10px", fontFamily: "Manrope" }}>Enter OTP sent to your mobile number </span> : <span style={{ fontSize: "18px", margin: "10px", fontFamily: "Manrope" }}>Sending OTP to your mobile number </span> }

                    <input type="number" placeholder="OTP" value={OTP} onChange={(e) => { setOTP(e.target.value) }} />
                    <span style={{textAlign:"center",color:"rgb(0,0,0,0.7)",fontSize:"14px",fontWeight:"600"}}>Enter 6-digit otp </span>
                    <button variant="primary" onClick={() => { verifyOTP();  }} >
                      Verify OTP
                    </button>
                   <button onClick={()=>navigate('/')} style={{background:"black",color:"white"}}>Back</button> 
                  </div>
                </>}

              </> : <button onClick={() => { requestOTP(); }} >Done</button>}
            </>
            :
            <>

              <span style={{ color: "red" }} >*Fill every feild to proceed for payment</span>
            </>

          }
        </form>
      </Modal>
      <div id="recaptcha-container"></div>
    </div>
  )
}

export default Pay