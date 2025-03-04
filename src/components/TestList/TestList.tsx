import {ListTitle} from "../../constants/constants";
import ListItem from "../ListItem/ListItem";
import {Site, Test} from '../../types/types'
import cx from 'classnames'
import styles from './TestStyle.module.scss'


interface TestListProps {
    tests?: Test[],
    sites: Site[],
    onFilterByName?: () => void,
    onFilterByType?: () => void,
    onFilterBySite?: () => void,
    onFilterByStatus?: () => void,
}

export const TestList = ({
                             tests,
                             sites,
                             onFilterByName,
                             onFilterByType,
                             onFilterBySite,
                             onFilterByStatus,
                         }: TestListProps) => {
    return (
        <>
            <div className={styles.testList}>
                <p
                    onClick={onFilterByName}
                    className={cx(styles.testList__text, styles.testList__name)}
                >
                    {ListTitle.NAME}
                </p>
                <p
                    onClick={onFilterByType}
                    className={cx(styles.testList__text, styles.testList__type)}
                >
                    {ListTitle.TYPE}
                </p>
                <p
                    onClick={onFilterByStatus}
                    className={cx(styles.testList__text, styles.testList__status)}
                >
                    {ListTitle.STATUS}
                </p>
                <p
                    onClick={onFilterBySite}
                    className={cx(styles.testList__text, styles.testList__text_type_url)}
                >
                    {ListTitle.SITE}

                </p>
            </div>
            <ul className={styles['test-list']}>
                {tests?.map((test: Test) => (
                    <ListItem key={test.id} test={test} sites={sites}/>
                ))}
            </ul>
        </>

    )
}
