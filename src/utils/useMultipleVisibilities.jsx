function useMultipleVisibilities(count) {
  const refs = useRef([...Array(count)].map(() => React.createRef()));
  const [visibilities, setVisibilities] = useState(
    new Array(count).fill(false)
  );

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibilities((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      });
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return { refs: refs.current, visibilities };
}
export default useMultipleVisibilities