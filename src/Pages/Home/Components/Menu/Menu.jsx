import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/Common/SectionTitle/SectionTitle";
import axios from "axios";
import Popular from "../../../../Components/Common/PopularMenu/Popular";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get("menu/menu.json")
      .then((res) => {
        const popularMenu = res.data.filter((item) => item.category === "popular");
        setMenu(popularMenu);
      })
      .catch((err) => {
        console.error("Error fetching menu data:", err);
      });
  }, []);

  return (
    <div className="py-10 container">
      {/* section title */}
      <SectionTitle heading="FROM OUR MENU" subheading="---Check it out---" />

      {/* menu content */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {
          menu.map(menuItem => <Popular key={menuItem._id} menu={menuItem} />)
        }
      </div>
    </div>
  );
};

export default Menu;
