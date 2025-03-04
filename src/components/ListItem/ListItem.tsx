import { Site, Status, Test } from '../../types/types'
import { checkDone, getUrlBySiteId, statusFromUpperCase, typeFromUpperCase } from '../../utils/utils'
import Button from '../../containers/Button/Button'
import styles from './ListItem.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'

interface TableRowProps {
  test: Test
  sites: Site[]
}

const ListItem = ({test, sites}: TableRowProps) => {
  const textButton = checkDone(test.status)

  function checkStatus(status: Status) {
    switch (status) {
      case 'ONLINE':
        return styles.tableRow__text_type_online;
      case 'DRAFT':
        return styles.tableRow__text_type_draft;
      case 'PAUSED':
        return styles.tableRow__text_type_paused;
      case 'STOPPED':
        return styles.tableRow__text_type_stopped;
      default:
        return status;
    }
  }

  function colorBySite(siteId: number) {
    switch (siteId) {
      case 2:
        return styles.tableRow__label_type_delivery;
      case 3:
        return styles.tableRow__label_type_games
      default:
        return siteId
    }
  }

  return (
    <Link className={styles.tableRow} to={`${textButton === 'Results' ? 'results' : 'finalize'}/${test.id}`}>
      <div className={cx(styles.tableRow__label, colorBySite(test.siteId))} />
      <p className={styles.tableRow__name}>{test.name}</p>
      <p className={cx(styles.tableRow__text, styles.tableRow__type)}>
        {typeFromUpperCase(test.type)}
      </p>
      <p className={cx(styles.tableRow__text, styles.tableRow__text_type_bold, checkStatus(test.status))}>
        {statusFromUpperCase(test.status)}
      </p>
      <p className={cx(styles.tableRow__text, styles.tableRow__text_type_url)}>
        {getUrlBySiteId(test.siteId, sites)}
      </p>
      <Button className={textButton === 'Results' ? styles.tableRow__button_green : styles.tableRow__button_gray}>
        {textButton}
      </Button>
    </Link>
  )
}

export default ListItem
