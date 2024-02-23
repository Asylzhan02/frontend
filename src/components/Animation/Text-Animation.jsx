import "./animation.css";
import TextAnim from "./PrintsTextAnim";

const Textanim = () => {
  return (
    <div className="Text">
      <h1 className="text-animated">Соңғы қосылған мақалалар</h1>
      <TextAnim
        width={52}
        text_main={"Оқы да ғылыми әлемнің соңғы жаңалықтарына көз жүгірт"}
      />
    </div>
  );
};

export default Textanim;
