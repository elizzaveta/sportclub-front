import React, {useState, useEffect} from "react";
import {API} from "../../../index";
import {Navigate, useNavigate} from 'react-router-dom';
import ManageUser from "./ManageUser";
import BarcodeScannerComponent from "react-qr-barcode-scanner";



export default function FindUser() {
    const [userId, setUserId] = useState();
    const navigate = useNavigate();

    return (
        <div className="content-wrapper">
            <h1 className="center">Find User</h1>
            <form onSubmit={()=>navigate("/administration/manage-user/"+userId)}>
                <label>
                    <label>Enter or scan user card id:</label>
                    <BarcodeScannerComponent
                        width={500}
                        height={500}
                        onUpdate={(err, result) => {
                        if (result) {
                            setUserId(result.text);
                            navigate(`/administration/manage-user/${result.text}`)
                        }
                        else { /* TODO */ }
                    }}/>
                    <input  className="login-input"  onChange={e => setUserId(e.target.value)} />
                </label>
                <div>
                    <button className="green-max-width-button" type="submit">Find user</button>
                </div>

            </form>
        </div>
    )
}

