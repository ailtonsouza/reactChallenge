const customSelector = () => {
  const mathSimbols = [
    { Simbolo: "<", valor: "Bigger than" },
    { Simbolo: ">", valor: "Less than" },
    { Simbolo: "≤", valor: "Bigger than or equal to" },
    { Simbolo: "≥", valor: "Less than or equal to" },
    { Simbolo: "=", valor: "Equal to" },
    { Simbolo: "≠", valor: "Different to" },
  ];

  const alphabeticallySimbols = [
    { Simbolo: "✓", valor: "Filter" },
    { Simbolo: "x", valor: "Doesn't Filter" },
  ];

  return {
    mathSimbols,
    alphabeticallySimbols,
  };
};

export default customSelector;
