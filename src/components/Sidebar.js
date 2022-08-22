import React from 'react'
// import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { leftbarClicked } from '../redux/actions/index';
import { useSelector, useDispatch } from 'react-redux';

function Sidebar() {
    const leftbar = useSelector(state => state.leftbar)
    const dispatch = useDispatch()
    const leftbarClickeD = (id) => {
        dispatch(leftbarClicked(id));
    }
    return (
        <div className='Sidebar'>
            {
                leftbar?.list?.map((item, index) => {
                    return (
                        <div className={leftbar?.currentId === index ? 'item selected' : 'item'} key={'leftbarItem' + index}
                            onClick={() => { leftbarClickeD(index) }}>
                            {item.icon}
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sidebar