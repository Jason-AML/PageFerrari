import { CardNew } from "./CardNew";
import newData from "../data/newData";

export const ContainerNews = () => {
  return (
    <section className="news-section">
      <CardNew noticia={newData} />
    </section>
  );
};
