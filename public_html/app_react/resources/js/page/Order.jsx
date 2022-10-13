import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getStripeIntent } from '../helpers/http';
import { useParams } from "react-router-dom";
import { useStripe, useElements, PaymentElement, CardElement } from '@stripe/react-stripe-js';

export default function Order(props) {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] =  useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost",
            },
        });

        if (result.error) {
            console.log(result.error.message);
        }
    }

    return (
        <Layout>
            <h4>Order</h4>

            <form onSubmit={handleSubmit}>
                <PaymentElement />

                <button disabled={!stripe}>Submit</button>
                {errorMessage && <div>{errorMessage}</div>}
            </form>
        </Layout>
    );
}
