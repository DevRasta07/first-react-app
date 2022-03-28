import { useState, useEffect } from 'react'
import Champion from './Champion'
import styles from "./ChampionsList.module.css"

function ChampionsContainer() {
    const [championsList, setChampionsList] = useState([])

    useEffect(async () => {
        const URL = "http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json"
        const response = await fetch(URL)
        const json = await response.json()
        const champions = json.data

        const championsKeys = Object.keys(champions)
       
        setChampionsList(championsKeys.map(key => champions[key]))
    }, [])
    
    return (
        <div className={styles.championsList}>
            {championsList.map(champion => <Champion name={champion.name} />)}
        </div>
    )
}

export default ChampionsContainer