import React, { useMemo } from 'react';
import {
  MdChevronLeft,
  MdFirstPage,
  MdChevronRight,
  MdLastPage,
} from 'react-icons/md';

import { Container, ButtonNumber } from './styles';

export default function Paginacao({
  totalRegistros,
  registrosPorPagina = 10,
  handleMudarPagina,
  pagina = 1,
}) {
  const qtdPaginas = useMemo(() => {
    if (!totalRegistros) return 0;
    return Math.ceil(totalRegistros / registrosPorPagina);
  }, [totalRegistros, registrosPorPagina]);

  const paginas = useMemo(() => {
    if (qtdPaginas === 0) return [];
    const total = 10;
    let dir;
    let esq = (dir = total / 2);
    const arr = [];
    if (pagina - esq <= 0) {
      dir += Math.abs(pagina - esq) + 1;
      if (dir + pagina > qtdPaginas) dir = qtdPaginas - pagina;
      esq = pagina - 1;
    } else if (pagina + dir > qtdPaginas) {
      esq += pagina + dir - qtdPaginas;
      if (pagina - esq < 0) esq = pagina - 1;
      dir = qtdPaginas - pagina;
    }
    for (let i = esq; i > 0; i--) arr.push(pagina - i);
    for (let i = 0; i <= dir; i++) arr.push(pagina + i);
    return arr;
  }, [pagina, qtdPaginas]);

  return (
    <Container>
      {qtdPaginas > 1 && (
        <>
          <button
            className="btn btn-primary"
            onClick={() => handleMudarPagina(1)}
            title="Primeira página"
            disabled={pagina === 1}
          >
            <MdFirstPage></MdFirstPage>
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleMudarPagina(pagina - 1)}
            title="Página anterior"
            disabled={pagina === 1}
          >
            <MdChevronLeft></MdChevronLeft>
          </button>

          {paginas.map(p => (
            <ButtonNumber
              key={`page${p}`}
              className="btn"
              onClick={() => handleMudarPagina(p)}
              disabled={pagina === p}
            >
              {p}
            </ButtonNumber>
          ))}

          <button
            className="btn btn-primary"
            onClick={() => handleMudarPagina(pagina + 1)}
            title="Próxima página"
            disabled={pagina === qtdPaginas}
          >
            <MdChevronRight></MdChevronRight>
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleMudarPagina(qtdPaginas)}
            title="Última Página"
            disabled={pagina === qtdPaginas}
          >
            <MdLastPage></MdLastPage>
          </button>
        </>
      )}
    </Container>
  );
}
