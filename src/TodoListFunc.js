import React, {useEffect} from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles/TopInputBar.module.css'
import {useHistory} from 'react-router-dom';

function TodoList() {

    //All states
    const dispatch = useDispatch();
    const history = useHistory();
    // const [rootStore, setRootStore] = useState(store.getState());
    const list = useSelector((store) => store.list);
    // console.log();
    const inputValue = useSelector((store) => store.inputValue);

    //All founcations
    const changeInputValue = (e) => {
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        dispatch(action);
    }

    const clickBtn = () => {
        if(inputValue ===""){
            alert("input can not be empty");
        }else{
            dispatch({ type: "addItem" })
        }
    }

    const jumpBtn = () => {
        history.push('/helloworld');
        return history;
    }
    useEffect(()=>{
        console.log(list);
        console.log(inputValue);
    });

    //store watch the page re-render
    return (
        <div className="page" style={{ margin: '10px' }}>
            <div>
                <Input
                    className={styles.topInputBar}
                    placeholder="Write Something"
                    value={inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={changeInputValue}
                >
                </Input>
                <Button type="primary" onClick={clickBtn}>Add Task</Button>
                <Button type="primary" onClick={jumpBtn}>Jump to HelloWorld</Button>
            </div>
            <div className={styles.listBlock}>
                <List bordered dataSource={list} renderItem={item => (<List.Item>{item}</List.Item>)} />
            </div>
        </div>
    )
}

export default TodoList;
