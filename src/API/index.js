export const getData = async () => {
  const result = await fetch('http://localhost:3000/products', {
    method: 'GET',
  });
  return await result.json();
};
