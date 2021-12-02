import React from 'react';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../App';

import {Button} from 'react-bootstrap';

import { removeData } from "../Services/Action/action";
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';

const cookies = new Cookies();



function Logout() {

    const {updateApp} = useContext(userContext);

    const dispatch = useDispatch();

    const History = useHistory();

    // useEffect(() => {
    //     if (data === null) {
    //         History.push("/signin");
    //     }
    // }, [])

    
    const logoutbtn = () => {

        dispatch(removeData(""));

        cookies.remove('Token');

        window.localStorage.removeItem(true);

        updateApp(1);
       
        
        History.push('/');
     
    }
    
    

    // setKey(false); 
    // updateApp(1);

     

    return (
        <div>
            <Button variant="success" size="md" onClick={logoutbtn}>Logout</Button>
        </div>
    );
}
export default Logout;