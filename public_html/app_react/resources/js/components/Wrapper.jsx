import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Order from '../page/Order';
import {useEffect, useState} from "react";
import {getStripeIntent} from "../helpers/http";
import {useParams} from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const Wrapper = (props) => {
    const { id } = useParams();
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        getStripeIntent(id)
            .then(async (response) => {
                const {data} = await response;
                setClientSecret(data.client_secret);

                console.log(clientSecret);
            })
            .catch(e => {
                console.log(e);
            });

    }, []);

    return (
        <>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ 'clientSecret': clientSecret }}>
                    <Order {...props} />
                </Elements>
            )}
        </>
    )
}

