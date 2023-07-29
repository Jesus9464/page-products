"use client";
import { useAppSelector } from "@/common/store/hooks";
import { productsAddCartSelector } from "@/common/store/selector";
import { Card, MessageError, Pagination } from "@/components/primitives";
import Head from "next/head";
import React, { useState } from "react";

function Pages() {
  const productsAddCart = useAppSelector(productsAddCartSelector);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = productsAddCart?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages =
    productsAddCart && Math.ceil(productsAddCart.length / productsPerPage);

  return (
    <>
      <Head>
        <meta name="description" content="a test page" />
      </Head>
      {productsAddCart.length > 0 ? (
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center">
            {currentProducts &&
              currentProducts.map((item) => <Card key={item.id} item={item} />)}
          </div>
          {productsAddCart && productsAddCart.length >= 9 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePrevius={() => setCurrentPage((prev) => prev - 1)}
              isDisabledPrev={currentPage === 1}
              handleNext={() => setCurrentPage((prev) => prev + 1)}
              isDisabledNext={indexOfLastProduct >= productsAddCart.length}
            />
          )}
        </div>
      ) : (
        <MessageError message=" You have no products added to the cart" />
      )}
    </>
  );
}

export default Pages;
