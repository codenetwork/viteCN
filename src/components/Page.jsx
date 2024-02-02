export default function Page(props) {
  return (
    <div class={"p-6 md:px-12 md:py-16 h-100 max-w-screen-2xl mx-auto overflow-x-hidden 2xl:overflow-x-visible	 " + " " + props.class}>
      <div class={`h-max ${props?.noborder ? "" : "edges"}`}>
        <div class="max-w-screen-xl mx-auto p-4 sm:p-8 md:py-16 md:px-16 2xl:px-0">{props.children}</div>
      </div>
    </div>
  );
}
