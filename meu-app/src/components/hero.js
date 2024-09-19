import styles from './hero.module.css'


function Hero() {
    return (

    <section id="quem-sou-eu">
    <div className={styles.perfil}>
        <a href="#">
        </a>
    </div>
    < div className={styles.Sobre_mim}>
    <h1>Quem sou eu?</h1>
    <p>Sou Laura Lemos da Silva, nasci em 01 de Agosto de 2005 (19 anos),sou católica e filha de maria.</p>
    <p>Acadêmica em Informática no <a href="https://portal.ifrn.edu.br/">IFRN</a>  </p>
    <p>Além de estudar, gosto de ler, assistir filmes e series, amo dançar forró e curtir momentos com minha família e amigos.</p>
    <p>Sou uma pessoa amigável,amo conversar, gente boa (com quem merece), em alguns ambientes sou tímida, além disso, sou chatinha as vezes kkk</p>
    </div>
</section>
    )
}
    
    

export default Hero