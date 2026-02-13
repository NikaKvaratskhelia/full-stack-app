export async function GetMovies() {
  const resp = await fetch("api/movies");
  return resp;
}

export async function GetMovieById(id: number) {
  const resp = await fetch(`api/movies/${id}`);
  return resp;
}
