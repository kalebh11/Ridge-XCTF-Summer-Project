import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { Athlete } from "../../athlete.model";

type Props = {
  athleteList: Athlete[];
  setAthletesList: React.Dispatch<React.SetStateAction<Athlete[]>>;
};
export const SideList: FC<Props> = ({ athleteList, setAthletesList }) => {
  const navigate = useNavigate();
  const redirectToCalender = () => {
    window.open(
      "https://docs.google.com/document/d/1cnm8DjjD1yZzN8KyD9BxkKGu9SG58L5qmNRECV_O78Q/edit?usp=sharing"
    );
    //change link later!!!
  };
  const redirectToPlans = () => {
    window.open(
      "https://docs.google.com/document/d/1cnm8DjjD1yZzN8KyD9BxkKGu9SG58L5qmNRECV_O78Q/edit?usp=sharing"
    );
  };
  const redirectToHome = () => {
    navigate("/");
  };

  const redirecToMeets = () => {
    navigate("/meets");
  };

  const redirectToRoster = () => {
    navigate("/roster");
    const array = athleteList
      .slice()
      .sort((a, b) => Number(b.vdot) - Number(a.vdot));
    setAthletesList(array);
  };

  const slide = useSpring({
    from: { x: -200 },
    to: { x: 0 },
  });
  return (
    <div className="outer">
      <div className="leftSpacing">
        <animated.button
          style={slide}
          className="button3"
          onClick={redirectToHome}
        >
          <span>Home </span>
        </animated.button>
      </div>
      <div className="leftSpacing">
        <animated.button
          style={slide}
          className="button3"
          onClick={redirectToCalender}
        >
          <span>Calender </span>
        </animated.button>
      </div>
      <div className="leftSpacing">
        <animated.button
          style={slide}
          className="button3"
          onClick={redirecToMeets}
        >
          <span>Meets </span>
        </animated.button>
      </div>
      <div className="leftSpacing">
        <animated.button
          style={slide}
          className="button3"
          onClick={redirectToRoster}
        >
          <span>Roster </span>
        </animated.button>
      </div>
      <div className="leftSpacing">
        <animated.button
          style={slide}
          className="button3"
          onClick={redirectToPlans}
        >
          <span>Plans </span>
        </animated.button>
      </div>
    </div>
  );
};

export default SideList;
