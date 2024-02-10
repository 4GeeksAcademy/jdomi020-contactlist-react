import React, { useState, useEffect, useContext } from "react";
import { Link , useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";



export const UpdateContact = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [address, setAddress] = useState("")
	const { store, actions } = useContext(Context);
	const { id } = useParams()
    
	useEffect(() => {
		actions.getContacts()
		let thisContact = store.contacts.find((contact) => contact.id == id)
		setName(thisContact.name)
		setPhone(thisContact.phone)
		setEmail(thisContact.email)
		setAddress(thisContact.address)
	}, [])

	const handleSubmit = () => {
		e.preventDefault();
		actions.UpdateContact(name, phone, email, address, id);
	}

	return (
		<div className="container">
			<div className="text-center">
			<h1>CONTACT FORM</h1>
				<form>
  					<div className="mx-5 px-5">
    					<label for="fullName" className="form-label">Full Name</label>
    					<input onChange={(e) => setName(e.target.value)} type="email" className="form-control" id="fullName" placeholder="Jose Dominguez" value= {name} aria-describedby="emailHelp"/>
  					</div>
  					<div className="mx-5 px-5">
    					<label for="address" className="form-label">Address</label>
    					<input onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="address" placeholder="100 Brickell Avenue" value={address}/>
  					</div>
					<div className="mx-5 px-5">
    					<label for="phoneNumber" className="form-label">Phone Number</label>
    					<input onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" id="phoneNumber" placeholder="305-555-5555" value={phone}/>
  					</div>
					<div className="mx-5 px-5">
    					<label for="exampleInputPassword1" className="form-label">Email</label>
    					<input onChange={(e) => setEmail(e.target.value)} type="Email" className="form-control" id="exampleInputEmail1" value={email}/>
  					</div>
  			
		</form>
			</div>	
			<div className="container-button">
			<button type="submit" class="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
			<Link to="/">
				<button className="btn btn-danger">Back home</button>
			</Link>
			</div>
		</div>
	);
};
