export function dateformat(value: any) {
  if (!value) return '-';

  const date = new Date(value);
  return date.toLocaleDateString();
}
