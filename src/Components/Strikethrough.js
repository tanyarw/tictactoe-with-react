import React from "react";

const Strikethrough = ({winner,squares}) => {
    console.log("winner", winner)
    console.log("squares", squares)
    
    let winningIndex = null;
    let style = null;
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4 ,6]
    ];

    if (winner){
        for (let i = 0; i< lines.length; i++){
            const [a,b,c] = lines[i];
            if (squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
                winningIndex = i
                console.log("winning index", i)
            }
        }
    }  

    const defaultWidth = "280px";
    const diagonalWidth = "390px";

    switch (winningIndex) {
        case 0:
        style = 
            { 
                height: "5px",
                transform: "none",
                top: "179px",
                left: "479px",
                width: defaultWidth }
        break;
        case 1:
        style = 
            {
                height: "5px",
                transform: "none",
                top: "278px",
                left: "479px",
                width: defaultWidth }
        break;
        case 2:
        style = 
            {
                height: "5px",
                transform: "none",
                top: "376px",
                left: "479px",
                width: defaultWidth }
        break;
        case 3:
        style = 
            {
                height: "5px",
                transform: "rotate(90deg)",
                top: "279px",
                left: "375px",
                width: defaultWidth }
        break;
        case 4:
        style = 
            {
                height: "5px",
                transform: "rotate(90deg)",
                top: "279px",
                left: "474px",
                width: defaultWidth }
        break;
        case 5:
        style = 
            {
                height: "5px",
                transform: "rotate(90deg)",
                top: "279px",
                left: "572px",
                width: defaultWidth }
        break;
        case 6:
        style = 
            {
                height: "5px",
                transform: "rotate(45deg)",
                top: "278px",
                left: "419px",
                width: diagonalWidth }
        break;
        case 7:
        style = 
            {
                height: "5px",
                transform: "rotate(-45deg)",
                top: "278px",
                left: "419px",
                width: diagonalWidth }
        break;
        default:
        style = null
    }

    return(
        <div className="strikethrough" style={style}>
        </div>
    );
};

export default Strikethrough;