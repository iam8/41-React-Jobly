import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Alert, Button, Form, FormGroup, Label, Input } from "reactstrap";


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
        setFormErrors([]);
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
        if (formErrors.length) {
            return (
                <Alert color="danger">
                    Login failed - {formErrors}
                </Alert>
            );
        }
    }

    return (
        <div className="LoginForm">
            {renderAlert()}

            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username:</Label>
                    <Input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Enter a username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="At least 6 characters long"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </FormGroup>

                <Button color="primary">Submit</Button>
            </Form>
        </div>
    );
}


export default LoginForm;
