import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faFire}
        className={`pr- ${priority > 0 ? " text-red-400 " : "text-slate-400 "}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr- ${priority > 1 ? " text-red-400 " : "text-slate-400 "}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr- ${priority > 2 ? " text-red-400 " : "text-slate-400 "}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr- ${priority > 3 ? " text-red-400 " : "text-slate-400 "}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr- ${priority > 4 ? " text-red-400 " : "text-slate-400 "}`}
      />
    </div>
  );
};

export default PriorityDisplay;
