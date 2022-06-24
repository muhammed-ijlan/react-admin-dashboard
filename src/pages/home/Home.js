import React from 'react'
import Chart from '../../components/featuredInfo/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import { userData } from '../../components/featuredInfo/chart/dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

import './Home.css'

export default function Home() {

    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title='User Analytics' grid dataKey='Active User' />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
