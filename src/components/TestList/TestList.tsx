import {ListTitle} from "../../constants/constants";
import ListItem from "../ListItem/ListItem";
import {Site, Status, Test} from '../../types/types'


interface TestListProps {
    tests?: Test[]
    sites: Site[]
}

export const TestList = ({tests, sites} : TestListProps) => {
    return (
        <div
            // className={styles.table}
        >
            <div
                // className={styles.tableTitle}
            >
                <p
                    // onClick={onFilterByName}
                    className={cx(styles.tableTitle__text, styles.tableTitle__name)}
                >
                    {ListTitle.NAME}
                </p>
                <p
                    // onClick={onFilterByType}
                    className={cx(styles.tableTitle__text, styles.tableTitle__type)}
                >
                    {ListTitle.TYPE}
                </p>
                <p
                    className={cx(styles.tableTitle__text, styles.tableTitle__status)}
                >
                    {ListTitle.STATUS}
                </p>
                <p
                    // onClick={onFilterBySite}
                    // className={cx(styles.tableTitle__text, styles.tableTitle__text_type_url)}
                >
                    {ListTitle.SITE}

                </p>
            </div>
            {tests?.map((test: Test) => (
                <ListItem key={test.id} test={test} sites={sites}/>
            ))}
        </div>
    )
}
