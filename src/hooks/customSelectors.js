const customSelector = () => {
  const mathSimbols = [
    { Simbolo: "<", valor: "Menor que" },
    { Simbolo: ">", valor: "Maior que" },
    { Simbolo: "≤", valor: "Menor ou igual" },
    { Simbolo: "≥", valor: "Maior ou igual" },
    { Simbolo: "=", valor: "Igual a" },
    { Simbolo: "≠", valor: "Diferente" },
  ];

  const stringSimbols = [
    { Simbolo: "⊇", valor: "Contem" },
    { Simbolo: "≠", valor: "Diferente" },
    { Simbolo: "=", valor: "Igual a" },
    { Simbolo: "⊅", valor: "Não contem" },
  ];

  const alphabeticallySimbols = [
    { Simbolo: "✓", valor: "Filter" },
    { Simbolo: "x", valor: "Doesnt Filter" },
  ];

  return {
    mathSimbols,
    stringSimbols,
    alphabeticallySimbols,
  };
};

export default customSelector;
