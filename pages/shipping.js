import { useEffect } from "react";
import { useRouter } from "next/router";
const Shipping = () => {
  const router = useRouter();
  router.push("/login");
  useEffect(() => {}, []);
  return <div></div>;
};

export default Shipping;
