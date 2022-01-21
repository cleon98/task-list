import React, {useState} from 'react';
import FormTodo from './FormTodo';
import TaskList from './TaskList';

const Container = () => {
    const [list, setList] = useState([]); //(B-1)

    //(A-2)
    const handleAddItem = addItem => {
        setList([...list, addItem]); //(B-2)
    };
    return (
        <div>
        {/*(A-1)*/}
        Add the things you have to do
        <FormTodo handleAddItem={handleAddItem}/>
        {/*(C)*/}
        Dont forget to delete the things you have done
        <TaskList list={list} setList={setList}/>
        </div>
    );
};
export default Container;

