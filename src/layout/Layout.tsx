
import Header from '../components/Header/Header';
import { StyledLayout } from './layout.styles';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';



const Layout = () => {


    // const result = convertor.toFixed(2)

    return (
        <StyledLayout>
            <Header />
            <Main />
            <Footer />
        </StyledLayout>
    )
}

export default Layout