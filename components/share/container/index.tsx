import {
    CSSProperties,
    DetailedHTMLProps,
    FC,
    HTMLAttributes,
    JSX,
    ReactNode,
} from "react";

interface IProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}

/**
 * @since December 2024
 * @author Twizerimana
 * @see {@link https://issadevs.com} - Author's website
 */

const GContainer: FC<IProps> = ({
    children,
    className,
    style,
    ...rest
}): JSX.Element => {
    return (
        <div className={className} style={style} {...rest}>
            {children}
        </div>
    );
};

export default GContainer;