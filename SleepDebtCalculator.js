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

/*const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday')
+ getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') +
getSleepHours('saturday') + getSleepHours('sunday');*/

const getActualSleepHours = () => 6 + 5 + 7 + 6 + 3 + 8 + 8;

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  let actualSleepHours  = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  
  if (actualSleepHours === idealSleepHours) {
    console.log('perfect amount of sleep');
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log('need more sleep');
  }
  else if(actualSleepHours < idealSleepHours) {
    console.log('you owe ' + (idealSleepHours - actualSleepHours) + ' hours of sleep so you need more rest');
  }
}

calculateSleepDebt();

