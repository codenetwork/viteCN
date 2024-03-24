// export default function Link(props) {
//   const { className = '', ...rest } = props;
//   const classes = `hover:text-primary hover:scale-105 transition ${className}`
//   return <a className={classes} {...rest}>{ props.children }</a>
// }


export default function Link(props) {
  return <><a target={props.target} href={props.href} class={"w-max mx-0 hover:text-primary hover:scale-110 transition" + " " + props?.class}>{props.children}</a></>
}