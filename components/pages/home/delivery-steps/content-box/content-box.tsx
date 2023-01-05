import style from './content-box.module.scss';

export const ContentBox: React.FC<{ title: string; text: string; count: number }> = ({
  title,
  text,
  count
}) => {
  return (
    <div className={style.contentBox}>
      <div className={style.boxCount}>{count}</div>
      <div className={style.boxTitle}>{title}</div>
      <div className={style.boxText}>{text}</div>
    </div>
  );
};
