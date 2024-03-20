function calculateTotal() {
    var costPerLiter = parseFloat(document.getElementById("costPerLiter").value);
    var litersPurchased = parseFloat(document.getElementById("litersPurchased").value);

    var totalCost = costPerLiter * litersPurchased;

    document.getElementById("totalCost").innerText = "Total Cost: $" + totalCost.toFixed(2);
}