const customFilter = (value, data) => {
  switch (value.valor) {
    case "Less than":
      console.log(value, "x", data);
      return data.filter(
        (x) => x[`${value.label.toLowerCase()}`] * 1 < value.inputValue * 1
      );
    case "Bigger than":
      return data.filter(
        (x) => x[`${value.label.toLowerCase()}`] * 1 > value.inputValue * 1
      );
    case "Less than or equal to":
      return data.filter(
        (x) => x[`${value.label.toLowerCase()}`] * 1 <= value.inputValue * 1
      );
    case "Bigger than or equal to":
      return data.filter(
        (x) => x[`${value.label.toLowerCase()}`] * 1 >= value.inputValue * 1
      );
    case "Different to":
      return data.filter(
        (x) => x[`${value.label.toLowerCase()}`] != value.inputValue
      );

    case "Equal to":
      return data.filter(
        (x) => x[`${value.label.toLowerCase()}`] == value.inputValue
      );
    case "Filter":
      return [...data].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

    default:
      return data;
  }
};

export default customFilter;
