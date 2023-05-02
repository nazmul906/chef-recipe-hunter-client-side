import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ViewRecipes from "../display/ViewRecipes";
import { useEffect, useState } from "react";

const Recipes = () => {
  const [chef, setChef] = useState([]);
  const { id } = useParams();
  console.log("recipe", id);
  const allChef = useLoaderData();
  const recipedata = useLoaderData();
  // useEffect(() => {
  //   // fetch(`http://localhost:5000/chef/${id}`)
  //   //   .then((res) => res.json())
  //   //   .then((data) => setChef(data));

  //   const selectedChef = allChef.find((item) => item.id === id);
  //   console.log(selectedChef);
  // }, []);

  // const Chef = () => {
  //   const selectedChef = allChef.find((item) => item.id === id);
  //   console.log(selectedChef);
  // };
  // Chef();

  return (
    <div>
      <h5>len:{allChef.length}</h5>
      <h4>this is recipe page </h4>
      {recipedata.map((item) => (
        <ViewRecipes key={item.id} recipes={item}></ViewRecipes>
      ))}
    </div>
  );
};

export default Recipes;
