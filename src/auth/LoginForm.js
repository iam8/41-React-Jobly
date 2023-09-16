import React, {useState} from "react";
import { useHistory } from "react-router-dom";


/**
 * Route: /login
 *
 * Form used to log in to Jobly website.
 *
 * Manages state updates on changes to the form inputs.
 *
 * On successful login, calls login (function prop) and redirects to / (home).
 *
 * On login failure, displays alert and error message.
 */
function LoginForm({login}) {
    const INIT_FORM = {
        username: "",
        password: ""
    };

    const [formData, setFormData] = useState(INIT_FORM);
    const [formErrors, setFormErrors] = useState([]);
    const history = useHistory();

    /** Handle changes to inputs. */
    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    }

    /** Form submission - log in user and redirect to home on success. */
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const result = await login(formData);

        if (result.success) {
            history.push("/"); // Redirect to homepage
        } else {
            setFormErrors(result.err);
        }
    }

    /** Show an alert message on failure to log in. */
    const renderAlert = () => {
        return formErrors.length ? <h6>Login failed: {formErrors}</h6> : <></>
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

                <button>Submit</button>
            </form>
        </div>
    )
}


export default LoginForm;
