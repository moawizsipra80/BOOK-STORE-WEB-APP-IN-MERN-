const Booksapi = async () => {
  const response = await fetch(
    'https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyBX7KRhoZkkxY5ml1EMkETBu2m1Ekl9_-w'
  );
  return await response.json();
};

export default Booksapi;
