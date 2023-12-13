export function dateformat(data: any) {
  // use timestamp to format date
  const date = new Date(data);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}/${month}/${year}`;
}
