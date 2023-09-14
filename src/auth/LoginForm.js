import React, {useState} from "react";
import { useHistory } from "react-router-dom";


function LoginForm({login}) {
    const INIT_FORM = {
        username: "",
        password: ""
    };

    const [formData, setFormData] = useState(INIT_FORM);
    const history = useHistory();

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await login(formData);
        history.push("/"); // Redirect to homepage
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

                <button>Submit</button>
            </form>
        </div>
    )
}


export default LoginForm;
