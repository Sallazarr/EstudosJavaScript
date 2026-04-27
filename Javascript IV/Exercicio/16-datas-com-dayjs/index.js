const dayjs = require("dayjs");

function calculateBirthday(userBirthday) {
  const birthday = dayjs(userBirthday);
  const today = dayjs();

  const yearsOld = today.diff(birthday, "years");
  const nextAnniversary = birthday.add(yearsOld + 1, "year");

  const daysToNextAnniversary = nextAnniversary.diff(today, "days");

  console.log(`Aniversário: ${birthday.format("DD/MM/YYYY")}`);
  console.log(`Data de hoje: ${today.format("DD/MM/YYYY")}`);
  console.log(`Idade: ${yearsOld}`);
  console.log(`Próximo aniversário: ${nextAnniversary.format("DD/MM/YYYY")}`);
  console.log(`Dias para o próximo aniversário: ${daysToNextAnniversary}`);
}

calculateBirthday("2005-10-06");
