async function fetchData() {
  const response = await fetch(
    'http://localhost:3000/time-entries?_sort=startTimestamp&_order=desc'
  );
  return response.json();
}

export default fetchData;
