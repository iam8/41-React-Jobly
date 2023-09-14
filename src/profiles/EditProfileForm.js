import React, {useState, useContext} from "react";

import JoblyApi from "../api";
import UserContext from "../auth/UserContext";


function EditProfileForm() {
    const {currentUser, setCurrentUser} = useContext(UserContext);

    const INIT_FORM = {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email
    };

    const [formData, setFormData] = useState(INIT_FORM);

    async function saveUserProfile(userData) {
        console.log("USER DATA RECEIVED:", userData);

        try {
            const savedData = await JoblyApi.saveUserProfile();
            return savedData;
        } catch(err) {
            console.log("ERROR SAVING PROFILE:", err);
        }
    }

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = async (evt) => {
        console.log("SAVING PROFILE CHANGES...");
        evt.preventDefault();
        const savedUserData = await saveUserProfile(formData);
        setCurrentUser(savedUserData);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        value={currentUser.username}
                        disabled
                    />
                </div>

                <div>
                    <label htmlFor="first-name">First name:</label>
                    <input
                        id="first-name"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="last-name">Last name:</label>
                    <input
                        id="last-name"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <button>Save changes</button>

            </form>
        </div>
    )
}


export default EditProfileForm;
