import React, { useState } from "react";


const Task = () => {

    const gridSize = 3;
    const totalBoxes = gridSize * gridSize;
    const [boxColors, setBoxColors] = useState(Array(totalBoxes).fill("white"));
    const [clickedOrder, setClickedOrder] = useState([]);

    const handleClick = (index) => {
        if (boxColors[index] === "white") {
            const newColors = [...boxColors];
            newColors[index] = "green";
            setBoxColors(newColors);
            setClickedOrder([...clickedOrder, index]);

            // If this is the last (9th) click, start changing colors to orange
            if (clickedOrder.length + 1 === totalBoxes) {
                changeColorsToOrange([...clickedOrder, index]);
            }
        }
    };

    const changeColorsToOrange = (order) => {
        order.forEach((idx, i) => {
            setTimeout(() => {
                setBoxColors((prev) => {
                    const newColors = [...prev];
                    newColors[idx] = "orange";
                    return newColors;
                });
            }, i * 500); // Change color in sequence every 500ms
        });
    };
    return (
        <div>


            <div className="container mt-5 m-auto justify-content-center">
                <div className="row m-auto">
                    <div className="col">
                        <div style={{ display: "grid", gridTemplateColumns: `repeat(${gridSize}, 100px)`, gap: "10px" }}>
                            {boxColors.map((color, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleClick(index)}
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        backgroundColor: color,
                                        border: "2px solid black",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Task
