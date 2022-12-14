const Team = require("../models/Team");

module.exports = async () => {
  const teams = [
    { code: "ar", name: "Argentina", flag: "๐ฆ๐ท" },
    { code: "au", name: "Australia", flag: "๐ฆ๐บ" },
    { code: "be", name: "Belgium", flag: "๐ง๐ช" },
    { code: "br", name: "Brazil", flag: "๐ง๐ท" },
    { code: "ch", name: "Switzerland", flag: "๐จ๐ญ" },
    { code: "co", name: "Colombia", flag: "๐จ๐ด" },
    { code: "cr", name: "Costa Rica", flag: "๐จ๐ท" },
    { code: "de", name: "Germany", flag: "๐ฉ๐ช" },
    { code: "dk", name: "Denmark", flag: "๐ฉ๐ฐ" },
    { code: "eg", name: "Egypt", flag: "๐ช๐ฌ" },
    { code: "es", name: "Spain", flag: "๐ช๐ธ" },
    { code: "fr", name: "France", flag: "๐ซ๐ท" },
    { code: "hr", name: "Croatia", flag: "๐ญ๐ท" },
    { code: "ir", name: "Iran", flag: "๐ฎ๐ท" },
    { code: "is", name: "Iceland", flag: "๐ฎ๐ธ" },
    { code: "jp", name: "Japan", flag: "๐ฏ๐ต" },
    { code: "kr", name: "Korea Republic", flag: "๐ฐ๐ท" },
    { code: "ma", name: "Morocco", flag: "๐ฒ๐ฆ" },
    { code: "mx", name: "Mexico", flag: "๐ฒ๐ฝ" },
    { code: "nd", name: "England", flag: "๐ด๓ ง๓ ข๓ ฅ๓ ฎ๓ ง๓ ฟ" },
    { code: "ng", name: "Nigeria", flag: "๐ณ๐ฌ" },
    { code: "pa", name: "Panama", flag: "๐ต๐ฆ" },
    { code: "pe", name: "Peru", flag: "๐ต๐ช" },
    { code: "pl", name: "Poland", flag: "๐ต๐ฑ" },
    { code: "pt", name: "Portugal", flag: "๐ต๐น" },
    { code: "rs", name: "Serbia", flag: "๐ท๐ธ" },
    { code: "ru", name: "Russia", flag: "๐ท๐บ" },
    { code: "sa", name: "Saudi Arabia", flag: "๐ธ๐ฆ" },
    { code: "se", name: "Sweden", flag: "๐ธ๐ช" },
    { code: "sn", name: "Senegal", flag: "๐ธ๐ณ" },
    { code: "tn", name: "Tunisia", flag: "๐น๐ณ" },
    { code: "uy", name: "Uruguay", flag: "๐บ๐พ" },
  ];

  Team.syncIndexes(); // Explicaciรณn: http://thecodebarbarian.com/whats-new-in-mongoose-5-2-syncindexes
  await Team.insertMany(teams);

  console.log(`Se guardaron ${teams.length} equipos en la base de datos`);
};
