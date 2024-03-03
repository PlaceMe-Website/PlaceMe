import { promises as fs } from 'fs';
import {Emoji} from 'emoji-type';

interface DataObj {
  id: number;
  title: string;
  rating: number;
  price: number;
  crime: number;
  conv: number;
  link: string;
  body: string;
}

const icon: Emoji = "⭐";

export default async function Results() {
  const file = await fs.readFile(process.cwd() + '/app/db.json', 'utf8');
  const db = JSON.parse(file);
  console.log(db.neighbourhoods);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-9">

      <h1 className="mt-1">Your search results:</h1>

      <div className="relative flex mb-32 grid text-center lg:max-w-5xl lg:max-h-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left justify-between p-9 gap-x-5 gap-y-5">
        {
          db.neighbourhoods.map((data: DataObj) => (
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-black px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
              
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {data.title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
              <img
                src={data.link}
                className="float-right relative right-2 w-40 h-40"
                alt="NBHD-Image"
              ></img>
              <p className={`m-0 max-w-[25ch] text-sm opacity-60`}>
                {data.body.length > 150 ? data.body.substring(0, 150) + "..." : data.body}
              </p>
              
              <p className={`m-0 text-sm justify-between p-1`}>Avg. House Price: ${data.price}k</p> 
              <p className={`m-0 text-sm justify-between p-1`}>Crimes last year: {data.crime}</p>
              <p className={`m-0 text-sm justify-between p-1`}>Convenience Score: {data.conv}</p> 
              <p className={`m-0 text-sm justify-between p-1`}>Rating: {data.rating} {icon} </p>
            </a>
            
          ))
        }
        

      </div>
    </main>
    
  );
}
