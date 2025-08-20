import "../components/CardNew.css";

export const CardNew = ({ noticia }) => {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        {noticia.map(({ title, image, content }, index) => (
          <div key={index} className="col-12 col-sm-12  col-md-6 news-card1">
            <div
              className="news-card"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "70% 55%",
                height: "600px",
                position: "relative",
              }}
            >
              <div className="news-body">
                <a href="#">
                  <i className="bxr bx-arrow-right-stroke-square"></i>
                </a>
                <div className="news-text">
                  <strong>{title}</strong>
                  <p>{content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
