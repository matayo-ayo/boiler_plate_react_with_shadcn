import { useEffect } from "react";

const Title = (title: string) => {
  useEffect(() => {
    document.title = `nishule | ${title}`;
  }, [title]);
};

export default Title;
