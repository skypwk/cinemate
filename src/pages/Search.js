import { useFetch } from "../hooks/useFetch";
import { useTitle} from "../hooks/useTitle";
import { Card } from "../components";
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export const Search = ({apiPath}) => {
  const [ searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies} = useFetch(apiPath, queryTerm);
  
  // const pageTitle = useTitle(`Search result for ${queryTerm}`)
  // useEffect(()=>{
  //   document.title = `Search result for ${queryTerm} / Cinemate`;
  // });
  


  return (
    <main>
      <section>
        <p className='text-3xl text-gray-700 dark:text-white'>{ movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'`}</p>
      </section>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {movies.map((movie)=>(
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
