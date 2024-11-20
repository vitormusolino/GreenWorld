import { useEffect, useState } from "react";

export default function Usuario() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const filmesFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFilmes(filmesFavoritos);
  }, []);

  return (
    <div className="py-10 px-28">
      <h2 className="text-2xl font-bold">Filmes para assistir</h2>
      <div className="flex justify-start mb-10 overflow-x-auto scroll-style">
        {filmes.length > 0 ? (
          filmes.map((filme) => (
            <MovieCard key={filme.id} {...filme} />
          ))
        ) : (
          <p className="mt-10">Você ainda não tem filmes salvos.</p>
        )}
      </div>
    </div>
  );
}
