export default function (date: string) {
  const ms = new Date().getTime() - new Date(date).getTime();

  let ago = Math.floor(ms / 1000);
  let part = 0;

  if (ago < 2) {
    return 'il y a quelques instants';
  }
  if (ago < 5) {
    return 'il y a un moment';
  }
  if (ago < 60) {
    return 'il y a ' + ago + ' secondes';
  }

  if (ago < 120) {
    return 'il y a une minute';
  }
  if (ago < 3600) {
    while (ago >= 60) {
      ago -= 60;
      part += 1;
    }
    return 'il y a ' + part + ' minutes';
  }

  if (ago < 7200) {
    return 'il y a une heure';
  }
  if (ago < 86400) {
    while (ago >= 3600) {
      ago -= 3600;
      part += 1;
    }
    return 'il y a ' + part + ' heures';
  }

  if (ago < 172800) {
    return 'il y a un jour';
  }
  if (ago < 604800) {
    while (ago >= 172800) {
      ago -= 172800;
      part += 1;
    }
    return 'il y a ' + part + ' jours';
  }

  if (ago < 1209600) {
    return 'il y a une semaine';
  }
  if (ago < 2592000) {
    while (ago >= 604800) {
      ago -= 604800;
      part += 1;
    }
    return 'il y a ' + part + ' semaines';
  }

  if (ago < 5184000) {
    return 'il y a un mois';
  }
  if (ago < 31536000) {
    while (ago >= 2592000) {
      ago -= 2592000;
      part += 1;
    }
    return 'il y a ' + part + ' mois';
  }

  if (ago < 1419120000) {
    return "il y a plus d'un an";
  }

  return 'jamais';
}
