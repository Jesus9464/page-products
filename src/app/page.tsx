/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { addToCart } from "@/common/store/actions/actions";
import { getDataThunks } from "@/common/store/actions/thunks";
import { useAppDispatch, useAppSelector } from "@/common/store/hooks";
import { productsSelector } from "@/common/store/selector";
import {
  Card,
  MessageError,
  Pagination,
  Spinner,
} from "@/components/primitives";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function Home() {
  const dispacth = useAppDispatch();
  const products = useAppSelector(productsSelector);

  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = products && Math.ceil(products.length / productsPerPage);

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
    return <Spinner />;
  }

  return (
    <>
      {products ? (
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center">
            {currentProducts &&
              currentProducts.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  onClick={() => dispacth(addToCart(item))}
                />
              ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePrevius={() => setCurrentPage((prev) => prev - 1)}
            isDisabledPrev={currentPage === 1}
            handleNext={() => setCurrentPage((prev) => prev + 1)}
            isDisabledNext={indexOfLastProduct >= products.length}
          />
        </div>
      ) : (
        <MessageError message="some unexpected error occurred" />
      )}
    </>
  );
}
