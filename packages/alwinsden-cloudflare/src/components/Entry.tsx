import style from './Entry.module.css';
import alwinsdenIcon from '../../public/alwinsden-icon.svg';
const Entry = () => {
  return (
    <div className={style['web-container']}>
      <img className={style.imageController} src={alwinsdenIcon} alt="KMP Client" width={400} />
      <p className={style['web-header']}>
        alw<span>1</span>nsDen
      </p>
    </div>
  );
};

export default Entry;
