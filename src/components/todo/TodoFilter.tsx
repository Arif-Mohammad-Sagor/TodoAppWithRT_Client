
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type priorityPropsType = {
  setPriority:unknown
}


const TodoFilter = ({setPriority}:priorityPropsType) => {
  

  return (
    <div className="w-28 bg-red-500 bg-transparent text-black">
      <Select onValueChange={(value) => setPriority(value)}>
        <SelectTrigger  className="w-full">
          <SelectValue placeholder="Filter Todo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TodoFilter;
