import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Checkbox } from "./components/ui/checkbox";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  var selectedItem = false;

  const handleAddItem = () => {
    if (!!inputValue) {
      setTodoList([...todoList, inputValue]);
      console.log(inputValue);
    }
  };

  const handleRemoveItem = (removeIndex: number) => {
    setTodoList(todoList.filter((_, index) => index !== removeIndex));
  };

  return (
    <>
      <div className="w-full mx-auto border-2 rounded-md border-gray-200 p-5">
        <div className="flex justify-between">
          <p className="text-xl text-left font-bold pb-2 ">Todo List</p>
          <p className="text-xl text-left font-bold pb-2 ">
            {todoList.length} /{" "}
          </p>
        </div>
        <div className="grid-cols-2 gap-3 flex justify-between">
          <Input
            className="gap-1.5"
            type="text"
            id="todo-item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            className={`rounded-md bg-indigo-600 px-3.5 py-2.5 w-14 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex justify-end`}
            onClick={() => {
              setInputValue("");
              handleAddItem();
            }}
          >
            Add
          </Button>
        </div>

        <div className="my-3">
          {todoList.map((item, index) => (
            <p className="flex justify-between">
              <div className="flex items-start gap-1.5">
                <Checkbox
                  value={"Checkbox"}
                  onClick={() => {
                    selectedItem = true;
                  }}
                />
                <p>{selectedItem ? <dl>{item}</dl> : <p>{item}</p>}</p>
              </div>
              <div
                className="justify-self-end"
                onClick={() => handleRemoveItem(index)}
              >
                {trash}
              </div>
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

const trash = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6 text-red-700"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    />
  </svg>
);
export default App;
