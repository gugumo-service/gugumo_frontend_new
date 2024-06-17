import { createSlice } from "@reduxjs/toolkit"

interface initialStateT {
    Component : any,
    isOpen : boolean,
    props? : any,
}

const initialState : initialStateT[] = [];

const modalSlice = createSlice({
    name : "modal",
    initialState,
    reducers : {
        open : (state,actions)=>{
            return [
                ...state,
                {
                    Component : actions.payload.Component,
                    isOpen : true,
                    props : actions.payload.props
                }
            ]
        },
        close : (state,actions)=>{
            return state.filter((prev)=>prev.Component !== actions.payload);
        },
        allClose : ()=>{
            return [];
        }
    }
});

export const {open,close,allClose} = modalSlice.actions;

export default modalSlice.reducer;