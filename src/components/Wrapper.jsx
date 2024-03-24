export default function Wrapper(props) {
  return (
    <div class="py-16 px-16" {...props}>
      {props.children}
    </div>
  );
}
