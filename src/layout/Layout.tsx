import { RootState } from '@reduxjs/toolkit/query';
import { useDispatch, useSelector } from 'react-redux';
import { kilometersToMiles } from '../store/slices/convertor/convertorSlice';
import { AppDispatch } from '../store/store';

const Layout = () => {
    const convertor = useSelector((state: RootState) => state?.convertor.value);
    const dispatch = useDispatch<AppDispatch>();


    return (
        <div>
            <button onClick={() => dispatch(kilometersToMiles())}>
                Convertor : {convertor}
            </button>
        </div>
    )
}

export default Layout