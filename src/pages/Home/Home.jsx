import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import { news } from '../../Data.js';
import { HomeBody } from './HomeStyled';
import { getAllPosts } from '../../services/userSerices.js';

export default function Home() {
 async function  findAllPosts() {
    const response =  await getAllPosts();
    console.log(response);
}

findAllPosts();

  return (
    <>
      <NavBar />
      <HomeBody>
        {news.map((item, index) => (
          <Card key={index} news={item} />
        ))}
      </HomeBody>
    </>
  );
}
