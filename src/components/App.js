import React from "react";
import Name from "./Name";
import Count from "./Count";
import Language from "./Language";

class App extends React.Component {
  render() {
    // 定数nameを定義してください
    const name = "React始めました";

    // 定数imgUrlを定義してください
    const imgUrl =
      "https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2019/07/react-960x504.jpg";

    const languageList = [
      {
        name: "HTML & CSS",
        image:
          "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg"
      },
      {
        name: "JavaScript",
        image:
          "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg"
      },
      {
        name: "React",
        image:
          "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg"
      },
      {
        name: "Ruby",
        image:
          "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg"
      },
      {
        name: "Ruby on Rails",
        image:
          "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg"
      },
      {
        name: "Python",
        image:
          "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg"
      }
    ];

    return (
      <div>
        <h1>{name}</h1>
        <img src={imgUrl} />
        <Name />
        <Count />
        <div>
          <h1>言語一覧</h1>
          <div className="language">
            {languageList.map((languageItem) => {
              return (
                <Language name={languageItem.name} image={languageItem.image} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
