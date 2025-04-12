function calculateArea() {
    const Circle = {
        calculateArea: function(radius) {
            return Math.PI * radius ** 2;
        }
    };
    const radius = parseFloat(document.getElementById("radiusInput").value);

    if (!isNaN(radius)) {
        const area = Circle.calculateArea(radius);
        document.getElementById("result").textContent = `Pole koła wynosi: ${area.toFixed(2)}`;
    } else {
        document.getElementById("result").textContent = "Wprowadź poprawną wartość promienia.";
    }
}

function divisibility()
{
    let arr = document.getElementById('array').value
    arr = arr.split(" ");

    for (let a = 0; a < arr.length; ++a)
    {
        arr.push(parseInt(arr[0]))
        arr.shift()
    }
    let newArr = []
    for(let i in arr)
    {

        if (parseInt(arr[i]) % 5 == 0)
        {
            newArr.push(arr[i])
        }

    }
    document.getElementById('div').innerHTML = "Multiples of five: "+ parseInt(newArr.length)
}

function zeroexisting()
{
    let arr = document.getElementById('array').value
    arr = arr.split(" ");
    document.getElementById('zero').innerHTML = "Zero is present: "+ Boolean(arr.includes("0"))
}

function arithmeticmean()
{
    let arr = document.getElementById('array').value
    arr = arr.split(" ");
    for (let a = 0; a < arr.length; ++a)
    {
        arr.push(parseInt(arr[0]))
        arr.shift()
    }
    let average = 0
    for(let i in arr)
    {
        average += parseInt(arr[i])
    }
    average = average/arr.length
    document.getElementById('mean').innerHTML = "Average value: "+ average
}

class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(newRadius) {
        this._radius = newRadius;
    }

    calculateArea() {
        return Math.PI * this._radius ** 2;
    }

    calculateMonteCarloArea(samples) {
        let insideCircle = 0;
        for (let i = 0; i < samples; i++) {
            const x = Math.random() * this._radius * 2 - this._radius;
            const y = Math.random() * this._radius * 2 - this._radius;
            if (x ** 2 + y ** 2 <= this._radius ** 2) {
                insideCircle++;
            }
        }
        return (insideCircle / samples) * (4 * this._radius ** 2);
    }
}

function calculateAreas() {
    const radius = parseFloat(document.getElementById("radiusInput2").value);
    const samples = parseInt(document.getElementById("samplesInput").value) || 1;
    if (!isNaN(radius)) {
        const circle1 = new Circle(radius);
        const circle2 = new Circle(radius);

        const area1 = circle1.calculateArea();
        document.getElementById("result1").textContent = `Pole koła (metoda klasyczna): ${area1.toFixed(2)}`;

        const area2 = circle2.calculateMonteCarloArea(samples);
        document.getElementById("result2").textContent = `Pole koła (metoda Monte Carlo): ${area2.toFixed(2)}`;
    } else {
        document.getElementById("result1").textContent = "Wprowadź poprawną wartość promienia.";
        document.getElementById("result2").textContent = "";
    }
}

