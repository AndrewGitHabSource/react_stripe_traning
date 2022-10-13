import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import Products from "../components/Products";
import Pagination from "@mui/material/Pagination";
import { getProducts } from "../helpers/http" ;

export default function Home() {
    const count = 5;
    let [products, setProducts] = useState([]);
    let [page, setPage] = useState(1);
    let isLoading = useState(false);
    let [total, setTotal] = useState(0);

    useEffect(() => {
        getProducts(page).then((response) => {
            const {data} = response;
            setProducts(data.products);
            setTotal(Math.ceil(data.total / count));
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const handleChange = (e, p) => {
        setPage(p);
    };

    return (
        <Layout>
            <h4>Home Content</h4>

            { <Products products={products}/> }
            { <Pagination onChange={handleChange} count={Math.ceil(total / count)} page={page} variant="outlined" color="primary" /> }
        </Layout>
    );
}
