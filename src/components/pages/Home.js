import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'

import saving from '../../img/savings.svg'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos</p>
            <LinkButton to="/newproject" text="Criar Projeto" />
            <img src={saving} alt="Costs"/>
        </section>
    )
}

export default Home