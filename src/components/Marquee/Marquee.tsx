import MarqueeProps from "./Marquee.types";
import styles from "./Marquee.module.scss";

const Marquee = ({ items, speed }: MarqueeProps) => {
  const render = Array.from({ length: 10 }, () => items);

  return (
    <div className={styles.marquee}>
      <div
        className={styles.marquee_content}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {render.map((item, key) => (
          <span key={`${key}-${Math.random().toString(36)}`}>{item}</span>
        ))}
        {render.map((item, key) => (
          <span key={`${key}-${Math.random().toString(36)}`}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export { Marquee };
