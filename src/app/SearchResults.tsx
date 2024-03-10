import {promises} from 'fs';
import {Emoji} from 'emoji-type';
// import Image from 'next/image'
import Typography from '@mui/material/Typography';

import { Item } from "@/theme";
import { Box, Grid, Stack } from "@mui/material";
import theme from '@/theme';


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
  const file = await promises.readFile(process.cwd() + '/src/app/db.json', 'utf8');
  const db = JSON.parse(file);
  console.log(db.neighbourhoods);
  return (


    <Box display="flex" justifyContent="right" alignItems="right">
      <Typography variant='h4' justifyContent="center">Here are your search results:</Typography>
      <Grid item container spacing={3} alignItems="center" columns={2} padding={5} width={500}>
      {
          db.neighbourhoods.map((data: DataObj) => (
            <Grid item xs={2} key={data.id}>
              <Item>
                <Typography variant='h6'>
                  {data.title}{" "}
                  <span>
                    -&gt;
                  </span>
                </Typography>   

                <Box
                  component="img"
                  sx={{
                    margin: 'auto'
                  }}
                  display="flex"
                  justifyContent="flex-end"
                  alt="NBHD Image"
                  src={"https://images.adsttc.com/media/images/5f2b/25d0/b357/6508/c500/03e3/newsletter/Romainville_by_Sergio_Grazia.jpg?1596663236"}
                  width={200}
                  height={200}
                />
                  <Typography variant='body2'>
                    {data.body.length > 150 ? data.body.substring(0, 50) + "..." : data.body}
                  </Typography>
                  <hr>
                  </hr>
                  <Typography variant='body2'>Avg. House Price: ${data.price}k</Typography> 
                  <Typography variant='body2'>Crimes last year: {data.crime}</Typography> 
                  <Typography variant='body2'>Convenience Score: {data.conv}</Typography> 
                  <Typography variant='body2'>Rating: {data.rating} {icon}</Typography> 
              </Item>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}