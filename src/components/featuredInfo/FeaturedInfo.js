import React from 'react'
import './FeaturedInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featuredTitle'>Revanue</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$3</span>
                    <span className='featuredMoneyRate'>-11.4<ArrowDownward /></span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Sales</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$3,215</span>
                    <span className='featuredMoneyRate'>-1.4<ArrowDownward /></span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Cost</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$3,5412</span>
                    <span className='featuredMoneyRate'>+4.2<ArrowUpward /></span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
        </div>
    )
}
