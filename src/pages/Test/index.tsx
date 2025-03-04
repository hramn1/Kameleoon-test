import { Test } from '../../lib/types/types'
import Layout from '../../components/layout'
import styles from './styles.module.css'
import backIcon from '../../images/icons/back-icon.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getTest } from '../../lib/api/api'
import { checkDone } from '../../lib/utils'

const TestPage = () => {
  const [test, setTest] = useState<Test>()
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    getTest(Number(id))
      .then((res) => setTest(res))
      .catch((err) => console.log(err))
  }, [id])


  return (
    <Layout title={test ? checkDone(test.status) : ''} className={styles.testPage}>
      <h2 className={styles.testPage__text}>{test?.name}</h2>
      <button 
        onClick={() => navigate(-1)}
        className={styles.testPage__backButton}
      >
        <img 
          src={backIcon}
          alt='back-icon'
          className={styles.testPage__backButtonIcon}
        />
        Back
      </button>
    </Layout>
  )
}

export default TestPage
