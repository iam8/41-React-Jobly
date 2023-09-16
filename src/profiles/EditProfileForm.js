import React, {useState, useContext} from "react";

import JoblyApi from "../api";
import UserContext from "../auth/UserContext";


/**
 * Route: /profile
 *
 * Form used to edit user profile. Initially fills form inputs with the current user profile data.
 *
 * Manages state updates on changes to the form inputs.
 *
 * On form submission, attempts to update user profile with new data and displays a success or
 * failure notification.
 */
function EditProfileForm() {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [formErrors, setFormErrors] = useState([]);

    const INIT_FORM = {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email
    };

    const [formData, setFormData] = useState(INIT_FORM);

    /** Handle changes to inputs. */
    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setSaveSuccess(false);
        setFormErrors([]);
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    }

    /**
     * Call API to save new user profile data. Return saved data if successful or undefined if
     * unsuccessful.
     */
    async function saveUserProfile(username, formData) {
        try {
            const savedData = await JoblyApi.saveUserProfile({username, ...formData});
            return savedData;
        } catch(err) {
            setSaveSuccess(false);
            setFormErrors(err);
            console.log("ERROR SAVING PROFILE:", err);
            return;
        }
    }

    /** Form submission - attempt to update user profile data and reset form inputs. */
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const savedUserData = await saveUserProfile(currentUser.username, formData);
        if (!savedUserData) {
            return;
        }

        setCurrentUser(savedUserData);
        setSaveSuccess(true);
        setFormErrors([]);

        setFormData(data => ({
            ...data,
            password: ""
        }));
    }

    /** Show an alert message on success or failure to update profile. */
    const renderAlert = () => {
        if (saveSuccess) return <h6>Save successful!</h6>
        if (formErrors.length) return <h6>Could not update profile: {formErrors}</h6>
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

                <button>Save changes</button>

            </form>
        </div>
    )
}


export default EditProfileForm;
