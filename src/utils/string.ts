export const capitalizeName = (name: string) => (name ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() : '');

export const removeUnderscore = (sentence: string) => (sentence ? sentence.replace(/_/g, ' ') : '');

export const capitalizeSentence = (sentence: string) => {
  if (sentence) {
    const words = removeUnderscore(sentence).split(' ');
    const capitalization = words.map((word: string) => capitalizeName(word));
    return capitalization.join(' ');
  }
  return '';
};

export const getFriendlyMetricName = (name: string): string => {
  switch (name) {
    case 'male_avg_volume':
      return 'Promedio Masculino';
    case 'female_avg_volume':
      return 'Promedio Femenino';
    case 'child_avg_volume':
      return 'Promedio en Niños (0 a 13 años)';
    case 'teen_avg_volume':
      return 'Promedio en Adolecentes (14 a 20 años)';
    case 'young_adult_avg_volume':
      return 'Promedio en Jovenes Adultos (21 a 40 años)';
    case 'adult_avg_volume':
      return 'Promedio en Adultos (41 a 60 años)';
    case 'old_avg_volume':
      return 'Promedio en Adultos Mayores (61 años o más)';
    case 'male_avg_walls':
      return 'Promedio Masculino';
    case 'female_avg_walls':
      return 'Promedio Femenino';
    case 'child_avg_walls':
      return 'Promedio en Niños (0 a 13 años)';
    case 'teen_avg_walls':
      return 'Promedio en Adolecentes (14 a 20 años)';
    case 'young_adult_avg_walls':
      return 'Promedio en Jovenes Adultos (21 a 40 años)';
    case 'adult_avg_walls':
      return 'Promedio en Adultos (41 a 60 años)';
    case 'old_avg_walls':
      return 'Promedio en Adultos Mayores (61 años o más)';
    case 'male_avg_ventricle_area':
      return 'Promedio Masculino';
    case 'female_ventricle_area':
      return 'Promedio Femenino';
    case 'child_ventricle_area':
      return 'Promedio en Niños (0 a 13 años)';
    case 'teen_ventricle_area':
      return 'Promedio en Adolecentes (14 a 20 años)';
    case 'young_adult_ventricle_area':
      return 'Promedio en Jovenes Adultos (21 a 40 años)';
    case 'adult_ventricle_area':
      return 'Promedio en Adultos (41 a 60 años)';
    case 'old_ventricle_area':
      return 'Promedio en Adultos Mayores (61 años o más)';

    default:
      return 'N/A';
  }
};
