import React, { useState } from "react";
import { Product } from "../../../../types";

interface ProductSelectorProps {
  onAddItem: (productId: Product, quantity: number) => void;
  products: Product[];
}

const ProductSelector: React.FC<ProductSelectorProps> = ({
  onAddItem,
  products,
}) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddItem = () => {
    if (product?.id && quantity > 0) {
      onAddItem(product, quantity);
      setQuantity(1);
    }
  };

  return (
    <div className="my-4">
      <div className="flex space-x-4">
        <select
          value={product?.id ?? ""}
          onChange={(e) => {
            const id = e.target.value;
            const foundProduct = products.find((prd) => prd.id === id);
            setProduct(foundProduct);
          }}
          className="border flex-1 border-gray-300 rounded p-2"
        >
          <option value="">Select a product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.description}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min="1"
          className="border border-gray-300 rounded p-2 w-20"
        />
        <button
          onClick={handleAddItem}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default ProductSelector;
