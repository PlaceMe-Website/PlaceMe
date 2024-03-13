import React from "react";
import data from "@/app/dashboard/recommend/db.json";
import SearchCard from "../../search/components/searchCard";
import Nbhd from "./components/Nbhd";

export default function page({ params }: { params: { id: string } }) {
  const neighbourshoods = data.neighbourhoods;
  const nbh = neighbourshoods.find((item) => item.id.toString() === params.id);
  if (!nbh) return <h1>Not Found</h1>;
  return <Nbhd item={nbh} />;
}
