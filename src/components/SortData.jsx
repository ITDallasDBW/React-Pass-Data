import React from 'react';

const SortData = (e) => {
    const sortMethod = e.target.value;
    let sorted = [...dataToSort];

    switch (sortMethod) {
      case "A_Z":
        sorted.sort((a, b) => a.Title.localeCompare(b.Title));
        console.log(sorted);
        break;
      case "Z_A":
        sorted.sort((b, a) => a.Title.localeCompare(b.Title));
        console.log(sorted);
        break;
      case "H_L":
        sorted.sort((b, a) => a.Year.localeCompare(b.Year));
        console.log(sorted);
        break;
      case "L_H":
        sorted.sort((a, b) => a.Year.localeCompare(b.Year));
        console.log(sorted);
        break;
      default:
        sorted = dataToSort;
        console.log(sorted);
    }
    onSort(sorted);
  };
    return (

        <div>
            
        </div>
    );
}

export default Sort;
