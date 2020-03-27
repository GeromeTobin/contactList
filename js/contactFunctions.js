function submit() {


		received = document.getElementById("response").value.toLowerCase();

		console.log(received);

		switch (received) {
				case "add":
					addContact();
					break;

				case "delete":
					delContact();
					break;

				case "clear":
					clearContact();
					break;

				case "find":
						findContact();
						break;

				default:
						modeBased();
						break;

		}
}

function addContact() {
		document.getElementById('modeSetting').innerText = "add";

		document.getElementById('responseLabel').innerText = "";
		console.log("addContact received");
		document.getElementById('responseLabel').innerText += "Please type in the name of the contact you would like to add";
	 mode = "1";
	 add_counter = 1;
	 new_contact = {
	 	name: "",
	 	phone: "",
	 	email: "",
	 	address: ""
	 }

}

function delContact() {
		document.getElementById('modeSetting').innerText = "delete";
		document.getElementById('responseLabel').innerText = "";
		console.log("delContact received");
		document.getElementById('responseLabel').innerText += "Who would you like to delete";
	 mode = "2";
}

function findContact() {
		document.getElementById('responseLabel').innerText = "";
		document.getElementById('modeSetting').innerText = "find";
		console.log("findContact received");
		document.getElementById('responseLabel').innerText += "Please type in the name of the contact you would like to find";
	 mode = "3";
}

function clearContact() {
		document.getElementById('modeSetting').innerText = "clear";
		document.getElementById('responseLabel').innerText = "";
		console.log("clearContact received");
		document.getElementById('responseLabel').innerText += "are you sure?";
	 mode = "4";
}

function addNewContactToContacts(new_contact_rcvd) {
					console.table("contacts: " + contacts.length);

	// ADD new_contact_rcvd to ARAY of contacts
		contacts.push(new_contact_rcvd)
					console.table("contacts[0].name: " + contacts[0].name);
}

function modeBased() {

			if (mode == "1") {

				if (add_counter == 1) {


					// var orderSwitch = received.split(" ");
					// var lastFirst = orderSwitch[1] + ", " + orderSwitch[0];
					//
					//
					//Above is the last name then first name code.
					//I left it out because I didn't like how it looked,
					//but it's still here to show that I can, and have, completed it


					document.getElementById('responseLabel').innerText = "";
					console.log("new_contact.name: " + new_contact.name);
					new_contact.name = received;
					console.log("new_contact.name: " + new_contact.name);
					document.getElementById('responseLabel').innerText += "Please type " + new_contact.name + "'s " + "Phone Number";

				} else if (add_counter == 2) {
					document.getElementById('responseLabel').innerText = "";
					console.log("new_contact.phone: " + new_contact.phone);
					new_contact.phone = received;
					console.log("new_contact.phone: " + new_contact.phone);
					document.getElementById('responseLabel').innerText += "Please type " + new_contact.name + "'s " + "Email Address";

				} else if (add_counter == 3) {
					document.getElementById('responseLabel').innerText = "";
					console.log("new_contact.email: " + new_contact.email);
					new_contact.email = received;
					console.log("new_contact.email: " + new_contact.email);
					document.getElementById('responseLabel').innerText += "Please type " + new_contact.name + "'s " + "Address";

				} else if (add_counter == 4) {
					document.getElementById('responseLabel').innerText = "";
					console.log("new_contact.address: " + new_contact.address);
					new_contact.address = received;
					console.log("new_contact.address: " + new_contact.address);
					// pushing contact into array
					addNewContactToContacts(new_contact);
					mode = 0;
					document.getElementById('modeSetting').innerText = "";
				}

				add_counter += 1;




						console.log(mode);
		 }

		 	if (mode == "2") {
			 			document.getElementById('responseLabel').innerText = "";
			 			console.log(contacts.length);
					for (var i = 0; i < contacts.length; i++) {
							if (contacts[i].name == received) {
									document.getElementById('responseLabel').innerText += "deleted " + contacts[i].name;
									contacts.splice(i, 1);
									console.log(contacts.length);
									document.getElementById('modeSetting').innerText = "";
							}


					}
			mode = 0;
			}

			if (mode == "3") {

							document.getElementById('responseLabel').innerText = "";
				 			console.log(contacts.length);
						for (var i = 0; i < contacts.length; i++) {
								if (contacts[i].name == received) {
										document.getElementById('responseLabel').innerText += "Name: " + contacts[i].name + "\n" + " Phone: " + contacts[i].phone + "\n" + " Email: " + contacts[i].email + "\n" + " Address: " + contacts[i].address;

								} else {
											document.getElementById('responseLabel').innerText += "There is no one with that name in your contacts";
								}


						}
			document.getElementById('modeSetting').innerText = "";
			mode = 0;
			}

			if (mode == "4") {
						document.getElementById('responseLabel').innerText = "";
						if (received == "yes") {
								contacts.splice(0,contacts.length)
								document.getElementById('responseLabel').innerText += "Cleared contact list";
						} else {
								document.getElementById('responseLabel').innerText += "Not deleting contact list";
						}
			document.getElementById('modeSetting').innerText = "";
			mode = 0;
			}
}
