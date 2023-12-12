import { RootState } from '@reduxjs/toolkit/query';
import { useDispatch, useSelector } from 'react-redux';
import { kilometersToMiles } from '../store/slices/convertor/convertorSlice';
import { AppDispatch } from '../store/store';
import Header from '../components/Header/Header';
import { StyledLayout } from './layout.styles';
import Footer from '../components/Footer/Footer';


const Layout = () => {
    const convertor = useSelector((state: RootState) => state?.convertor.value);
    const dispatch = useDispatch<AppDispatch>();

    const result = convertor.toFixed(2)

    return (
        <StyledLayout>
            <Header />
            <button onClick={() => dispatch(kilometersToMiles())}>
                Convertor : {result}
            </button>
            <Footer />
        </StyledLayout>
    )
}

export default Layout