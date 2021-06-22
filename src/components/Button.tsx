import { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss';

/* 
 * Interface ButtonProps
 * A tipagem ButtonHTMLAttributes permite ao typescript saber o que exibir no Intelicense no Button
*/
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props} />
    )
}