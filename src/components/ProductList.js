// Componente de exibição da lista de produtos
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      <table>
        <thead>
          <tr>
            <th>SKU</th>
            <th>Vendas</th>
            <th>Estoque</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.sku}</td>
              <td>{product.vendas}</td>
              <td>{product.estoque}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
