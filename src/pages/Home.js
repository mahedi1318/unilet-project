import React from 'react'
// import { Button } from 'react-bootstrap'
import Banner from '../components/banner/Banner'
import Review from '../components/home/Review'
import Works from '../components/home/works/Works'
import RecentlyReviewed from '../components/home/recentlyReviewed/RecentlyReviewed'
import OurArticles from '../components/home/OurArticles/OurArticles'


const Home = () => {
  return (
    <div>
        <Banner/>
        <Review/>
        <Works/>
        <RecentlyReviewed/>
        <OurArticles/>
    </div>
  )
}

export default Home