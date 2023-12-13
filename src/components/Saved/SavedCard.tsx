import { RxCross2 } from "react-icons/rx";
import { StyledCard, StyledDeletedBtn } from './saved.styles'
import { FaArrowRight } from "react-icons/fa6";

const SavedCard = () => (
    <StyledCard>
        <p>100 miles <FaArrowRight /> 160km </p>

        <StyledDeletedBtn><RxCross2 /></StyledDeletedBtn>
    </StyledCard>
)

export default SavedCard
