import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HelloWorld from "./HelloWorld";
import TodoList from './TodoListFunc';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styles from './styles/Page.module.css'

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/todoList">
                To Do List
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/helloworld">
                Hello World
      </a>
        </Menu.Item>
    </Menu>
);

class App extends Component {
    render() {
        return (
            <Router>
                <div className={styles.Page}>
                    <div className={styles.TopNavBar}>
                        <Dropdown overlay={menu}>
                            <Button className={styles.navBtn}>
                                Nav Menu<DownOutlined />
                            </Button>
                        </Dropdown>
                        <Button className={styles.navBtn}>
                            Example Button
                        </Button>
                    </div>

                    <Switch>
                        <Route path="/helloworld" component={HelloWorld}></Route>
                        <Route path="/todoList" component={TodoList}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;