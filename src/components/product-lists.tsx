"use client";
import React, { useCallback, useEffect } from "react";
import Heading from "./ui/heading";
import { useGetProductsQuery } from "../../slices/productSlices";
import ProductCard from "./products-card";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import Loading from "@/app/loading";
import { Product } from "@/lib/types";

const ProductLists = ({title, text,products}:{title:string,text:string,products:string[]}) => {
  
  const dispatch = useDispatch();
const isLoading=false;

  const handleAddToCart = useCallback(
    ({ id, name, price, images }: Product) => {
      dispatch(addToCart({ id, name, price, images, quantity: 1 }));
    },
    [dispatch]
  );

  return (
    <section className="py-4 w-full">
      <div className="container mx-auto sm:px-4 md:px-6">
        <Heading title={title} text={text} />
        <main className="flex  flex-1 flex-col gap-4 mt-4 bg-muted/40 p-4 md:gap-8 md:p-10">
          {isLoading && (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full border-4 border-primary border-t-transparent h-8 w-8" />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {products &&
              products.length > 0 &&
              products.map((product: any) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleAddToCart={()=>handleAddToCart}
                />
              ))}
          </div>
        </main>
       
      </div>
    </section>
  );
};

export default ProductLists;
