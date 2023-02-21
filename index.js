

function scuberGreetingForFeet(distance) {

  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}



function ternaryCheckCity(city){
  const message = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return message
}



function switchOnCharmFromTip(tipAmount){
  let message;
  switch (tipAmount) {
    case "generous":
      message = "Thank you so much.";
      break;
      case "not as generous":
        message = "Thank you."
        break;
        default:
          message = "Bye."
  }
  return message
}