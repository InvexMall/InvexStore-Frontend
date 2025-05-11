import React, { useState, useMemo, useEffect } from "react";
import useProductData from "../../hooks/useProductdata";

const ProductTable = ({isDetailVisible }) => {
    const { data, isLoading, refreshProducts } = useProductData();
    useEffect(() => {
        if (!isDetailVisible) {
          refreshProducts();
        }
      }, [isDetailVisible, refreshProducts]);

      console.log()
}