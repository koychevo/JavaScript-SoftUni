function showHeros(herosInput) {
    let heros = [];
    for( let hero of herosInput) {
        let [name, level, items] = hero.split(' / ');
        level = Number(level);
        items = sortItems(items);
        let heroObj = {
            heroName: name,
            level: level,
            items: items 
        }
        heros.push(heroObj);
    }
    heros.sort((a, b) => a.level - b.level);
    
    for(let hero of heros) {
        for(let key in hero) {
            if(key === 'heroName') {
                console.log(`Hero: ${hero[key]}`);
            } else {
                console.log(`${key} => ${hero[key]}`);
            }
        }
    }
    
    function sortItems(str) {
        let items = str.split(', ')
        items.sort();
        return items.join(', ');
    }
}

showHeros([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]);

/*
Task: Create a function which creates a register for heroes, with their names, level, and items (if they have such). 
The input comes as array of strings. Each element holds data for a hero, in the following format:
“{heroName} / {heroLevel} / {item1}, {item2}, {item3}...” 
You must store the data about every hero. The name is a string, the level is a number and the items are all strings.
The output is all of the data for all the heroes you’ve stored sorted ascending by level and the items are sorted alphabetically. The data must be in the following format for each hero:
Hero: {heroName}
level => {heroLevel}
Items => {item1}, {item2}, {item3}
*/
