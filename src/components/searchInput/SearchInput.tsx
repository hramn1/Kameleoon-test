import styles from './styles.module.css'
import searchIcon from '../../img/icons/search-icon.svg'

interface SearchInputProps {
  total: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export const SearchInput = ({total, onChange, value}: SearchInputProps) => {
  return (
    <div className={styles.search}>
      <img className={styles.search__icon} src={searchIcon} alt='search-icon' />
      <input
        className={styles.search__input}
        type='search'
        placeholder='What test are you looking for?'
        onChange={onChange}
        value={value}
      />
      <span className={styles.search__total}>{total} tests</span>
    </div>
  )
}

