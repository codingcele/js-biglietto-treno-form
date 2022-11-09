

var element = document.getElementById("genera");

element.addEventListener('click',
    
    function() {
        var ob = document.getElementById("app");
        ob.classList.add("block");

        let km = document.getElementById("km").value;
        let age = document.getElementById("eta").value;
        let prcPerKm = 0.21;
        let underageDsc = 0.20;
        let over65Dsc = 0.40;
        if (age === "min") {
            price = km * prcPerKm * (1 - underageDsc)
        }
        else if (age === "over") {
            price = km * prcPerKm * (1- over65Dsc)
        }
        else {
            price = km * prcPerKm
        }
        
        let rndPrice = price.toFixed(2);
        document.getElementById("getPrice").innerHTML = `${rndPrice}`;
        let nom = document.getElementById("nomeCognome").value;
        document.getElementById("addName").innerHTML = `${nom}`;
    }
);

var annulla = document.getElementById("annulla");

annulla.addEventListener('click',
    
    function() {
        var ob = document.getElementById("app");
        ob.classList.add("dis");
        document.getElementById("frm1").reset();
    }
);



