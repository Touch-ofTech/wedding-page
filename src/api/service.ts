export const getData = async () => {
  const response = await fetch(
    'https://weddingpage-62db4-default-rtdb.firebaseio.com/invites.json',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return data;
};
