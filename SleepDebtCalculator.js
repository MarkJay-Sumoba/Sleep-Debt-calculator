const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 6;
      break;
    case 'tuesday':
      return 5;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 6;
      break;
    case 'friday':
      return 3;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday')
+ getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') +
getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;

  
}

