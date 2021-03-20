import React, { useState } from 'react'
import Header from './Header'
import SearchList from './SearchList'
import data from '../searchData.json'

function Layout() {
    const API_DATA = data.sections[0].assets
    const [filteredData, setApiData] = useState(API_DATA)
    return (
        <div>
            <Header setApiData={setApiData} apiData={API_DATA}></Header>
            <SearchList apiData={filteredData}></SearchList>
        </div>
    )
}

export default Layout
