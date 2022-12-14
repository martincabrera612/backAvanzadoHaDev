const Team = require("./../models/Team");

  const teams = [
    { code: "ar", name: "Argentina", flag: "🇦🇷" },
    { code: "au", name: "Australia", flag: "🇦🇺" },
    { code: "be", name: "Belgium", flag: "🇧🇪" },
    { code: "br", name: "Brazil", flag: "🇧🇷" },
    { code: "ch", name: "Switzerland", flag: "🇨🇭" },
    { code: "co", name: "Colombia", flag: "🇨🇴" },
    { code: "cr", name: "Costa Rica", flag: "🇨🇷" },
    { code: "de", name: "Germany", flag: "🇩🇪" },
    { code: "dk", name: "Denmark", flag: "🇩🇰" },
    { code: "eg", name: "Egypt", flag: "🇪🇬" },
    { code: "es", name: "Spain", flag: "🇪🇸" },
    { code: "fr", name: "France", flag: "🇫🇷" },
    { code: "hr", name: "Croatia", flag: "🇭🇷" },
    { code: "ir", name: "Iran", flag: "🇮🇷" },
    { code: "is", name: "Iceland", flag: "🇮🇸" },
    { code: "jp", name: "Japan", flag: "🇯🇵" },
    { code: "kr", name: "Korea Republic", flag: "🇰🇷" },
    { code: "ma", name: "Morocco", flag: "🇲🇦" },
    { code: "mx", name: "Mexico", flag: "🇲🇽" },
    { code: "nd", name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { code: "ng", name: "Nigeria", flag: "🇳🇬" },
    { code: "pa", name: "Panama", flag: "🇵🇦" },
    { code: "pe", name: "Peru", flag: "🇵🇪" },
    { code: "pl", name: "Poland", flag: "🇵🇱" },
    { code: "pt", name: "Portugal", flag: "🇵🇹" },
    { code: "rs", name: "Serbia", flag: "🇷🇸" },
    { code: "ru", name: "Russia", flag: "🇷🇺" },
    { code: "sa", name: "Saudi Arabia", flag: "🇸🇦" },
    { code: "se", name: "Sweden", flag: "🇸🇪" },
    { code: "sn", name: "Senegal", flag: "🇸🇳" },
    { code: "tn", name: "Tunisia", flag: "🇹🇳" },
    { code: "uy", name: "Uruguay", flag: "🇺🇾" },
  ];

  const teamSeeder = async () => {
    for (const team of teams) {
      const teamInstance = new Team (team);
      await teamInstance.save();
    }
    console.log("Se corrio el seeder");
  }
  teamSeeder();
 
