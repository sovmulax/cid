
export function countWords(str: string): number {
  const words = str.trim().split(/\s+/);
  return words.length;
}
