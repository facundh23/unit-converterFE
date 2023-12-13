
// import { useState } from 'react'
import { StyledList } from './saved.styles'
import SavedCard from './SavedCard'

const SavedList = () => {
    // const [saved, setSaved] = useState([])
    return (
        <>
            <h4 style={{ color: 'white', padding: '5px', fontSize: '25px', marginTop: '10px' }}>Saved</h4>
            <StyledList>
                <SavedCard />
                <SavedCard />
                <SavedCard />
                <SavedCard />


            </StyledList>

        </>
    )
}

export default SavedList
