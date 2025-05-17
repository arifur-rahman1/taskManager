import TaskAction from "./TaskAction";
import TaskContent from "./TaskContent";
import TaskSearchBox from "./TaskSearchBox";

export default function TaskBoard (){

    return (
        <section className="mb-20" id="tasks">
		
		<div className="container">
		<div className="p-2 flex justify-end">
			<TaskSearchBox/>
		</div>
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskAction/>
				<div className="overflow-auto">
					<TaskContent/>
				</div>
			</div>
		</div>
	</section>
    )
}