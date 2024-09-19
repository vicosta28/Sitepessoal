import styles from './header.module.css'


function Header() {
    return (
        <header>
            <div className={styles.interface}>
                <div className={styles.interface}>
                    <div>
                        <h1 className={styles.titulo_principal}>LL</h1>
                        <p> | Estudante de Informática |</p>
                        <img src="imagens/image.png" width="200" height="300"></img>
                    </div>
                </div>
                <div>
                    <nav className={styles.menu_desktop}>
                        <ul>
                            <li><a href="#inicio">Início</a></li>
                            <li><a href="#Quem_sou_eu">Quem sou eu?</a></li>
                            <li><a href="#curiosidades">Curiosidades</a></li>
                            <li><a href="#projetos_do_github">3 Projetos do Github</a></li>
                            <li><a href="#redes-sociais">Contatos</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
    
    

export default Header