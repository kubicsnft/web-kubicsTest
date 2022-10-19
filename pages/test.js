import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Test() {
  const { data, error } = useSWR(
    "http://localhost:3000/api/NFTsMongo/",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
      <h1>{data.data[0].id}</h1>
      <h1>{data.data[1].id}</h1>
      <h1>{data.data[2].id}</h1>
      <h1>{data.data[3].id}</h1>
    </div>
  );
}
