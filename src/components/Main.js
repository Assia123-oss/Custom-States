import React from "react";
import { useContext } from "react";
import {AppContext} from "../App"
import { useQuery } from "@tanstack/react-query";
import Axios from "axios"


export default function Main() {
  const { username } = useContext(AppContext);
  
 const { data, isLoading } = useQuery(["cat"],() => {
  return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
 });

 if(isLoading){
  return <h1>Loading...</h1>
 }

  return (
    <main>
      <h4>This is the main section and the user is: {username} and info <p>{data?.fact}</p></h4>
      <h1 className="main--title">Fun Facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousandsof enterprise apps,including mobile apps.</li>
      </ul>
    </main>
  );
}
