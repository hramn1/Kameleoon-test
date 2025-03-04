import {Site, Status, Test} from '../../types/types'
import {checkDone, getUrlBySiteId, statusFromUpperCase, typeFromUpperCase} from '../../utils/utils'
import Button from '../../containers/Button/Button'
import styles from './ListItem.module.scss'
import cx from 'classnames'
import {Link} from 'react-router-dom'

interface ListItemProps {
    test: Test,
    sites: Site[],
    key?: number
}

const ListItem = ({test, sites}: ListItemProps) => {
    const textButton = checkDone(test.status)

    function checkStatus(status: Status) {
        switch (status) {
            case 'ONLINE':
                return styles['list-item__text_type_online'];
            case 'DRAFT':
                return styles['list-item__text_type_draft'];
            case 'PAUSED':
                return styles['list-item__text_type_paused'];
            case 'STOPPED':
                return styles['list-item__text_type_stopped'];
            default:
                return status;
        }
    }

    function colorBySite(siteId: number) {
        switch (siteId) {
            case 2:
                return styles['list-item__label_type_delivery'];
            case 3:
                return styles['list-item__label_type_games']
            default:
                return siteId
        }
    }

    return (
        <li className={styles['list-item']}>
            <Link className={styles['list-item__link']} to={`${textButton === 'Results' ? 'results' : 'finalize'}/${test.id}`}>
                <div className={cx(styles['list-item__label'], colorBySite(test.siteId))}/>
                <p className={styles['list-item__name']}>{test.name}</p>
                <p className={cx(styles['list-item__text'], styles['list-item__type'])}>
                    {typeFromUpperCase(test.type)}
                </p>
                <p className={cx(styles['list-item__text'], styles['list-item__text_type_bold'], checkStatus(test.status))}>
                    {statusFromUpperCase(test.status)}
                </p>
                <p className={cx(styles['list-item__text'], styles['list-item__text_type_url'])}>
                    {getUrlBySiteId(test.siteId, sites)}
                </p>
                <Button
                    className={cx(textButton === 'Results' ? styles['list-item__button_green'] : styles['list-item__button_gray'], styles['list-item__button'])}>
                    {textButton}
                </Button>
            </Link>
        </li>
    )
}

export default ListItem
