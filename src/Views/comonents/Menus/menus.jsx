import React from 'react';

import { Menu } from 'antd';

import './style.css';

const categories = ['Home', 'category', 'About Me'];

// const MenuBar = () => {
//     const [current, setCurrent] = useState(categories[0]);

//     return (
//         <Menu
//             // onClick={(e) => setCurrent(e.key)}
//             selectedKeys={[categories[0]]}
//             mode="horizontal"
//             className="menuContainer"
//         >
//             {
//                 categories.map((item, index) => (
//                     <Menu.item key={item}>
//                         {item}
//                     </Menu.item>
//                 ))
//             }
//         </Menu>
//     );
// }

// export default MenuBar;

export default class Menus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: categories[0]
        }
    }
    
    render() {
        return (
            <Menu
                onClick={(e) => this.setState({ current: e.key })}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                className="menucontainer"
            >
                {
                    categories.map((item, index) => (
                        <Menu.Item key={item} >
                            {item}
                        </Menu.Item>
                    ))
                }
            </Menu>
        )
    }
}
