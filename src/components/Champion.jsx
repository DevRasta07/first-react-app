import styles from "./Champion.module.css"

function Champion({ name }) {
    const formattedName = formattName(name)
    const championUrl = `https://www.leagueoflegends.com/pt-br/champions/${formattedName}/`

    function formattName(championName) {
        // As Nunu works different, it will be handled
        if (championName == "Nunu & Willump") return "nunu"

        // Remove white space
        let newName = championName.replace(" ", "-")

        // Remove apostrophe (')
        newName = newName.replace("'", "-")

        // Remove dot (.)
        newName = newName.replace(".", "")

        return newName.toLowerCase()
    }
    return (
        <div className={styles.championCard}>
            <h3><a href={championUrl} target="_blank">{name}</a></h3>
        </div>
    )
}

export default Champion