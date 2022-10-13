import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getStripeIntent } from '../helpers/http';
import { useParams } from "react-router-dom";
import { loginUser } from "../helpers/http";


export default function Login(props) {
    let [user, setUser] = useState({
        'name': '',
        'password': '',
    });

    const login = async (event) => {
        event.preventDefault();

        try {
            const {data} = await loginUser(user);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout>
            <h4>Login</h4>

            <form>
                <div className="form-control">
                    <label>Login:</label>
                    <input type="text" placeholder="Name User" value={user.login || ""} onChange={(e) => setUser({...user, 'name': e.target.value})} />
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
