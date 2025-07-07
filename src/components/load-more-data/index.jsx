import { useEffect, useState } from "react";
import "./styles.css";

function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts(
          count === 0
            ? () => [...data.products]
            : (prevData) => [...prevData, ...data.products]
        );
        console.log(products);
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
  }

  return (
    <div className="lmd-app">
      <div className="lmd-title">Load More Data</div>
      <div className="lmd-container">
        <div className="lmd-grid-container">
          {products && products.length
            ? products.map((item) => (
                <div className="lmd-grid-element-container" key={item.id}>
                  <img src={item.thumbnail} />
                  <div className="lmd-grid-element-text-container">
                    <p className="lmd-grid-element-text">{item.title}</p>
                    <p className="lmd-grid-element-text">{item.price} $</p>
                  </div>
                </div>
              ))
            : null}
        </div>
        <div className="lmd-text-container">
          <button
            className="lmd-btn"
            onClick={() => setCount(count + 1)}
            disabled={disableButton}
          >
            Load more data
          </button>
          {disableButton ? (
            <p className="lmd-limit-text">You have reached to 100 products</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default LoadMoreData;
