(
    function () {
        let metric = ["mile", "kilometer"];
        document.addEventListener('keydown', (e) => {
            if (e.key === "k") {
                metric = ["kilometer", "mile"];

            } else if (e.key === "m") {
                metric = ["mile", "kilometer"];
            }
        })

        document.getElementById('convert').addEventListener('submit', (e) => {
            e.preventDefault();
            const value = document.getElementById("distance").value;
            const answer = document.getElementById("answer").children[0];
            let total = 0;
            if ((typeof Number(value)) === "number" && !isNaN(Number(value))) {
                if (metric[0] === "mile") {
                    total = (value * 1.60934).toFixed(3);
                }
                else {
                    total = (value / 1.60934).toFixed(3);
                }
                if (value !== "") {
                    answer.innerHTML = `${value} ${value > 1 ? `${metric[0]}s` : `${metric[0]}`} converts to ${total % Math.trunc(total) > 0 ? total : Math.trunc(total)} ${metric[1]}.`;
                    answer.className = "";
                }
            }
            else {
                answer.className = "error";
                answer.innerHTML = "Please enter a valid number.";
            }
        });
    }()
)