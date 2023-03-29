import { useState, useEffect } from "react";

export const DarkModeToggle = ({ theme, onClick }: { theme: string | undefined, onClick: any }) => {
    const [thameName, setThameName] = useState<string | undefined>(undefined);

    useEffect(() => {
        setThameName(theme);
    }, [theme]);

    return (
        <div className="dark-mode--toggle" onClick={onClick}>
            <span className={thameName === 'light-mode' ? 'la la-sun' : 'la la-cloud'}></span>
        </div>
    )
}