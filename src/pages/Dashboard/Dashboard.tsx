import {SearchInput} from '../../components/searchInput/SearchInput'
import styles from './Dashboard.module.scss'
import Button from "../../containers/Button/Button";
import {TestList} from "../../components/TestList/TestList";
import { Site, Status, Test } from '../../types/types'
import React, {useState} from "react";
import { sortedListByName, sortedListBySite, sortedListByType } from '../../utils/utils';

interface DashboardProps {
    tests: Test[]
    sites: Site[]
}

export const Dashboard = ({sites, tests} : DashboardProps ) => {
    const [search, setSearch] = useState<string>('')
    const [ascending, setAscending] = useState<boolean>(true);
    const [testsSorted, setTests] = useState<Test[]>(tests)
    const [sitesSorted, setSites] = useState<Site[]>(sites)
    const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) =>{
        setSearch(evt.target.value)
    }
    const handleResetBtn = ()=>{
        setSearch('')
    }
    const handleSortByName = () => {
        setAscending((prevAscending) => !prevAscending);
        const filteredList = sortedListByName(testsSorted, ascending)
        setTests(filteredList);
    };

    const handleSortByType = () => {
        setAscending((prevAscending) => !prevAscending);
        const filteredList = sortedListByType(testsSorted, ascending)
        setTests(filteredList);
    };

    const handleSortBySite = () => {
        setAscending((prevAscending) => !prevAscending);
        const filteredList = sortedListBySite(tests, ascending, sitesSorted)
        setTests(filteredList);
    };
    return (
        <div className={styles.dashboard}>
            <header>
                <h1 className={styles['dashboard__title']}>Dashboard</h1>
            </header>
            <SearchInput
                total={tests.length}
                onChange={handleSearch}
                value={search}
            />
            {tests.length !== 0 ?
                <TestList
                   tests={testsSorted}
                   sites={sites}
                   onFilterByName={handleSortByName}
                   onFilterByType={handleSortByType}
                   onFilterBySite={handleSortBySite}
                />
                : <div className={styles.plug}>
                <h2 className={styles.plug__title}>
                    Your search did not match any results.
                </h2>
                <Button
                    onClick={handleResetBtn}
                    className={styles.plug__button}>
                    Reset
                </Button>
            </div>
            }
        </div>
    )
}
