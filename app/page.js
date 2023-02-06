import Movie from "./Movie";

export default async function Home() {
  // 'https://api.themoviedb.org/3/movie/popular'
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movie
            key={movie.key}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
