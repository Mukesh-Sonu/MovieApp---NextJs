import Link from "next/link";
import Image from "next/image";

const Movie = ({ id, title, posterPath, releaseDate }) => {
  const ImagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1>{title}</h1>
      <h5>{releaseDate}</h5>
      <Link href={`${id}`}>
        <Image
          src={`${ImagePath}${posterPath}`}
          alt={title}
          width={800}
          height={800}
        />
      </Link>
    </div>
  );
};

export default Movie;
