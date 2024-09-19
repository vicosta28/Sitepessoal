import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
        <section id="redes-sociais">
            <h2>Contato</h2>
            <p>Você pode entrar em contato comigo através do e-mail: <a href="mailto:seuemail@example.com">lauralemos06@gmail.com</a></p>
            <p>Minhas redes sociais:</p>
            <p><a href="https://instagram.com/dm1_laurinha" target="_blank">Instagram</a></p>
            <p><a href="https://github.com/lauralemos05" target="_blank">GitHub</a></p>
        </section>
    </footer>
    )
}
    
    

export default Footer