"use client";
import { getDataThunks } from "@/common/store/actions/thunks";
import { useAppDispatch, useAppSelector } from "@/common/store/hooks";
import { productsSelector } from "@/common/store/selector";
import { Spinner } from "@/components/primitives";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const dispacth = useAppDispatch();
  const products = useAppSelector(productsSelector);

  console.log(products);

  const getData = async () => {
    try {
      setLoading(true);
      const { response, success } = await dispacth(getDataThunks()).unwrap();

      if (success && response) {
        setLoading(false);
        return;
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    if (!products) getData();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <h1>
      {products &&
        products?.map((item) => (
          <div key={item.id}>
            <h1>{item.id}</h1>
          </div>
        ))}
      <button onClick={getData}> llame</button>
    </h1>
  );
}
