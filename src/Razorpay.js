import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from './firebase';

function Razorpay({ registerState,order }) {

    const navigate = useNavigate()

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script')

            script.src = src;

            script.onload = () => {
                resolve(true)
            }

            script.onerror = () => {
                resolve(false)
            }

            document.body.appendChild(script)

        })
    }
    const uploadData = async () => {
        console.log("upload data ")
        const docRef = await addDoc(collection(db, "User"), {
            ...registerState,
            mentor_id: "",
            mentor_alloted: false,
            type: "student",
            goal: "",
            about: "",
            fluency: "English , Hindi",
            education_details: "",
            PaymentTime: Timestamp.fromDate(new Date()),
            paymentid: window.id,
            timestamp: Timestamp.fromDate(new Date())
        });

        if (docRef.id) {
            console.log("added data")
            toast.success("Payment done succesfully ! Stay with us you will be assigned a mentor soon . ")
        }

    }

   


  



    const displayRazorpay = async (amount) => {



        console.log("clicked")

        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        setTimeout(() => {
            if (!res) {
                toast.error("Cannot process payment ! Check your network")
            }
        }, 2000);


        const options = {
            key: `${process.env.REACT_APP_RAZORPAY_KEY}`,
            currency: "INR",
            amount: amount * 100,
             prefill: {
                contact: registerState.phone_number,
                email: registerState.email
            },
            order_id:order,
            handler:  (response) => {
                console.log(response)
                window.id = response.razorpay_payment_id;
                if(response.razorpay_payment_id && response.razorpay_order_id && response.razorpay_signature){
                 uploadData();

                }
                navigate("/")
            }


        }
        

        if(order.length > 0 ){
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        }else{
            toast.error("Try Again")
        }
       

    }


      


    return (
        <div style={{ display: "inline", float: "right",marginRight:"25px", padding: "3%", background: "red", border: "none", color: "#ffff", borderRadius: "4px", display: "inline" }}>

            <button onClick={() => displayRazorpay(registerState.amount)} style={{ fontSize: "18px", background: "transparent", border: "none", color: "#ffff" }}>Select Payment Method </button>

        </div>
    )
}

export default Razorpay