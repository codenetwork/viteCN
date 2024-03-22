import Navbar from "./Navbar";

export default function Header() {
  return (
    <header class="h-20 bg-dark">
      <Navbar />
    </header>
  )
  // const base = "z-20 sticky top-0"
  // const top = "bg-[rgba(20,20,20,1)]"
  // const floating = "shadow-xl bg-[rgba(12,12,12,0.8)] backdrop-blur-sm"

  // const [classes, setClasses] = useState(base +" "+top)
  // const [scroll, setScroll] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     if (scrollPosition > 100) {
  //       setScroll(true);
  //     } else {
  //       setScroll(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [])

  // useEffect(() => {
  //   scroll ? setClasses(base + " " + floating) : setClasses(base + " " + top)
  // }, [scroll])

  // return (
  //   <header class={classes} >
  //     <Navbar />
  //   </header>
  // );
}
