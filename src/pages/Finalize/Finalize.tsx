
import styles from './Finalize.module.css'
import backIcon from '../../img/icons/back-icon.svg'
import { useNavigate, useParams } from 'react-router-dom'


export const Finalize = () => {

    const { state } = useParams();
    const navigate = useNavigate()
    const description = state === 'results' ? 'Order basket redesing' : 'Spring promotion'



  return (
      <div
          tabIndex={0}
          onKeyDown={(evt)=>{
              console.log(evt)
              if (evt.key === 'Escape'){
                  navigate(-1)
              }
          }}
          className={styles['finalize-page']}>
          <h2 className={styles.testPage__text}>{state}</h2>
          <p>{description}</p>
          <button
              onClick={() => navigate(-1)}
              className={styles.testPage__backButton}
          >
              <img
                  src={backIcon as string}
                  alt='back-icon'
                  className={styles.testPage__backButtonIcon}
              />
              Back
          </button>
      </div>

  )
}

