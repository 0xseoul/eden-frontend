import { useRouter } from "next/router";
// export default function authors(props) {
// console.log(router , 'routes')
// return ( <h2> single author </h2> )
// }

import React from "react";

const Wearables = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>{id}</div>;
};

export default Wearables;
