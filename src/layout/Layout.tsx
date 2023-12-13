
import Header from '../components/Header/Header';
import { StyledLayout } from './layout.styles';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import SavedList from '../components/Saved/SavedList';



const Layout = () => {


    // const result = convertor.toFixed(2)

    return (
        <StyledLayout>
            <Header />
            <Main />
            <SavedList />
            <Footer />
        </StyledLayout>
    )
}

export default Layout