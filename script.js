    let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
    console.log(fruits[0]);
    fruits.splice(0, 1);
    console.log(fruits);

    //Tri du tableau
    fruits.sort();
    console.log(fruits);
    
    fruits.push("Kiwi");
    console.log(fruits);
    //fruits.concat();
        //AUTRE METHODE
    fruits = fruits.filter((value)=> value != "Apples");
    fruits.reverse()
    console.log(fruits.sort())
    const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
    console.log(moreFruits[1][1].shift());

    //tri par ordre alphabetique inverse
    console.log(fruits.reverse());
