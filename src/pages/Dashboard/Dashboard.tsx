import {SearchInput} from '../../components/searchInput/SearchInput'
import styles from './Dashboard.module.scss'
import Button from "../../containers/Button/Button";
import {TestList} from "../../components/TestList/TestList";
import { Site, Status, Test } from '../../types/types'
import React, {useState} from "react";

interface DashboardProps {
    tests: Test[]
    sites: Site[]
}

export const Dashboard = ({sites, tests} : DashboardProps ) => {
    const [search, setSearch] = useState<string>('')
    const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) =>{
        setSearch(evt.target.value)
    }
    const handleResetBtn = ()=>{
        setSearch('')
    }
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
                   tests={tests}
                   sites={sites}
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
