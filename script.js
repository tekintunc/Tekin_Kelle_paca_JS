// burada bütün çiftlikteki hayvanlar array ile sıralanır
let animals = ["tavuk", "inek", "tavuk", "inek", "koyun", "inek","domuz","tavuk","inek"];
let inek = 0;
let tavuk = 0;
let domuz = 0;
let koyun = 0;


for (let index = 0; index < animals.length; index++) {
  // her eleman için tek tek baksın
  let animallist = animals[index];
  if (animallist.includes("tavuk")) {
    tavuk++;
  } else if (animallist.includes("inek")) {
    inek++;
  } else if (animallist.includes("domuz")) {
    domuz++;
  } else if (animallist.includes("koyun")) {
    koyun++;
  }
}
console.log("Ciftlikte " +  animals.length +  " tane hayvan var");
console.log("ciftlikte "  + ((animals.length * 4) - (tavuk * 2)) + " tane hayvan ayagı var" );
console.log("kellepaçaya uygun ayak sayısı: " + (inek + koyun) * 4);
