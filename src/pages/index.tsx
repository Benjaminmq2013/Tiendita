import type { NextPage } from 'next'
import { Footer } from '../components/Footer';
import Header from "../components/Header/Index"
import Hero from '../components/Hero'
import Products from '../components/Products';
import { Main } from '../layouts/Main';

const Home: NextPage = () => {
  return (
    <>
      <Header />  
      <Main>
        <Hero />  
        <Products />
      </Main>
      <Footer />
    </>
  )
}

export default Home
