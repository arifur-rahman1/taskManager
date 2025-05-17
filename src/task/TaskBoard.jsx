import { useState } from "react";
import TaskAction from "./TaskAction";
import TaskContent from "./TaskContent";
import TaskSearchBox from "./TaskSearchBox";
import AddTaskModal from "./AddTaskModal";

export default function TaskBoard() {
  const defaultTask = 
    {
      'id': crypto.randomUUID(),
      'title': "Learn React",
      'description':
        "  Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.",
      'tags': ["web", "react", "js"],
      'priority': "High",
      'isFavorite': false
    }
function handleAddTask(newTask){
	event.preventDefault();
	setTasks([...tasks, newTask]);
	setShowAddModal(false)
}


  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal]=useState(false);

  return (
    <section className="mb-20" id="tasks">
		{showAddModal && <AddTaskModal onSave={handleAddTask} />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <TaskSearchBox />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={()=> setShowAddModal(true)} />
          <div className="overflow-auto">
            <TaskContent  tasks={tasks}/>
          </div>
        </div>
      </div>
    </section>
  );
}
