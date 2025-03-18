"use strict"
(
    function(){        
        document.getElementById("convert").addEventListener("submit", (event) => {
            event.preventDefault();
            const value = document.getElementById("distance").value;
            const answer = document.getElementById("answer").children[0];
            if((typeof Number(value)) === "number" && !isNaN(Number(value))){
                const total = (value * 1.60934).toFixed(3);
                if(value !== ""){
                    answer.innerHTML = `${value} ${value > 1 ? "miles" : "mile"} converts to ${total % Math.trunc(total) > 0 ? total : Math.trunc(total)} kilometers.`;
                    answer.className = "";
                }
            } else {
                answer.className = "error";
                answer.innerHTML = "Please enter a valid number.";
            }
        })


    }()
)