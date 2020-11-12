import React from 'react';
import Loader   from "react-loader-spinner";
import {connect} from "react-redux";

export const Preloader = ({loading}) => {
    return (<>
            {loading &&
            <Loader className='loader' type="TailSpin" color="#17a2b8" height={60} width={60}/>}
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
    }
};

export const CPreloader = connect(mapStateToProps)(Preloader);