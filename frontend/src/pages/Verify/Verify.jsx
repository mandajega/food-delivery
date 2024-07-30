import React, {useContext, useNavigate, useSearchParams} from 'react'
import './Verify.css'
import StoreContext from '../../context/StoreContext';

const Verify = () => {
  
    
      const [searchParams, setSearchParams] = useSearchParams();
      const success = searchParams.get("success")
      const orderId = searchParams.get("orderId")
      const {url} = useContext(StoreContext);
      const navigate = useNavigate();
      
      const verifyPayment = async () => {
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if (response.data.sucess){
            navigate("/myorders");
        }
        else{
          navigate("/")
        }
      }

      return(
      <div className='verify'>
        <div className="spinner">

        </div>
    </div>
  )
}

export default Verify
