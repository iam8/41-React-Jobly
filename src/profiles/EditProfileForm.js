import React, {useState, useContext} from "react";

import JoblyApi from "../api";
import UserContext from "../auth/UserContext";


function EditProfileForm() {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [saveSuccess, setSaveSuccess] = useState(null);

    const INIT_FORM = {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        password: ""
    };

    const [formData, setFormData] = useState(INIT_FORM);

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));

    }

    async function saveUserProfile(username, formData) {
        console.log("USER DATA RECEIVED:", username, formData);

        try {
            const savedData = await JoblyApi.saveUserProfile({username, ...formData});
            return savedData;
        } catch(err) {
            console.log("ERROR SAVING PROFILE:", err);
            return;
        }
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const savedUserData = await saveUserProfile(currentUser.username, formData);
        if (!savedUserData) {
            setSaveSuccess(false);
            return;
        }

        setSaveSuccess(true);
        setCurrentUser(savedUserData);
        setFormData(data => ({
            ...data,
            password: ""
        }));
    }

    const renderAlert = () => {
        if (saveSuccess) {
            return <h6>Save successful!</h6>
        } else if (saveSuccess === false) {
            return <h6>ERROR: could not save!</h6>
        }
    }

    return (
        <div>
            {renderAlert()}

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

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <button>Save changes</button>

            </form>
        </div>
    )
}


export default EditProfileForm;
