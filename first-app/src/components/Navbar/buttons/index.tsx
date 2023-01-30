import styles from './Button.module.scss';



interface Props {
    text: string,
    icon:any
    type?:"button" | "submit" | "reset" | undefined,
    onClick?:()=>void
}


export default function Button({ text,icon,type,onClick }: Props) {
    const ImgSvg = icon;
    return (
        <button
            className={styles.button}
            type={type}
            onClick={onClick}
            >
            <ImgSvg />
            {text}
        </button>
    )
}