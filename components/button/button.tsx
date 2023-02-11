import style from './button.module.scss';

type Props = {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({
  label,
  onClick,
}) => {


  return (
    <button
      className={style.button}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
