import React, {useContext} from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/contactCard";
import "../../styles/home.css";

export const Home = () => {

	useEffect(() => {
		async function getContacts(){
			await actions.getContacts()
		}
		getContacts()
	}, [])

	return (
		<div className="text-center mt-5">
			{store.contacts?.map((contact, index) => (
				<ContactCard name={contact.full_name} phone={contact.phone} address={contact.address} email={contact.email}/>
			))}
		</div>
	)
};
