// Função para realizar o Heap Sort
function heapSort(array) {
    // Função para construir um heap máximo
    function heapify(arr, n, i) {
      let largest = i; // Inicializa o maior como raiz
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      // Se o filho esquerdo é maior que a raiz
      if (left < n && arr[left].vendas > arr[largest].vendas) {
        largest = left;
      }
  
      // Se o filho direito é maior que o maior até agora
      if (right < n && arr[right].vendas > arr[largest].vendas) {
        largest = right;
      }
  
      // Se o maior não é a raiz
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Troca
        heapify(arr, n, largest);
      }
    }
  
    // Função para ordenar um array
    function sort(arr) {
      const n = arr.length;
  
      // Constrói um heap (reorganiza o array)
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
      }
  
      // Extrai um elemento do heap, um por um
      for (let i = n - 1; i > 0; i--) {
        // Move a raiz atual para o final
        [arr[0], arr[i]] = [arr[i], arr[0]];
  
        // Chama o heapify no heap reduzido
        heapify(arr, i, 0);
      }
      return arr;
    }
  
    return sort(array);
  }
  
  export default heapSort;
  