
import { useState } from 'react'
import { ParagraphUnit, SelectUnit, StyledBtn, StyledContainer, StyledContainerInputs, StyledInputValue } from './main.styles'
import { CiHeart } from "react-icons/ci";
import { FaArrowRightArrowLeft, FaHeart } from 'react-icons/fa6'


const Main = () => {

    const [saved, setSaved] = useState<boolean>(false)

    return (

        <StyledContainer>
            <StyledContainerInputs>
                <SelectUnit>
                    <option value="kmToMille">km to mile</option>
                    <option value="milleToKm">mile to km</option>
                    <option value="feetToMetters">feet to metters</option>
                    <option value="mettersToFeet">metters to feet</option>
                    <option value="centimetersToInches">centimeters to inches</option>
                    <option value="inchesToCentimeters">inches to centimeters</option>
                </SelectUnit>
                <StyledBtn><FaArrowRightArrowLeft size={15} /></StyledBtn>
            </StyledContainerInputs>
            <StyledContainerInputs>
                <StyledInputValue />
                <ParagraphUnit >Km</ParagraphUnit>
            </StyledContainerInputs>
            <StyledContainerInputs>
                <StyledBtn onClick={() => setSaved(!saved)}>{saved ? <FaHeart size={20} /> : <CiHeart size={20} />}</StyledBtn>
                <ParagraphUnit >62.00</ParagraphUnit>
            </StyledContainerInputs>
        </StyledContainer >



    )
}

export default Main
