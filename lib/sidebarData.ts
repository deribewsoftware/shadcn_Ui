import { MdOutlineDashboard } from "react-icons/md";
import { SiCoursera } from "react-icons/si";
import { PiUsersFourLight } from "react-icons/pi";

export const sidebarData=[
  // {
  //   title:"Dashboard",
  //   url:"/dashboard",
  //   icon:MdOutlineDashboard,

  // },
  {
    title:"Course",
    icon:SiCoursera,
    items:[
      {
        label:"Course List",
        url:"/dashboard/list-courses"
      },
      {
        label:"Create Course",
        url:"/dashboard/create-course"
      }, {
        label:"Approved Course",
        url:"/dashboard/approved-courses"
      }
    ]
  },
  {
    title:"User",
    icon:PiUsersFourLight,
    items:[
      {
        label:"User List",
        url:"/dashboard/user-list"
      }
    ]
  }
]