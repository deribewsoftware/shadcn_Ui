import { FaUsers } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { SiCoursera } from "react-icons/si";

export const dashboardContents = [
  {
    url: "create-course",
    name: "Create Course",
    icon: SiCoursera,
  },
  {
    url: "manage-users",
    name: "Manage Users",
    icon: FaUsers,
  },
  {
    url: "course-library",
    name: "Course Library",
    icon: BsBook,
  },
  {
    url: "schedule-classes",
    name: "Schedule Classes",
    icon: AiOutlineSchedule,
  },
  {
    url: "platform-settings",
    name: "Platform Settings",
    icon: FiSettings,
  },
  // Add more items as needed
];
