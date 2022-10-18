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
