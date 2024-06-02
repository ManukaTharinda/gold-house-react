import React, { useState } from "react";
import { productData } from "../../../Components/Product Card/ProductData";
import ReactPaginate from "react-paginate";
import ProductCard from "../../../Components/Product Card/ProductCard";

const ProductList = () => {
  const [prData, setPrData] = useState(productData);
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 12;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = prData
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
      return (
        <div className="productList">
          <ProductCard item={product} key={product.id} />
        </div>
      );
    });

  const pageCount = Math.ceil(prData.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="productList flex flex-wrap gap-[50px] justify-center md:justify-center  left-0 right-0 ">
      {displayProducts}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default ProductList;
