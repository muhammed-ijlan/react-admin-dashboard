import React from 'react'
import Chart from '../../components/featuredInfo/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import { userData } from '../../components/featuredInfo/chart/dummyData'
import './Home.css'

export default function Home() {

    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title='User Analytics' grid dataKey='Active User' />
        </div>
    )
}
