export default function (record: PocketBaseRecord & any, property: string) {
  const { $pb } = useNuxtApp();
  record[property] = $pb.files.getUrl(record, record[property]);
  return record;
}
