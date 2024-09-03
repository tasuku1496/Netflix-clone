import { useProps } from "./useProps";
import { Layout } from "./Layout";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const movies = useProps(fetchUrl); // usePropsフックを使用してmoviesを取得

  return (
    <Layout
      movies={movies}
      title={title}
      isLargeRow={isLargeRow}
      {...useProps(fetchUrl)}
    />
  );
};
