import { useState, useEffect } from "react";
import { fetchData } from "../services/api";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetchData("projects");
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return projects;
};
