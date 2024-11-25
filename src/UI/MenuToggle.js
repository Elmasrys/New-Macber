import classes from './MenuToggle.module.css';
const Path = (props) => (
    <path
      fill="transparent"
      strokeWidth="3"
      strokeLinecap="round"
      {...props}
    />
  );
  
  export const MenuToggle = ({ toggle ,stroke}) => (
    <button onClick={toggle} className={`btn p-0 ${classes.btn_toggler}`}>
      <svg width="23" height="18" viewBox="0 0 23 18">
        <Path
          d="M 2 2.5 L 20 2.5"
          className="top"
          stroke = {`${stroke ? 'var(--primaryBlue-color)' : 'var(--white-color)'}`}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" stroke = {`${stroke ? 'var(--primaryBlue-color)' : 'var(--white-color)'}`}/>
        <Path
          d="M 2 16.346 L 20 16.346"
          className="bottom"
          stroke = {`${stroke ? 'var(--primaryBlue-color)' : 'var(--white-color)'}`}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  );
  