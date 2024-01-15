import { useState } from "react";
import TodoCard from "./TodoCard";
import TodoDialogBox from "./TodoDialogBox";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/baseApi";

type TTodo = {
  _id:string,
  priority: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};
const TodoContainer = () => {
  const [priority,setPriority]=useState('');
  const { data, isLoading } = useGetTodosQuery(priority);
 
  if (isLoading) {
    return <p>This is the loading state!</p>;
  }
  return (
    <>
      <div className="m-5 flex justify-between">
        <TodoDialogBox />
        <TodoFilter  setPriority={setPriority}/>
      </div>

      <div>
        {data.length > 0 ? (
          data?.map((item:TTodo) => <TodoCard key={item._id} {...item} />)
        ) : (
          <div className="p-5 rounded  bg-red-700 m-5">
            <p className="text-center"> There is no task pending !</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoContainer;
