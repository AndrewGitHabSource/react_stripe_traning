import { Link } from "react-router-dom";

export default function Products({products}) {
    return (
        <div className="products-list">
            {
                products.map((item) => {
                  return <div key={item.id} className='product'>
                      <h4>{item.title}</h4>

                      <div>
                          <img src={item.image} alt={item.title}/>
                      </div>

                      <div>{item.description}</div>

                      <Link to={`/order/${item.id}`}>Order Product</Link>
                  </div>
                })
            }
        </div>
    );
}
