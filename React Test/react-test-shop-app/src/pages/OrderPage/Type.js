import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import Options from "./Options";
import ErrorBanner from "../../components/ErrorBanner";
import { OrderContext } from "../../contexts/OrderContext";

function Type({ orderType }) {
  const [itmes, setItmes] = useState([]);
  const [error, setError] = useState(false);
  const [orderDatas, updateItemCount] = useContext(OrderContext);

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

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  const ItemComponents = orderType === "products" ? Products : Options;

  const optionItems = itmes.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, orderType)
      }
    />
  ));

  return (
    <>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격: {orderDatas.totals[orderType]}</p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" && "column",
        }}
      >
        {optionItems}
      </div>
    </>
  );
}

export default Type;
