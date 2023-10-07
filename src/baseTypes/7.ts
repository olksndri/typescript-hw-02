/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  MON = "MON",
  TUE = "TUE",
  WED = "WED",
  THU = "THU",
  FRI = "FRI",
  SAT = "SAT",
  SUN = "SUN",
}

const isWeekend = (weekDay: string): boolean => {
  return weekDay === "SAT" || weekDay === "SUN";
};

console.log(isWeekend(Week.MON));
console.log(isWeekend(Week.TUE));
console.log(isWeekend(Week.SAT));
console.log(isWeekend(Week.SUN));
