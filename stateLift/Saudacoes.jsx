const Saudacoes = ({ name }) => {
  return (
    <>
      {name && (
        <div>
          <h2>
            Componente Filho <span>(condicional)</span>{" "}
          </h2>
          <p>Saudações: {name}</p>
        </div>
      )}
    </>
  );
};

export default Saudacoes;
