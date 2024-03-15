// Componente de consumo da API mockada
import React, { useEffect, useState } from 'react';
import SortingApp from './SortingApp'; // Importe o componente SortingApp

const API_URL = 'https://example.com/mock-api'; // URL da API mockada

const ApiConsumer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Função para obter os dados da API
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados');
        }
        const data = await response.json();
        setProducts(data); // Define os produtos com os dados recebidos da API
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData(); // Chama a função para buscar os dados da API
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return <SortingApp initialProducts={products} />; // Renderiza o componente SortingApp com os dados recebidos da API
};

export default ApiConsumer;
