import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'

type AvailableThemes = 'dark'|'light'

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault(); //não segue o link

        setTheme(prevTheme => {
            const nextTheme = prevTheme == 'dark' ? 'light' : 'dark';
            return nextTheme;
        });

      //  document.documentElement.setAttribute('data-theme', theme);
    }

    // useEffect(() => {
    //     console.log("useEffect sem denpendência", Date.now());
    // }); // Executar todas vez que o componente renderiza na tela

    // useEffect(() => {
    //     console.log("useEffect com array deps vazio", Date.now());
    // }, []); // Executa apenas quando o React monta o componente na tela pela primeira vez

    useEffect(() => {
        console.log("Theme mudou", theme, Date.now());
        document.documentElement.setAttribute('data-theme', theme);

        return () => {
            console.log('Olha, este componente será atualizado');
        }; 
    }, [theme]); // Executa apenas quando o valor de theme muda

    return (
    <nav className ={styles.menu}> 
        <h1>{theme}</h1>
        <a className={styles.menuLink} href="#" aria-label="ir para Home" 
        title='Ir para a Home'>
            <HouseIcon />
        </a>

        <a className={styles.menuLink} href="#"
        aria-label="ir para Histórico" 
        title='Ir para a Historico'>
            <HistoryIcon />
        </a>

        <a className={styles.menuLink} href="#"
        aria-label="Configurações" 
        title='Configurações'>
            <SettingsIcon />
        </a>

        <a className={styles.menuLink} 
        href="#"
        aria-label="Mudar tema" 
        title='Mudar tema'
        onClick={handleThemeChange}
        >
            <SunIcon />
        </a>
    </nav>
    )
}