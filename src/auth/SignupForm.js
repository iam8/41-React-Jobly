import React, {useState} from "react";
import { useHistory } from "react-router-dom";


/**
 * /signup - Form used to register a new user on the Jobly website.
 *
 * Manages state updates on changes to the form inputs.
 *
 * On successful sign up, calls signup (function prop) and redirects to / (home).
 */
function SignupForm({signup}) {
    const INIT_FORM = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    };

    const [formData, setFormData] = useState(INIT_FORM);
    const history = useHistory();

    /** Handle changes to inputs. */
    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    }

    /** Form submission - register user and redirect to homepage on success. */
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const result = await signup(formData);

        if (result.success) {
            history.push("/"); // Redirect to homepage
        }
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
                        value={formData.username}
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

                <button>Submit</button>
            </form>
        </div>
    )
}


export default SignupForm;
