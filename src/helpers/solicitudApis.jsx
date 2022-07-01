export const getApiFull = async () => {
  const res = await fetch('/src/api/profesor.json');
  const data = await res.json();
  return data;
};

export const getApi = async (cedula) => {
  const res = await fetch('/src/api/profesor.json');
  const data = await res.json();
  const itemUser = data.filter((user) => user.NUMCED === parseInt(cedula));
  return itemUser[0];
};
