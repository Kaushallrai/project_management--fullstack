import { Project } from "@/state/api";
import React from "react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="mb-3 rounded-lg bg-white p-6 shadow-md dark:bg-dark-secondary dark:text-white">
      <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
        {project.name}
      </h3>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        {project.description || "No description provided"}
      </p>
      <div className="text-sm">
        <p>
          <strong className="text-gray-700 dark:text-gray-300">
            Start Date:
          </strong>{" "}
          {project.startDate || "Not set"}
        </p>
        <p>
          <strong className="text-gray-700 dark:text-gray-300">
            End Date:
          </strong>{" "}
          {project.endDate || "Not set"}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
