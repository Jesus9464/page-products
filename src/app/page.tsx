/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";

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
import { SortBy } from "@/common/helpers/constanst";
import Head from "next/head";

export default function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productsSelector);

  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortBy | null>(null);

  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const filteredProducts = products?.filter((item) =>
    item.title.includes(searchTerm)
  );

  const currentProducts = filteredProducts
    ?.sort((a, b) => {
      if (sortBy === SortBy.PRICE) {
        return a.price - b.price;
      } else if (sortBy === SortBy.RATING) {
        return b.rating - a.rating;
      } else {
        return 0;
      }
    })
    .slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages =
    filteredProducts && Math.ceil(filteredProducts.length / productsPerPage);

  const getData = async () => {
    try {
      setLoading(true);
      const { response, success } = await dispatch(getDataThunks()).unwrap();

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
      <Head>
        <meta name="description" content="a test page" />
      </Head>
      {products && filteredProducts ? (
        <div className="flex flex-col items-center">
          <div>
            <input
              type="text"
              placeholder="Search by title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md mt-4 mb-4 mx-4 w-11/12"
            />
            <select
              value={sortBy || ""}
              onChange={(e) => setSortBy(e.target.value as SortBy)}
              className="px-4 py-2 ml-4 border border-gray-300 rounded-md w-11/12"
            >
              <option value="">classification</option>
              <option value={SortBy.PRICE}>Price</option>
              <option value={SortBy.RATING}>Rating</option>
            </select>
          </div>
          <div className="flex flex-wrap justify-center">
            {currentProducts &&
              currentProducts.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  onClick={() => dispatch(addToCart(item))}
                />
              ))}
          </div>
          {filteredProducts?.length >= 9 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePrevius={() => setCurrentPage((prev) => prev - 1)}
              isDisabledPrev={currentPage === 1}
              handleNext={() => setCurrentPage((prev) => prev + 1)}
              isDisabledNext={indexOfLastProduct >= filteredProducts.length}
            />
          )}
        </div>
      ) : (
        <MessageError message="some unexpected error occurred" />
      )}
    </>
  );
}
