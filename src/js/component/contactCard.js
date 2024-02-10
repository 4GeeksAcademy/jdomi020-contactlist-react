import React , {useContext} from 'react'

import { Link } from 'react-router-dom'
import "../../styles/home.css";
import { Context } from "../store/appContext";


export default function ContactCard(props) {
  const {store,actions}  = useContext(Context)
  const handleDelete = () => {
    actions.deleteContact(props.id);
    window.location.reload()
  };

  return (
    <div className="contactcard">
        <h1>Name</h1>
        <h2>{props.name}</h2>
        <h1>Email</h1>
        <h2>{props.email}</h2>
        <h1>Address</h1>
        <h2>{props.address}</h2>
        <h1>Phone</h1>
        <h2>{props.phone}</h2>
        <Link className="btn btn-info" to={"/update/" + props.id}>
          Update Contact
        </Link>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Contact</button>
    </div>
  )
}
