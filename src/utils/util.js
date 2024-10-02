import Todo from "../assets/To-do.svg";
import Inprogress from "../assets/in-progress.svg";
import Done from "../assets/Done.svg";
import Canceled from "../assets/Cancelled.svg";
import Backlog from "../assets/Backlog.svg";
import Priority0 from "../assets/No-priority.svg";
import Priority1 from "../assets/Img - Low Priority.svg";
import Priority2 from "../assets/Img - Medium Priority.svg";
import Priority3 from "../assets/Img - High Priority.svg";
import Urgent from "../assets/SVG - Urgent Priority colour.svg";

export const MappedIcons = {
  "In progress": Inprogress,
  "Todo": Todo,
  "Done": Done,
  "Cancelled": Canceled,
  "Backlog": Backlog,
  "No priority": Priority0,
  "Low": Priority1,
  "Medium": Priority2,
  "High": Priority3,
  "Urgent": Urgent
};

export const Priorities={
    "Priority 0":"No priority",
    "Priority 1":"Low",
    "Priority 2":"Medium",
    "Priority 3":"High",
    "Priority 4":"Urgent",
}
