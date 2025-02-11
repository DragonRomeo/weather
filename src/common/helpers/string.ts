export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeLabel(label: string): string {
  if (!label) {
    return label;
  }
  const separatedWords = label.toUpperCase().split(' ');
  return separatedWords
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(' ');
}

export function interpolateStrings(str: string, ...args: string[]): string {
  for (let i = 0; i < args.length; i++) {
    const regex = new RegExp(`\\{${i}\\}`, 'g');
    str = str.replace(regex, args[i]);
  }
  return str;
}
