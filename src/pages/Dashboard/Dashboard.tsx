import {SearchInput} from '../../components/searchInput/SearchInput'
import styles from './Dashboard.module.scss'
import Button from "../../containers/Button/Button";
import {TestList} from "../../components/TestList/TestList";
export const Dashboard = ({sites, tests}) => {
    const onChange = ()=>{

    }
    const onClick = ()=>{

    }
    return (
        <div className={styles.dashboard}>
            <header>
                <h1>
                </h1>
            </header>
            <SearchInput
                total={4}
                onChange={onChange}
                value={'5'}
            />
            {tests.length !== 0 ?
                <TestList
                tests={tests}
                sites={sites}
                />
                : <div className={styles.plug}>
                <h2 className={styles.plug__title}>
                    Your search did not match any results
                </h2>
                <Button onClick={onClick} className={styles.plug__button}>
                    Reset
                </Button>
            </div>
            }
        </div>
    )
}
