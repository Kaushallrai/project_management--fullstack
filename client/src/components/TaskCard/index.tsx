import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

type TaskCardProps = {
  task: Task;
};

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="mb-4 rounded-lg bg-white shadow-md transition-transform dark:bg-dark-secondary dark:text-white">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-stroke-dark">
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            task.priority === "Urgent"
              ? "bg-red-100 text-red-700"
              : task.priority === "High"
                ? "bg-yellow-100 text-yellow-700"
                : task.priority === "Medium"
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
          }`}
        >
          {task.priority || "No Priority"}
        </span>
      </div>

      {/* Body Section */}
      <div className="space-y-4 p-4">
        {task.attachments && task.attachments.length > 0 && (
          <div className="overflow-hidden rounded">
            <Image
              src={`/${task.attachments[0].fileURL}`}
              alt={task.attachments[0].fileName}
              width={400}
              height={200}
              className="rounded-md"
            />
          </div>
        )}

        <p className="text-sm text-gray-600 dark:text-neutral-400">
          {task.description || "No description available"}
        </p>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-neutral-400">
          <div>
            <strong>Status:</strong> {task.status}
          </div>
          <div>
            <strong>Tags:</strong> {task.tags || "None"}
          </div>
          <div>
            <strong>Start Date:</strong>{" "}
            {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}
          </div>
          <div>
            <strong>Due Date:</strong>{" "}
            {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between border-t border-gray-200 p-4 dark:border-stroke-dark">
        <div className="flex items-center space-x-2">
          {task.author && (
            <div className="flex items-center justify-between">
              <Image
                src={`/${task.author.profilePictureUrl!}`}
                alt={task.author.username}
                width={30}
                height={30}
                className="h-8 w-8 rounded-full border-2 border-white object-cover dark:border-dark-secondary"
              />
              <span className="ml-2 text-sm">{task.author.username}</span>
            </div>
          )}
        </div>
        <div className="text-xs text-gray-500 dark:text-neutral-500">
          <strong>Assigned to:</strong>{" "}
          {task.assignee?.username || "Unassigned"}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
