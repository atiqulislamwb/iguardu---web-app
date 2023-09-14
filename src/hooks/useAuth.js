import React, { useContext, useState } from "react";
import { StateContext } from "../context/context";
import toast from "react-hot-toast";

const useAuth = () => {
  const { baseUrl } = useContext(StateContext);
  const [loading, setLoading] = useState(false);

  const saveToDatabase = (data) => {
    setLoading(true);
    fetch(`${baseUrl}/v1/api/resgister`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === true) {
          setLoading(false);
          console.log("save to database successfully");
        } else {
          console.log("data not save to database ");
        }
      });
    setLoading(false);
  };

  const handleLogin = (data) => {
    console.log(data);
    setLoading(true);

    fetch(`${baseUrl}/v1/api/resgister`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === true) {
          setLoading(false);
          console.log("login success");
        } else {
          toast.error("Something went wrong please try again");
          console.log("something went wrong");
        }
      });
    setLoading(false);
  };

  return { saveToDatabase, loading, handleLogin };
};

export default useAuth;
