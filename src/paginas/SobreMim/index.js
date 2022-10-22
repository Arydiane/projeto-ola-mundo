import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import minhaFoto from "assets/minha_foto.jpg"

export default function SobreMim(){
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Arydiane Jardim!
            </h3>
            <img 
                className={styles.fotoSobreMim}
                src={minhaFoto}
                alt="Avatar de Arydiane sorrindo"
            />
            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou Arydiane Jardim, desenvolvedora web front-end e estou feliz em te ver por aqui. 
            </p>
            <p className={styles.paragrafo}>
                Minha história com a computação começou lá na adolescência com 13 anos, quando fiz os primeiros cursos de informática na FAETEC. Participei de vários cursos como: informática básica e avançada, funcionamento da internet, computação gráfica com Photoshop e Corel Draw, Microsoft Access, entre outros.  Como gostava muito da área assim que formei no ensino médio entrei para curso técnico em informática da FAETEC, onde pude conhecer e estudar mais sobre programação. 
            </p>
            <p className={styles.paragrafo}>
                Assim que terminei o curso técnico, o INFES instituto de educação da Universidade Federal Fluminense que existe em minha cidade natal, abriu a primeira turma do curso de Licenciatura em Computação da qual fiz parte. 
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, pude aprofundar ainda mais na área da ciência da computação e também conhecer um pouco da parte pedagógica que envolve todo o processo de ensino. Como sempre gostei de programar durante a graduação participei de alguns projetos de pesquisa e de iniciação científica voltados para a programação em C e C++. 
            </p>
            <p className={styles.paragrafo}>
                Nos últimos anos atuei na área de educação no corpo administrativo de um colégio como especialista em TI, onde prestava suporte e treinamento no uso de sistemas, elaborava artes e planilhas e mantinha o site institucional atualizado. 
            </p>
            <p className={styles.paragrafo}>
                Atualmente tenho estudado realizado diversos cursos na área de desenvolvimento web para aprimorar meus conhecimentos em HTML, CSS, Javascript e React.  Tenho desenvolvido projetos web Front-end e pretendo migrar para esta carreira e voltar a atuar com área de programação pela qual me encantei lá na adolescência quando comecei a conhecer um pouco mais sobre a área.
            </p>
        </PostModelo>
    )
}