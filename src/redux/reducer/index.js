import { ReactComponent as HomeIcon } from "../../assets/home.svg";
// import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as ImageIcon } from "../../assets/image.svg";
import { ReactComponent as UserIcon } from "../../assets/user.svg";
import { ReactComponent as InboxIcon } from "../../assets/inbox.svg";

let initState = {
    leftbar:{
        currentId : 0,
        list : [
            {
                icon : <HomeIcon/>,
                name : 'HOME'
            },
            {
                icon : <ImageIcon/>,
                name : 'IMAGE'
            },
            {
                icon : <InboxIcon/>,
                name : 'INBOX'
            },
            {
                icon : <UserIcon/>,
                name : 'USER'
            }
        ]
    }
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'LEFTBAR_CLICKED': {
            return {
                ...state,
                leftbar:{
                    ...state.leftbar,
                    currentId : action.payload.id
                }
            }
        }
        default: return state
    }

}

export default reducer;