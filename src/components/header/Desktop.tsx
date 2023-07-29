import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useAppSelector } from "@/common/store/hooks";
import { productsAddCartSelector } from "@/common/store/selector";

type Props = {
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  routeProduct: string;
  routeShopping: string;
};

const Desktop: React.FC<Props> = ({
  setMobileMenuOpen,
  routeProduct,
  routeShopping,
}) => {
  const productsAddCart = useAppSelector(productsAddCartSelector);

  const totalProducts = productsAddCart.length;
  const totalPrice = productsAddCart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-sm">
            Total Products: {totalProducts}
          </p>
          <p className="text-gray-500 text-sm">Total Price: {totalPrice}</p>
        </div>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <Link
          href={routeProduct}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Product
        </Link>
        <Link
          href={routeShopping}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Shopping
        </Link>
      </div>
    </nav>
  );
};

export default Desktop;
