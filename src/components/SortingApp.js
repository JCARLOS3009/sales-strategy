// Componente SortingApp com árvore binária de busca para ordenação
import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

// Definição da classe para um nó da árvore binária de busca
class Node {
  constructor(product) {
    this.product = product;
    this.left = null;
    this.right = null;
  }
}

const SortingApp = ({ initialProducts }) => {
  const [root, setRoot] = useState(null);

  useEffect(() => {
    // Função para inserir um produto na árvore binária de busca
    const insertNode = (node, product) => {
      if (!node) {
        return new Node(product);
      }

      if (product.vendas < node.product.vendas) {
        node.left = insertNode(node.left, product);
      } else {
        node.right = insertNode(node.right, product);
      }

      return node;
    };

    // Construir a árvore binária de busca com os produtos iniciais
    let treeRoot = null;
    initialProducts.forEach(product => {
      treeRoot = insertNode(treeRoot, product);
    });
    setRoot(treeRoot);
  }, [initialProducts]);

  // Função para percorrer a árvore binária de busca em ordem e obter os produtos ordenados
  const inorderTraversal = node => {
    if (!node) return [];
    return [...inorderTraversal(node.left), node.product, ...inorderTraversal(node.right)];
  };

  const sortedProducts = inorderTraversal(root);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ProductList products={sortedProducts} />
    </div>
  );
};

export default SortingApp;
