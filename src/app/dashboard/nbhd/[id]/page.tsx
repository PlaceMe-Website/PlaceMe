import React from "react";
import data from "../../../../data/db.json"
import Nbhd from "../../../../components/Nbhd";


export default function page({ params }: { params: { id: string } }) {
  const neighbourhoods = data.neighbourhoods;
  const nbh = neighbourhoods.find((item) => item.id.toString() === params.id);
  if (!nbh) return <h1>Not Found</h1>;
  return <Nbhd item={nbh} />;
}
