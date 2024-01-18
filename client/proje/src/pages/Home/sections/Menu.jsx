import { useEffect, useState } from "react";
import "../sections/Menu.scss";
import axios from "axios";

const Menu = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/menu");
      setData(res.data.data);
      //   console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="menu-wrapper">
      <div className="container">
        {data.map((item, index) => {
          return (
            <div className="menu" key={index}>
              <p>{item.name}</p>
              <span>{item.desc}</span>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
