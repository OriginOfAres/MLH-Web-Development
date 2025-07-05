
                let btn = document.getElementById("clickButton");
                let message = document.getElementById("message");

                btn.addEventListener("click", function() {
                    message.innerHTML = "Just kidding, Sharks don't code!";
                });
                console.log("Welcome to my page!");
                alert("Welcome to my page!");

                let reserBtn = document.getElementById("resetBtn");
                resetBtn.addEventListener("click", function() {
                    message.innerHTML = "Rome wasen't built in a day, but this page was!";
                });

                let quotes = document.querySelectorAll(".quote");
                quotes.forEach(function(quote, index) {
                    quote.innerHTML = "This is quote number " + (index + 1);
                });

                let toggleBioBtn = document.getElementById("toggleBio");
                let details = document.getElementById("details");   

                toggleBioBtn.addEventListener("click", function() {
                    if (details.style.display === "none") {
                        details.style.display = "block";
                        toggleBioBtn.innerHTML = "Show less";
                    } else {
                        details.style.display = "none";
                        toggleBioBtn.innerHTML = "Show more";
                    }
                }); 
            