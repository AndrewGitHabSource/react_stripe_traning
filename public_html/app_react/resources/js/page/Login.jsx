import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loginUser } from "../helpers/http";

export default function Login(props) {
    let [user, setUser] = useState({
        'login': '',
        'password': '',
    });

    const login = async (event) => {
        event.preventDefault();

        try {
            const {data} = await loginUser(user);
            localStorage.setItem('token', data.token);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout>
            <h4>Login</h4>

            <form onSubmit={login}>
                <div className="form-control">
                    <label>Login:</label>
                    <input type="text" placeholder="Login User" value={user.login || ""} onChange={(e) => setUser({...user, 'login': e.target.value})} />
                </div>

                <div className="form-control">
                    <label>User Password:</label>
                    <input type="password" placeholder="Password User" value={user.password || ""} onChange={(e) => setUser({...user, 'password': e.target.value})} />
                </div>

                <input type="submit" className="btn btn-block" value="Login" />
            </form>
        </Layout>
    );
}
