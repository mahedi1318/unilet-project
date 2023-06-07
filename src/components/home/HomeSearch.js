import React from 'react'
import { Container } from 'react-bootstrap'
import SectionHeader from './SectionHeader'
import Search from '../search/Search'

let sectionHedData = {
    headerName : "Let's keep in touch",
    headerDisc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
}

const HomeSearch = () => {
  return (
    <div className='my-4'>
        <Container>
            <SectionHeader headername={sectionHedData.headerName} headerdis={sectionHedData.headerDisc}/>
           <div className='w-50 m-auto py-4'>
                <Search/>
           </div>
        </Container>
    </div>
  )
}

export default HomeSearch