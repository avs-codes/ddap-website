import React, { Component } from "react";

class Garden extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: 22,
      cols: 40,
      checkboxGrid: [],
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

  render() {
    const { rows, cols, checkboxGrid } = this.state;

    return (
      <div className="front-page">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
          }}
        >
          {checkboxGrid.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((_, colIndex) => (
                <input
                  key={colIndex}
                  type="checkbox"
                  style={{
                    width: "1.25vw",
                    height: "1.25vw",
                    marginBottom: "1vw",
                    padding: "0.25vw",
                    boxSizing: "border-box",
                  }}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default Garden;
