import React, {useState} from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons';
import Button, {ButtonSize, ButtonType} from "./components/button/button";
import Transition from './components/Transition/transtion'
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from './components/Icon/icon'
import Input from "./components/Input";
library.add(fas)

function App() {
  const [show ,setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Input/>
        <Menu defaultIndex='0' onSelect={(index) => {console.log(index)}}  defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem  disabled>
            cool link2
          </MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>
          </MenuItem>

            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
          </SubMenu>
          <MenuItem >
            cool link3
          </MenuItem>
        </Menu>
        <Button size='lg' onClick={() => setShow(!show)}>Toggle</Button>
        <Transition in={show} timeout={300} animation={"zoom-in-left"}>
          <div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          </div>
        </Transition>
        <Transition in={show} timeout={300} animation="zoom-in-top" wrapper>
          <Button btnType="primary" size='lg'> A large button</Button>
        </Transition>
      </header>
    </div>
  );
}

export default App;
