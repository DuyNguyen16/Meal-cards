import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Meal = () => {
  const [item, setItems] = useState([]);

  useEffect((e) => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => {
        setItems(response.data.meals);
      })
      .catch((err) => console.log(err));
  }, []);

  

  const itemList = item.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="mt-[20px] p-[30px] shadow-lg bg-[#EAd1ba]" key={idMeal}>
        <img
          src={strMealThumb}
          className="rounded-md w-[300px] h-[200px] hover:w-[310px] hover:h-[210px] ease-out duration-200 cursor-pointer bg-cover"
        ></img>
        <section className="flex justify-between pt-3">
          <p className="font-semibold text-[14px]">{strMeal}</p>
          <p className="font-semibold text-[14px]">#{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <div className="flex justify-around items-center flex-wrap m-10">
      {itemList}
    </div>
  );
};

export default Meal;
