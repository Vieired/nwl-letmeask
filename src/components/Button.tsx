import { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss';

/* 
 * Interface ButtonProps
 * A tipagem ButtonHTMLAttributes permite ao typescript saber o que exibir no Intelicense no Button
*/
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
    return (
        <button
            className={`nutton ${isOutlined ? 'outlined' : ''}`}
            {...props}
        />
    )
}