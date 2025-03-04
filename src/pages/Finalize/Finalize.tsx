import styles from './Finalize.module.scss'
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
              if (evt.key === 'Escape'){
                  navigate(-1)
              }
          }}
          className={styles['finalize-page']}>
          <h2 className={styles['finalize-page__title']}>{state}</h2>
          <p className={styles['finalize-page__text']}>{description}</p>
          <button
              onClick={() => navigate(-1)}
              className={styles['finalize-page__button']}
          >
              <img
                  src={backIcon as string}
                  alt='back-icon'
                  className={styles['finalize-page__icon']}
              />
              Back
          </button>
      </div>

  )
}

