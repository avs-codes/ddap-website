import React, { Component } from "react";

class Garden extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: 28,
      cols: 48,
      checkboxGrid: [],
      seedPlantedCount: 0,
      hoverCount: 0,
      canPlantSeed: false,
    };
  }

  componentDidMount() {
    this.createCheckboxGrid();
  }

  createCheckboxGrid() {
    const { rows, cols } = this.state;
    const checkboxGrid = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push({});
      }
      checkboxGrid.push(row);
    }

    this.setState({ checkboxGrid });
  }

  handleDivClick = (event) => {
    if (event.target.parentElement.classList.contains("checkbox-grid")) {
      plantSeed();
    }
  };

  // SEED FUNCTIONSSSSSS

  // SEED ONE

  seedOne(rowIndex, colIndex) {
    const { seedPlantedCount } = this.state;

    const updatedGrid = [...this.state.checkboxGrid];
    updatedGrid[rowIndex][colIndex].checked = true;

    this.setState({
      checkboxGrid: updatedGrid,
      seedPlantedCount: seedPlantedCount + 1,
    });

    const checkboxElement = document.getElementById(
      `checkbox-${rowIndex}-${colIndex}`
    );
    if (checkboxElement) {
      checkboxElement.style.backgroundColor = "#6D5A50";

      setTimeout(() => {
        this.evolveSeedOne(rowIndex, colIndex);
      }, 500);
    }
  }

  evolveSeedOne(rowIndex, colIndex) {
    const nearbyIndices = [
      [rowIndex - 1, colIndex],
      [rowIndex + 1, colIndex],
      [rowIndex, colIndex - 1],
      [rowIndex, colIndex + 1],
    ];

    const updatedGrid = [...this.state.checkboxGrid];
    const originalCheckbox = document.getElementById(
      `checkbox-${rowIndex}-${colIndex}`
    );
    if (originalCheckbox) {
      originalCheckbox.style.backgroundColor = "#FFF0DF"; // Change the background color
    }

    nearbyIndices.forEach(([r, c]) => {
      if (r >= 0 && r < this.state.rows && c >= 0 && c < this.state.cols) {
        updatedGrid[r][c].checked = true;
        const nearbyCheckbox = document.getElementById(`checkbox-${r}-${c}`);
        if (nearbyCheckbox) {
          nearbyCheckbox.style.backgroundColor = "#FFC0C0";
        }
      }
    });

    this.setState({ checkboxGrid: updatedGrid });

    setTimeout(() => {
      this.evolveSeedOneAgain(rowIndex, colIndex);
    }, 500);
  }

  evolveSeedOneAgain(rowIndex, colIndex) {
    const nearbyIndicesPink = [
      //top section
      [rowIndex - 2, colIndex],
      [rowIndex - 1, colIndex + 1],
      [rowIndex - 2, colIndex + 1],
      //bottom section
      [rowIndex + 2, colIndex],
      [rowIndex + 2, colIndex - 1],
      [rowIndex + 1, colIndex - 1],
      //left section
      [rowIndex, colIndex - 2],
      [rowIndex - 1, colIndex - 2],
      [rowIndex - 1, colIndex - 1],

      //right section
      [rowIndex, colIndex + 2],
      [rowIndex + 1, colIndex + 1],
      [rowIndex + 1, colIndex + 2],
      // [rowIndex, colIndex + 3],
    ];

    // const nearbyIndicesWhite = [
    //   [rowIndex - 1, colIndex - 1]
    //   [rowIndex + 1, colIndex - 1],
    //   [rowIndex - 1, colIndex + 1],
    //   [rowIndex + 1, colIndex + 1],
    // ];

    const updatedGrid = [...this.state.checkboxGrid];
    const originalCheckbox = document.getElementById(
      `checkbox-${rowIndex}-${colIndex}`
    );

    nearbyIndicesPink.forEach(([r, c]) => {
      if (r >= 0 && r < this.state.rows && c >= 0 && c < this.state.cols) {
        updatedGrid[r][c].checked = true;
        const nearbyCheckbox = document.getElementById(`checkbox-${r}-${c}`);
        if (nearbyCheckbox) {
          nearbyCheckbox.style.backgroundColor = "#FFDFDF";
        }
      }
    });

    // nearbyIndicesWhite.forEach(([r, c]) => {
    //   if (r >= 0 && r < this.state.rows && c >= 0 && c < this.state.cols) {
    //     updatedGrid[r][c].checked = true;
    //     const nearbyCheckbox = document.getElementById(`checkbox-${r}-${c}`);
    //     if (nearbyCheckbox) {
    //       nearbyCheckbox.style.backgroundColor = "#FFF";
    //     }
    //   }
    // });

    this.setState({ checkboxGrid: updatedGrid });
  }

  // SEED TWO

  seedTwo(rowIndex, colIndex) {
    const { seedPlantedCount } = this.state;

    const updatedGrid = [...this.state.checkboxGrid];
    updatedGrid[rowIndex][colIndex].checked = true;

    this.setState({
      checkboxGrid: updatedGrid,
      seedPlantedCount: seedPlantedCount + 1,
    });

    const checkboxElement = document.getElementById(
      `checkbox-${rowIndex}-${colIndex}`
    );
    if (checkboxElement) {
      checkboxElement.style.backgroundColor = "#5D5868";

      setTimeout(() => {
        this.evolveSeedTwo(rowIndex, colIndex);
      }, 500);
    }
  }

  evolveSeedTwo(rowIndex, colIndex) {
    const nearbyIndices = [
      [rowIndex - 1, colIndex],
      [rowIndex + 1, colIndex],
      [rowIndex, colIndex - 1],
      [rowIndex, colIndex + 1],
    ];

    const updatedGrid = [...this.state.checkboxGrid];
    const originalCheckbox = document.getElementById(
      `checkbox-${rowIndex}-${colIndex}`
    );
    if (originalCheckbox) {
      originalCheckbox.style.backgroundColor = "#FFF0DF"; // Change the background color of the central checkbox
    }

    nearbyIndices.forEach(([r, c]) => {
      if (r >= 0 && r < this.state.rows && c >= 0 && c < this.state.cols) {
        updatedGrid[r][c].checked = true;
        const nearbyCheckbox = document.getElementById(`checkbox-${r}-${c}`);
        if (nearbyCheckbox) {
          nearbyCheckbox.style.backgroundColor = "#6B3DB6";
        }
      }
    });

    this.setState({ checkboxGrid: updatedGrid });

    setTimeout(() => {
      this.evolveSeedTwoAgain(rowIndex, colIndex);
    }, 500);
  }

  evolveSeedTwoAgain(rowIndex, colIndex) {
    const nearbyIndicesLightBlue = [
      //top section
      [rowIndex - 2, colIndex],
      [rowIndex - 2, colIndex - 1],
      [rowIndex - 2, colIndex + 1],

      //bottom section
      [rowIndex + 2, colIndex],
      [rowIndex + 2, colIndex - 1],
      [rowIndex + 2, colIndex + 1],
      //left section
      [rowIndex, colIndex - 2],
      [rowIndex - 1, colIndex - 2],
      [rowIndex + 1, colIndex - 2],
      //right section
      [rowIndex, colIndex + 2],
      [rowIndex + 1, colIndex + 2],
      [rowIndex - 1, colIndex + 2],
    ];

    const nearbyIndicesWhite = [
      [rowIndex - 1, colIndex - 1],
      [rowIndex + 1, colIndex - 1],
      [rowIndex - 1, colIndex + 1],
      [rowIndex + 1, colIndex + 1],
    ];

    const updatedGrid = [...this.state.checkboxGrid];
    const originalCheckbox = document.getElementById(
      `checkbox-${rowIndex}-${colIndex}`
    );

    nearbyIndicesLightBlue.forEach(([r, c]) => {
      if (r >= 0 && r < this.state.rows && c >= 0 && c < this.state.cols) {
        updatedGrid[r][c].checked = true;
        const nearbyCheckbox = document.getElementById(`checkbox-${r}-${c}`);
        if (nearbyCheckbox) {
          nearbyCheckbox.style.backgroundColor = "#BECCFF";
        }
      }
    });

    nearbyIndicesWhite.forEach(([r, c]) => {
      if (r >= 0 && r < this.state.rows && c >= 0 && c < this.state.cols) {
        updatedGrid[r][c].checked = true;
        const nearbyCheckbox = document.getElementById(`checkbox-${r}-${c}`);
        if (nearbyCheckbox) {
          nearbyCheckbox.style.backgroundColor = "#FFF";
        }
      }
    });

    this.setState({ checkboxGrid: updatedGrid });

    setTimeout(() => {
      this.evolveSeedTwoAgainAgain(rowIndex, colIndex);
    }, 500);
  }

  // evolveSeedTwoAgainAgain(rowIndex, colIndex) {
  //   const nearbyIndicesLightBlue = [
  //     // Top left petal
  //     [rowIndex, colIndex - 2],
  //     [rowIndex - 1, colIndex - 3],
  //     [rowIndex - 3, colIndex - 1],

  //     // Top Right petal
  //     [rowIndex - 2, colIndex],
  //     [rowIndex - 3, colIndex + 1],
  //     [rowIndex - 1, colIndex + 3],

  //     // Bottom Right petal
  //     [rowIndex, colIndex + 2],
  //     [rowIndex + 1, colIndex + 3],
  //     [rowIndex + 3, colIndex + 1],

  //     // Bottom Left petal
  //     [rowIndex + 2, colIndex],
  //     [rowIndex + 3, colIndex - 1],
  //     [rowIndex + 1, colIndex - 3],
  //     //Top Left Section
  //     [rowIndex - 1, colIndex - 1],
  //     [rowIndex - 1, colIndex - 2],
  //     [rowIndex - 2, colIndex - 2],
  //     [rowIndex - 2, colIndex - 1],
  //     //Top Right Section
  //     [rowIndex - 1, colIndex + 1],
  //     [rowIndex - 1, colIndex + 2],
  //     [rowIndex - 2, colIndex + 1],
  //     [rowIndex - 2, colIndex + 2],

  //     //Bottom Right Section
  //     [rowIndex + 1, colIndex + 1],
  //     [rowIndex + 2, colIndex + 1],
  //     [rowIndex + 2, colIndex + 2],
  //     [rowIndex + 1, colIndex + 2],

  //     //Bottom Left Section
  //     [rowIndex + 1, colIndex - 1],
  //     [rowIndex + 1, colIndex - 2],
  //     [rowIndex + 2, colIndex - 2],
  //     [rowIndex + 2, colIndex - 1],
  //   ];

  //   const nearbyIndicesPurple = [
  //     //Top Left
  //     [rowIndex - 3, colIndex - 2],
  //     [rowIndex - 2, colIndex - 3],
  //     //Top Right
  //     [rowIndex - 3, colIndex + 2],
  //     [rowIndex - 2, colIndex + 3],
  //     //Bottom Right
  //     [rowIndex + 2, colIndex + 3],
  //     [rowIndex + 3, colIndex + 2],
  //     //Bottom Left
  //     [rowIndex + 3, colIndex - 2],
  //     [rowIndex + 2, colIndex - 3],
  //   ];

  //   const nearbyIndicesWhite = [
  //     [rowIndex - 1, colIndex],
  //     [rowIndex + 1, colIndex],
  //     [rowIndex, colIndex - 1],
  //     [rowIndex, colIndex + 1],
  //   ];

  //   const updatedGrid = [...this.state.checkboxGrid];
  //   const originalCheckbox = document.getElementById(
  //     `checkbox-${rowIndex}-${colIndex}`
  //   );

  //   nearbyIndicesLightBlue.forEach(([r, c]) => {
  //     if (r >= 0 && r < this.state.rows && c >= 0 && c < this.state.cols) {
  //       updatedGrid[r][c].checked = true;
  //       const nearbyCheckbox = document.getElementById(`checkbox-${r}-${c}`);
  //       if (nearbyCheckbox) {
  //         nearbyCheckbox.style.backgroundColor = "#BECCFF";
  //       }
  //     }
  //   });

  //   nearbyIndicesPurple.forEach(([r, c]) => {
  //     if (r >= 0 && r < this.state.rows && c >= 0 && c < this.state.cols) {
  //       updatedGrid[r][c].checked = true;
  //       const nearbyCheckbox = document.getElementById(`checkbox-${r}-${c}`);
  //       if (nearbyCheckbox) {
  //         nearbyCheckbox.style.backgroundColor = "#6B3DB6";
  //       }
  //     }
  //   });

  //   nearbyIndicesWhite.forEach(([r, c]) => {
  //     if (r >= 0 && r < this.state.rows && c >= 0 && c < this.state.cols) {
  //       updatedGrid[r][c].checked = true;
  //       const nearbyCheckbox = document.getElementById(`checkbox-${r}-${c}`);
  //       if (nearbyCheckbox) {
  //         nearbyCheckbox.style.backgroundColor = "#FFF";
  //       }
  //     }
  //   });

  //   this.setState({ checkboxGrid: updatedGrid });
  // }

  // SEED THREE
  seedThree(rowIndex, colIndex) {
    const { seedPlantedCount } = this.state;

    const updatedGrid = [...this.state.checkboxGrid];
    updatedGrid[rowIndex][colIndex].checked = true;

    this.setState({
      checkboxGrid: updatedGrid,
      seedPlantedCount: seedPlantedCount + 1,
    });

    const checkboxElement = document.getElementById(
      `checkbox-${rowIndex}-${colIndex}`
    );
    if (checkboxElement) {
      checkboxElement.style.backgroundColor = "#8D8157";

      setTimeout(() => {
        this.evolveSeedThree(rowIndex, colIndex);
      }, 500);
    }
  }

  evolveSeedThree(rowIndex, colIndex) {
    const nearbyIndices = [
      [rowIndex - 1, colIndex],
      [rowIndex + 1, colIndex],
      [rowIndex, colIndex - 1],
      [rowIndex, colIndex + 1],
    ];

    const updatedGrid = [...this.state.checkboxGrid];
    const originalCheckbox = document.getElementById(
      `checkbox-${rowIndex}-${colIndex}`
    );
    if (originalCheckbox) {
      originalCheckbox.style.backgroundColor = "#FCFF7E"; // Change the background color
    }

    nearbyIndices.forEach(([r, c]) => {
      if (r >= 0 && r < this.state.rows && c >= 0 && c < this.state.cols) {
        updatedGrid[r][c].checked = true;
        const nearbyCheckbox = document.getElementById(`checkbox-${r}-${c}`);
        if (nearbyCheckbox) {
          nearbyCheckbox.style.backgroundColor = "#FF5E3A";
        }
      }
    });

    this.setState({ checkboxGrid: updatedGrid });
  }

  // SEED FOUR
  seedFour(rowIndex, colIndex) {
    const { seedPlantedCount } = this.state;

    const updatedGrid = [...this.state.checkboxGrid];
    updatedGrid[rowIndex][colIndex].checked = true;

    this.setState({
      checkboxGrid: updatedGrid,
      seedPlantedCount: seedPlantedCount + 1,
    });

    const checkboxElement = document.getElementById(
      `checkbox-${rowIndex}-${colIndex}`
    );
    if (checkboxElement) {
      checkboxElement.style.backgroundColor = "#3D2A18";

      setTimeout(() => {
        this.evolveSeedFour(rowIndex, colIndex);
      }, 500);
    }
  }

  evolveSeedFour(rowIndex, colIndex) {
    const nearbyIndices = [
      [rowIndex - 1, colIndex],
      [rowIndex + 1, colIndex],
      [rowIndex, colIndex - 1],
      [rowIndex, colIndex + 1],
    ];

    const updatedGrid = [...this.state.checkboxGrid];
    const originalCheckbox = document.getElementById(
      `checkbox-${rowIndex}-${colIndex}`
    );
    if (originalCheckbox) {
      originalCheckbox.style.backgroundColor = "#4F2B19"; // Change the background color
    }

    nearbyIndices.forEach(([r, c]) => {
      if (r >= 0 && r < this.state.rows && c >= 0 && c < this.state.cols) {
        updatedGrid[r][c].checked = true;
        const nearbyCheckbox = document.getElementById(`checkbox-${r}-${c}`);
        if (nearbyCheckbox) {
          nearbyCheckbox.style.backgroundColor = "#FFE297";
        }
      }
    });

    this.setState({ checkboxGrid: updatedGrid });
  }

  // SEED FIVE
  seedFive(rowIndex, colIndex) {
    const { seedPlantedCount } = this.state;

    const updatedGrid = [...this.state.checkboxGrid];
    updatedGrid[rowIndex][colIndex].checked = true;

    this.setState({
      checkboxGrid: updatedGrid,
      seedPlantedCount: seedPlantedCount + 1,
    });

    const checkboxElement = document.getElementById(
      `checkbox-${rowIndex}-${colIndex}`
    );
    if (checkboxElement) {
      checkboxElement.style.backgroundColor = "#BE988B";

      setTimeout(() => {
        this.evolveSeedFive(rowIndex, colIndex);
      }, 500);
    }
  }

  evolveSeedFive(rowIndex, colIndex) {
    const nearbyIndices = [
      [rowIndex - 1, colIndex],
      [rowIndex + 1, colIndex],
      [rowIndex, colIndex - 1],
      [rowIndex, colIndex + 1],
    ];

    const updatedGrid = [...this.state.checkboxGrid];
    const originalCheckbox = document.getElementById(
      `checkbox-${rowIndex}-${colIndex}`
    );
    if (originalCheckbox) {
      originalCheckbox.style.backgroundColor = "#D4FFB1"; // Change the background color
    }

    nearbyIndices.forEach(([r, c]) => {
      if (r >= 0 && r < this.state.rows && c >= 0 && c < this.state.cols) {
        updatedGrid[r][c].checked = true;
        const nearbyCheckbox = document.getElementById(`checkbox-${r}-${c}`);
        if (nearbyCheckbox) {
          nearbyCheckbox.style.backgroundColor = "#FF6DDF";
        }
      }
    });

    this.setState({ checkboxGrid: updatedGrid });
  }

  // END OF SEED FUNCTIONSSSSSS

  plantSeed(event, rowIndex, colIndex) {
    const { hoverCount, canPlantSeed } = this.state;

    if (canPlantSeed) {
      const seedFunctions = [
        "seedOne",
        "seedTwo",
        "seedThree",
        "seedFour",
        "seedFive",
        // "seedSix",
      ];
      const randomIndex = Math.floor(Math.random() * seedFunctions.length);
      const chosenSeedFunction = seedFunctions[randomIndex];

      this[chosenSeedFunction](rowIndex, colIndex);

      this.setState({ canPlantSeed: false, hoverCount: 0 });
    } else {
      if (hoverCount < 12) {
        this.setState({ hoverCount: hoverCount + 1 });
      } else {
        this.setState({ canPlantSeed: true });
      }
    }
  }

  plantSeedOnClick(event, rowIndex, colIndex) {
    const { hoverCount, canPlantSeed } = this.state;

    const seedFunctions = [
      "seedOne",
      "seedTwo",
      "seedThree",
      "seedFour",
      "seedFive",
      // "seedSix",
    ];
    const randomIndex = Math.floor(Math.random() * seedFunctions.length);
    const chosenSeedFunction = seedFunctions[randomIndex];

    this[chosenSeedFunction](rowIndex, colIndex);
  }

  render() {
    const { rows, cols, checkboxGrid } = this.state;

    return (
      <div className="front-page">
        <div
          className="checkbox-grid" // Add a class for styling purposes
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
          }}
        >
          {checkboxGrid.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((cell, colIndex) => (
                <div
                  id={`checkbox-${rowIndex}-${colIndex}`} // Added an ID for each checkbox element
                  key={colIndex}
                  className={`checkbox ${cell.checked ? "checked" : ""}`} // Add "checked" class if checked
                  onMouseEnter={() => this.plantSeed(event, rowIndex, colIndex)}
                  onClick={() =>
                    this.plantSeedOnClick(event, rowIndex, colIndex)
                  } // Call plantSeed()
                ></div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default Garden;
