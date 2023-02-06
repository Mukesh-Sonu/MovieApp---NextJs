import Image from "next/image";

export const generateStaticParams = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
};

const MovieDetail = async ({ params }) => {
  const { movie } = params;
  const ImagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const movieDetails = await data.json();

  return (
    <div>
      <div>
        <h2 className="text-2xl">{movieDetails.original_title}</h2>
        <h2 className="text-lg">{movieDetails.release_date}</h2>
        <h2 className="text-lg">Runtime: {movieDetails.runtime} minutes</h2>
        <h2 className="text-sm bg-green-600 inline-block py-2 px-4 rounded-md my-2">
          {movieDetails.status}
        </h2>

        <Image
          className="my-12 w-full"
          src={`${ImagePath}${movieDetails.backdrop_path}`}
          width={1000}
          height={1000}
          priority
        />
        <p>{movieDetails.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
