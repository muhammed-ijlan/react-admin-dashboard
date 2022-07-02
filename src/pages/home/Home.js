import { useEffect, useMemo, useState } from "react"; import axios from 'axios'
import Chart from '../../components/featuredInfo/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

import './Home.css'
import { axiosInstance } from "../../config";

export default function Home() {

    const [userStats, setUserStats] = useState([])

    const MONTHS = useMemo(() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Oct", "Nov", "Dec"], [])

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axiosInstance.get("/users/stats", {
                    headers: {
                        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                })

                const statsList = res.data.sort(function (a, b) {
                    return a._id - b._id
                })

                statsList.map(item => setUserStats(prev => [...prev, { name: MONTHS[item._id - 1], "New User": item.total }]))

            } catch (err) {
                console.log(err);
            }
        }
        getStats();
    }, [MONTHS])



    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userStats} title='User Analytics' grid dataKey='New User' />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
