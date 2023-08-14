const isUUID = (value: unknown): value is string => {
  return (
    typeof value === 'string' &&
    new RegExp(
      '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
    ).test(value)
  );
};
export default isUUID;
