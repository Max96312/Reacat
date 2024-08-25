import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import ErrorBanner from "../../components/ErrorBanner";

function Type({ orderType }) {
  const [itmes, setItmes] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      let response = await axios.get(`http://localhost:5000/${orderType}`);
      setItmes(response.data);
    } catch (error) {
      //   console.error(error);
      setError(true);
    }
  };

  if(error){
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  const ItemComponents = orderType === "products" ? Products : null;

  const optionItems = itmes.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <div>{optionItems}</div>;
}

export default Type;
