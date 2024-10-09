const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve,delay)); // sleep function

do {
    await sleepNow(100)

    if (!document.URL.search("https://sergoias.portal.sagreseduca.com.br/challenges/")) {break}
    if (document == null || document == undefined) {break}

    console.log("site do sergoias")

    var wrongAlternatives = document.getElementsByClassName("h5p-iframe")[0]
        
    if (wrongAlternatives != null && wrongAlternatives != undefined) {
        wrongAlternatives = wrongAlternatives.contentWindow.document.firstElementChild.getElementsByTagName("body")[0]
       
        if (wrongAlternatives != null && wrongAlternatives != undefined) {
            wrongAlternatives = wrongAlternatives.getElementsByClassName("h5p-sc-alternatives")[0]
            
            if (wrongAlternatives != null && wrongAlternatives != undefined) {
                wrongAlternatives = wrongAlternatives.getElementsByClassName("h5p-sc-is-wrong")

                if (wrongAlternatives.length > 0 && wrongAlternatives != undefined && wrongAlternatives != null) {
                    for (const answer of wrongAlternatives) {
                        answer.outerHTML = "";
                        answer.innerHTML = "";
                    }
                }
            } 
        }
    }
} while (true)