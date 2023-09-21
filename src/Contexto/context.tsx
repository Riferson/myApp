import React, { createContext, useContext, useState } from 'react';

interface ContextData {
    dados: any; // Substitua 'any' pelo tipo apropriado dos seus dados
    atualizarDados: (novosDados: any) => void; // Substitua 'any' pelo tipo apropriado
  }
// Crie um contexto
const MyContext = createContext<ContextData>({
    dados: undefined,
    atualizarDados: function (novosDados: any): void {
        throw new Error('Function not implemented.');
    }
});

// Crie um provedor que envolve sua aplicação
export function MyContextProvider({ children }:any) {
  const [dados, setDados] = useState({}); // Seu estado global

  // Funções para modificar o estado global
  function atualizarDados(novosDados: any) {
    setDados(novosDados);
  }

  return (
    <MyContext.Provider value={{ dados, atualizarDados }}>
      {children}
    </MyContext.Provider>
  );
}

// Um gancho personalizado para usar o contexto
export function useMyContext() {
  return useContext(MyContext);
}